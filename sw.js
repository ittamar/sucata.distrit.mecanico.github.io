var CACHE_NAME = 'my-site-cache-v6';
let deferredPrompt;
var urlsToCache = [
  '/',
  '/index.html',
   '/img/icones/palha-512.png',
   '/img/icones/palha-144.png',
    '/img/icones/palho.png',
    '/img/icones/android-chrome-96x96.png',
    '/img/icones/palhaco-196.png',
    '/img/icones/favico-16x16.png',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
