// sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Erforderlich für PWA-Erkennung, antwortet einfach mit der Netzwerk-Anfrage
  event.respondWith(fetch(event.request));
});
