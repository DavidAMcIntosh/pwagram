// listen for the service worker installation
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing Service Worker...', event);
});

//listen for the service worker activation
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating Service Worker...', event);
    return self.clients.claim();
});

// listen for fetch events and respond
self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetching...', event);
    event.respondWith(fetch(event.request));
});