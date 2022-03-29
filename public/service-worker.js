self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('core-cache').then(function(cache) {
            // '/' cashes index.ejs as HTML.
            return cache.addAll([
                '/fonts/Lato-Bold.ttf',
                '/fonts/Lato-Regular.ttf',
                '/fonts/Playlist Script.otf',
                '/images/background.jpg',
                '/images/barcode.png',
                '/images/placeholder.png',
                '/images/search.png',
                '/scripts/main.js',
                '/scripts/script.js',
                '/service-worker.js',
                '/styles/style.css',
                '/offline',
                '/'
            ])
        })
    )
    console.log("Service worker installed.")
})

self.addEventListener('activate', function(_event) {
    console.log("Service worker activated.")
})

self.addEventListener('fetch', function(event) {
    // Only cache the HTML file.
    if (event.request.method === 'GET' && (event.request.headers.get('accept') !== null && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            // Stale-while-revalidate (see https://web.dev/offline-cookbook/#stale-while-revalidate).
            caches.open('dynamic-cache').then(function(cache) {
                return cache.match(event.request)
                    .then(function(response) {
                        var fetchPromise = fetch(event.request).then(function (networkResponse) {
                            cache.put(event.request, networkResponse.clone())
                            return networkResponse
                        })
                    return response || fetchPromise
                    })
                    .catch(_error => {
                        return caches.open('core-cache')
                            .then(cache => cache.match('/offline'))
                    })
            }),
          )
    }
    console.log("Service worker fetched.")
})