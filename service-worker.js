/* PtX-Systemrechner — Service Worker für Offline-Betrieb
   Cache-Version bei jedem Release der HTML hochzählen (z. B. v1-30 → v1-31),
   damit Nutzer die neue Version erhalten. */
const CACHE = 'ptx-rechner-v1-30';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installation: App-Dateien in den Cache legen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Aktivierung: alte Caches aufräumen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Abrufe: erst Cache, dann Netz (Cache-first für Offline-Fähigkeit).
// Wetterabrufe (Open-Meteo) gehen immer ans Netz und werden nicht gecached.
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('open-meteo') || url.includes('api.')) {
    return; // Netzwerk-Abrufe für Live-Daten nicht abfangen
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((resp) => {
        // Neue gleiche-Herkunft-Antworten ergänzend cachen
        if (resp && resp.status === 200 && event.request.method === 'GET' &&
            new URL(url).origin === self.location.origin) {
          const copy = resp.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
