var CACHE_NAME = 'my-site-cache-v3';
let deferredPrompt;
var urlsToCache = [
  '/index.html',
  'manifeste,webmanifest',
  '/img/icones/palha-512.png',
   '/img/icones/palha-144.png',
    '/img/icones/palho.png',
    '/img/icones/android-chrome-96x96.png'
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
