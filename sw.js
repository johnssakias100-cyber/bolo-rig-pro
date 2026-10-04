// BOLO RIG PRO — service worker (λειτουργία χωρίς internet)
const CACHE = "bolorigpro-1.0.4";
const SHELL = ["./", "index.html", "app.js?v=1.0.2", "manifest.json", "favicon.ico",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png", "icons/favicon-64.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // σελίδα: πρώτα το δίκτυο (για ενημερώσεις), αλλιώς η αποθηκευμένη
  if (e.request.mode === "navigate") {
    const isApp = url.pathname === "/" || url.pathname.endsWith("/index.html");
    e.respondWith(fetch(e.request).then(r => { if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(isApp ? "index.html" : e.request, cp)); } return r; })
      .catch(() => (isApp ? caches.match("index.html") : caches.match(e.request).then(h => h || caches.match("index.html")))));
    return;
  }
  // υπόλοιπα (και γραμματοσειρές Google): από την αποθήκη, αλλιώς δίκτυο και αποθήκευση
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (r.ok && (url.origin === location.origin || url.host.endsWith("gstatic.com") || url.host.endsWith("googleapis.com"))) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
    return r;
  })));
});
