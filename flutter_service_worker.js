'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e1c6a9b9ef9b78b89ef7412d0ad48247",
"assets/assets/Asset1.png": "878655a58704706d7b5d3db3bf298fc3",
"assets/assets/Asset2.png": "fca146c7b1372490fa4ef592a1b260aa",
"assets/assets/avatar.png": "0c3cc8365ffd1f7ad14ad86b2d0f908e",
"assets/assets/cr.png": "2921bee17cbc43694aaceec5b18594d0",
"assets/assets/ed/pnjlogo.png": "42814adb2fe9b8ef2c4bf6e2bab9b59c",
"assets/assets/ed/sd.png": "215b842d7ef50850a373cffe70a7cd0c",
"assets/assets/ed/sma.jpg": "35b3b886bcede66925a0f43ff17a1f76",
"assets/assets/ed/smp.png": "8bbb42cf754940afb48c79c68bd1602f",
"assets/assets/education.png": "699431a7c1939454ed6640b20ef7e538",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/hack.jpg": "bf149201673652f3cc93c4ad93063bec",
"assets/assets/lock.png": "b54a15aa50b077aee7720881a1bd0a8e",
"assets/assets/logo/ajax.png": "b3c54a5cdd3f6367b3003e7b6b17cffa",
"assets/assets/logo/apn.png": "6cdf7d60043544d44100202a662550a9",
"assets/assets/logo/cs.png": "01aeba5a5fd2684a58b67b3ff82ada9d",
"assets/assets/logo/dart.png": "c979b430b2da155059ebc0a22b0a26ac",
"assets/assets/logo/docker.png": "ee5dfebee4328df3841e5580e613ded6",
"assets/assets/logo/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/logo/java.png": "62fe61954ecf5e2b41cfcc2e344adede",
"assets/assets/logo/jquery.png": "cbc528727d60b4a1aa1744d0227dc302",
"assets/assets/logo/js.png": "94ae2dcd4fa410811cab4e1fbb403340",
"assets/assets/logo/laravel.png": "d5556b807e74c5f1ba534192a5352d7a",
"assets/assets/logo/logo.png": "293619036aaf6436584c5238f175b8c8",
"assets/assets/logo/net.png": "9f34ba025d141a23334604f88367a1c1",
"assets/assets/logo/phone.png": "50257a14cc6a42317118c341265db54b",
"assets/assets/logo/php.png": "a7e143cdb49399c543297e607ff867d2",
"assets/assets/logo/python.png": "9ae7d0c2a37c4626d2ea58f615906814",
"assets/assets/logo/symp.png": "7b3ef86c2e2c606aa890509ac67f9d06",
"assets/assets/logo/tele.png": "b37d6df3b36a74748a9bda890b3ba550",
"assets/assets/logo/twig.png": "86643dd7de05461735e71eddec5738de",
"assets/assets/logo.png": "e92d75da68b0db510c0ce50855b2de47",
"assets/assets/me.jpg": "fece6fdc1a553efbe5cf4b302317c752",
"assets/assets/niit.png": "08957167cbbcb5952af67bf2f487f0d4",
"assets/assets/open.png": "ffd5ecc4ad0ca278d9d7ae9b5dd50bec",
"assets/assets/pass.png": "ee40bd08ce46e2cc886c37344db7350c",
"assets/assets/porto.png": "702886aa98e6dd4529a4838dbd787d5f",
"assets/assets/rotate.png": "fb438cd0d3ec19da44719ace568305c8",
"assets/assets/sd.png": "215b842d7ef50850a373cffe70a7cd0c",
"assets/assets/semicolon.png": "4557b87a0767b92b5a5f3edf72c831de",
"assets/assets/sma.jpg": "35b3b886bcede66925a0f43ff17a1f76",
"assets/assets/smp.png": "8bbb42cf754940afb48c79c68bd1602f",
"assets/assets/ss/banner_QR.jpg": "e36ca1de1704befd34ad8bb113fca030",
"assets/assets/ss/fr.png": "1483ac80325411aa21c9d88d787b70a8",
"assets/assets/ss/nota.jpg": "3fc9f5f09fbff547c686553d36040661",
"assets/assets/ss/pex.png": "9966b3732aa493246906e491f29dcdae",
"assets/assets/ss/surat.jpg": "583bb343856b2e47a931f46b8e0f7abe",
"assets/assets/ss/takeinb.png": "2fab71d6699f6f956a3019cfe8286836",
"assets/assets/udemy.png": "9f38217ab187dddce5462149e5dcb991",
"assets/FontManifest.json": "b3d1c9ea0c36fce7b56886e3213c291d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "4588613782231c2a5f19407d38795c8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/slimy_card/assets/flare/bottomSlime.flr": "3a26ed39d3a9a9956105e9e6e4d5ad43",
"assets/packages/slimy_card/assets/flare/topSlime.flr": "9f381ee39c22b624c805f536b39171a6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "79f08df026b5a0e168d095ed81530bc8",
"/": "79f08df026b5a0e168d095ed81530bc8",
"main.dart.js": "9d45b12d67f0a318699010a3778b3920",
"manifest.json": "00c2da313e86c2e53333127483b7eaf7"
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
