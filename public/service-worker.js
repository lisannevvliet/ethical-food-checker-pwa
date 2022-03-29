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
                '/'
            ])
        })
    )
    console.log("Service worker installed.")
})

self.addEventListener('activate', function(event) {
    console.log("Service worker activated.")
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('dynamic-cache').then(function(cache) {
          console.log(event.request)
        return cache.match(event.request)
            .then(function(response) {
                var fetchPromise = fetch(event.request).then(function (networkResponse) {
                    cache.put(event.request, networkResponse.clone())
                    return networkResponse
                })
            return response || fetchPromise
            })
            .catch(function(error) {
                console.log(error)
            })
      }),
    )
    console.log("Service worker fetched.")
})