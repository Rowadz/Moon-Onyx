if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log('Service Worker Registered');
  });
}
const cacheName = 'hello-world-page';
const filesToCache = ['/', '/index.html'];
self.addEventListener('install', (e: any) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate', (event: any) => {
  event.waitUntil((self as any).clients.claim());
});
self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});
