'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9b43bf971454c94225c8d1e4755ed4bf",
"/": "9b43bf971454c94225c8d1e4755ed4bf",
"main.dart.js": "22cb063e3fbd1a1f345b29d0cfa07dff",
"assets/LICENSE": "c1c8059bfc3561fd823f8404e1d7914f",
"assets/AssetManifest.json": "6cdc093579170bd569b4da80ca65a82c",
"assets/FontManifest.json": "984f40d74c0024755f6c7b6b2c688c09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/sounds/kick_1.wav": "21f3c463cb78fd1d793c5ad9074743b3",
"assets/assets/sounds/kick_2.wav": "f304164fa217938adb28c9c313f70ca5",
"assets/assets/sounds/open_hat.wav": "c34302c409537205d8119ca8cbf83aa7",
"assets/assets/sounds/snare_2.wav": "8a8605161e03b8c7efdc1729fcdfbf9d",
"assets/assets/sounds/clap_2.wav": "8266616ffb5884647c0413c4e7d7b880",
"assets/assets/sounds/snare_1.wav": "d56ad76de2ac912f721fb79b5f1ebc6a",
"assets/assets/sounds/hat_3.wav": "39bd4c35c393488813d6e52811ff9678",
"assets/assets/sounds/bass.wav": "8f4e457b28b4fcef04bf961b2285cdc6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
