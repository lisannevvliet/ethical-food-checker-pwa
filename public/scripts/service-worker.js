const CORE = 'core-cache';
// (Images nog toevoegen.)
const CORE_FILES = [
    '/styles/style.css',
    '/scripts/script.js',
    '/fonts/Lato-Bold.ttf',
    '/fonts/Lato-Regular.ttf',
    '/fonts/Playlist Script.otf',
    '/'
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CORE).then(function(cache) {
            return cache.addAll(CORE_FILES);
        })
    )
    console.log("[serviceWorker] Installed");
})

self.addEventListener('activate', function(event) {
    console.log("[serviceWorker] Activated");
})

self.addEventListener('fetch', function(event) {
    console.log("[serviceWorker] Fetch");
})