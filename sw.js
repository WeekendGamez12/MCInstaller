var cacheArray = [

  'assets.epk',
  'classes.js',
  'classes.js.map',
  'index.html'
];
var cacheName='mcinstallercache';

self.addEventListener('install', (e)=>{
  alert('test');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(cacheArray);
    });
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
  
});
