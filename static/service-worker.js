// Cache all static files, as well as the index.ejs and offline.ejs file.
const CORE_FILES = [
    "/fonts/Lato-Bold.ttf",
    "/fonts/Lato-Regular.ttf",
    "/fonts/Playlist-Script.otf",
    "/images/background.jpg",
    "/images/placeholder.png",
    "/images/search.png",
    "/scripts/script.js",
    "/styles/style.css",
    "/",
    "/offline"
]

// Install the service worker.
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("core-cache").then(function(cache) {
            // Ensure that any new versions of the service worker will take over the page and become activated immediately.
            self.skipWaiting()
            return cache.addAll(CORE_FILES)
        })
    )
})

// Activate the service worker.
self.addEventListener("activate", function(_event) { })

// Fetch the service worker.
self.addEventListener("fetch", function(event) {
    const url = new URL(event.request.url)
    // Check if any of the requested files already exists in the core-cache and serve them.
    if (event.request.method === "GET" && CORE_FILES.includes(url.pathname)) {
        event.respondWith(
            caches.open("core-cache")
                .then(cache => cache.match(event.request.url))
        )
    // Only request the HTML, all the other files are already in the cache.
    } else if (event.request.method === "GET" && (event.request.headers.get("accept") !== null && event.request.headers.get("accept").includes("text/html"))) {
        event.respondWith(
            // Stale-while-revalidate (see https://web.dev/offline-cookbook/#stale-while-revalidate).
            caches.open("dynamic-cache").then(function(cache) {
                return cache.match(event.request)
                    // Retrieve, cache and serve the HTML.
                    .then(function(response) {
                        var fetchPromise = fetch(event.request).then(function(networkResponse) {
                            cache.put(event.request, networkResponse.clone())
                            return networkResponse
                        })
                        return response || fetchPromise
                    })
                    // Serve the offline page if the HTML is not in the cache and there is no internet.
                    .catch(_error => {
                        return caches.open("core-cache")
                            .then(cache => cache.match("/offline"))
                    })
            })
        )
    }
})