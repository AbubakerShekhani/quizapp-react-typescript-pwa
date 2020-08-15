console.log("Hello World")

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const dynamicContentCache = 'QuizApp-Dynamic-Content';

self.addEventListener('install', (event) => {

  const cacheAssets = [
      'https://opentdb.com/api.php?amount=10&category=18&type=multiple&difficulty=easy',
  ];

    event.waitUntil(
        caches.open(dynamicContentCache).then((cache)=>{
          console.log("cache");
          cache.addAll(cacheAssets);

        })
    )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(dynamicContentCache).then(cache => {
     return cache.match(event.request).then(response => {
      return response || fetch(event.request)
      .then(response => {
        const responseClone = response.clone();
        cache.put(event.request, responseClone);
        })
      })
    })
  )
})
