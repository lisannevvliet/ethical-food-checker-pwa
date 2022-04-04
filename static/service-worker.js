// / cashes index.ejs as HTML.
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

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("core-cache").then(function(cache) {
            // Ensure that any new versions of the service worker will take over the page and become activated immediately.
            self.skipWaiting()
            return cache.addAll(CORE_FILES)
        })
    )
    console.log("Service worker installed.")
})

self.addEventListener("activate", function(_event) {
    console.log("Service worker activated.")
})

self.addEventListener("fetch", function(event) {
    const url = new URL(event.request.url)
    // Check if any of the requested files already exists in the core-cache.
    if (event.request.method === "GET" && CORE_FILES.includes(url.pathname)) {
        event.respondWith(
            caches.open("core-cache")
                .then(cache => cache.match(event.request.url))
        )
    // Only cache the HTML file.
    } else if (event.request.method === "GET" && (event.request.headers.get("accept") !== null && event.request.headers.get("accept").includes("text/html"))) {
        event.respondWith(
            // Stale-while-revalidate (see https://web.dev/offline-cookbook/#stale-while-revalidate).
            caches.open("dynamic-cache").then(function(cache) {
                return cache.match(event.request)
                    .then(function(response) {
                        var fetchPromise = fetch(event.request).then(function(networkResponse) {
                            cache.put(event.request, networkResponse.clone())
                            return networkResponse
                        })
                    return response || fetchPromise
                    })
                    .catch(_error => {
                        return caches.open("core-cache")
                            .then(cache => cache.match("/offline"))
                    })
            }),
          )
    }
    console.log("Service worker fetched.")
})