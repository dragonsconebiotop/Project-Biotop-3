self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('karteikarten-app-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/table.html',
        '/data.json',
        '/manifest.json',
        '/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
