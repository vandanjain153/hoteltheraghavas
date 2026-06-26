/* Hotel The Raghavas' — offline service worker */
const CACHE = 'raghavas-v1';

/* Files cached up front so the app opens even with no connection. */
const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.ico',
  './icons/favicon-32.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Let external requests (e.g. wa.me WhatsApp links) go straight to the network.
  if (url.origin !== self.location.origin) return;

  // Cache-first: serve from cache, otherwise fetch and store for next time
  // (this is how room photos get cached the first time they're viewed).
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((resp) => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const copy = resp.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return resp;
      }).catch(() => {
        // Offline and not cached: fall back to the home page for navigations.
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
