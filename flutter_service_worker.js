'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eb74e7b92b993a4a6ac22e42db24386a",
"assets/assets/fonts/JetBrainsMono-Bold.ttf": "de2ce9b374d438453112214b81e41849",
"assets/assets/fonts/JetBrainsMono-ExtraBold.ttf": "fb177aca3a88192fea54d61ccdfccb90",
"assets/assets/fonts/JetBrainsMono-Medium.ttf": "2ab3c46a017cadf52f504054eee882ad",
"assets/assets/images/aramestan-1.png": "83f36f97250711de2a1c69408bf43a78",
"assets/assets/images/aramestan-2.png": "66b710adfef9d48c89e1b66253be0273",
"assets/assets/images/aramestan-3.png": "95f2cf4f21f3ae60b55ece8575705f0b",
"assets/assets/images/aramestan-4.png": "334cef6b2f5fa8939462a94b905a7998",
"assets/assets/images/background.jpg": "f0f53f3669f15d84df5cb85246053a59",
"assets/assets/images/barbarg-1.png": "4cd73a4431c6d118d1ca000fd35acdfd",
"assets/assets/images/barbarg-2.png": "5552b39e6c158789bae8e13c3cae1ac4",
"assets/assets/images/barbarg-3.png": "b1d4eb9e47cd2928ec4bdae100f60728",
"assets/assets/images/barbarg-4.png": "140e576ed22af81b555ba9d6694fe0c7",
"assets/assets/images/code_icon.png": "1394790a24735159d8f100d6bf43015d",
"assets/assets/images/ic_aramestan.png": "7c51e7f381a27d78bcdbe3654aeab7c7",
"assets/assets/images/ic_barbarg.png": "7c51e7f381a27d78bcdbe3654aeab7c7",
"assets/assets/images/ic_email.png": "195af7db4bd8fa33b7f5dc22d5d4b6f4",
"assets/assets/images/ic_fingerprint_action.png": "37747d16b13fcea588b8d9cf8486bd5b",
"assets/assets/images/ic_github.png": "2a1cbf6bb926ea2e198eb14ee8ce05a6",
"assets/assets/images/ic_saroj.png": "30564414475782e2493f84f620d11ac2",
"assets/assets/images/ic_senik_bussiness.png": "60b5a2ab78f5ee355356edc2ee0ba6a1",
"assets/assets/images/ic_senik_reservation.png": "cb9854a642cc04e26639fad0afc67e36",
"assets/assets/images/ic_senik_visitor.png": "3c50341f9ea771d2967e817b4e4e9d74",
"assets/assets/images/ic_shirazvand.png": "dc49e5a40934aa47dc715d94ca96b35d",
"assets/assets/images/ic_tohid_school.png": "ffacd16f616d72ff1a3b8a28f3164f81",
"assets/assets/images/pro_code_icon.png": "8234a62febda598afc575e1d9ebea90a",
"assets/assets/images/saroj-1.png": "893d82dcb47662e0489293dba72af469",
"assets/assets/images/saroj-2.png": "658e16b77cb1ac586a270b48f0732e15",
"assets/assets/images/saroj-3.png": "877b191c2a6b9c9e429db53feff97faf",
"assets/assets/images/saroj-4.png": "744d9eb4169fc39b1dbc0147b98c7d48",
"assets/assets/images/senik-business-1.png": "f47164a47c3c09f37d36e928f35bae92",
"assets/assets/images/senik-business-2.png": "58e72a2a2ea40766a154d9bfdaf153cc",
"assets/assets/images/senik-business-3.png": "41361ac81f81b947d180f40d836c248b",
"assets/assets/images/senik-business-4.png": "3359755f2415608572e1f5db852c1cfb",
"assets/assets/images/senik-reservation-1.png": "ce94fec1b388d80b7f94baaba02a4ae9",
"assets/assets/images/senik-reservation-2.png": "8584cd27eaba0e15dc12607590352192",
"assets/assets/images/senik-reservation-3.png": "33f81a82a1f6e3cda90ba32f30950d8f",
"assets/assets/images/senik-reservation-4.png": "9c94458f9d2a8bc23da08fcc94baa4b2",
"assets/assets/images/senik-reservation-5.png": "994ff6771fc79064a5e0946c4fd75ab2",
"assets/assets/images/senik-reservation-6.png": "328d139afaadf41d229ca76c4975f217",
"assets/assets/images/senik-reservation-7.png": "5ea9da832b0a8c703b32f6d23a9c28c2",
"assets/assets/images/senik-reservation-8.png": "4d18109540d5dcb37000b46870229dbf",
"assets/assets/images/senik-visitor-1.png": "9246380b1d02a1e7b6c7879cfba8a369",
"assets/assets/images/senik-visitor-2.png": "a9460ebf700f4b531f77124d6a7d8e18",
"assets/assets/images/senik-visitor-3.png": "974c757d537cc43c2eb45d516f8e9ab4",
"assets/assets/images/shirazvand-1.png": "ad72c5698c9cd6d126fc628914136b06",
"assets/assets/images/shirazvand-2.png": "8fa39ab16afc96b6a8a5624c90bf79f0",
"assets/assets/images/shirazvand-3.png": "525ba3a4c2c92fa51f93ece04757c7fa",
"assets/assets/images/shirazvand-4.png": "824177653c8e9e23682f1efff80cc7ff",
"assets/assets/images/shirazvand-5.png": "699e18a4d4cb10c24c90c725c36b0529",
"assets/assets/images/shirazvand-6.png": "ac67f2c61ae7f97beabba884745de7f2",
"assets/assets/images/shirazvand-7.png": "40ca20d992d168aad4e96d06ddd27c9c",
"assets/assets/images/tohid-1.png": "c48622f4438f98b39f1af8a0c340796d",
"assets/assets/images/tohid-2.png": "011cf6be87eeb67487f7363c318d029b",
"assets/assets/images/tohid-3.png": "a186d3865d12e7876743d856fa75169c",
"assets/assets/images/tohid-4.png": "6c41b8afafc0b0099b678203af3b68c9",
"assets/assets/images/tohid-5.png": "d3b1bf81d4003bebc85f91e77bed08ad",
"assets/assets/images/tohid-6.png": "38695f99b214a66e02843ee034816f3d",
"assets/FontManifest.json": "ded2e01cc0eda709ea3c42f61ec8d599",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0d84e57fe3b23adbe83868a163763649",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0b300bbd3e7299ead98fc80e6cf3d253",
"/": "0b300bbd3e7299ead98fc80e6cf3d253",
"main.dart.js": "74024c0f165dc5a1ef86a87a2ad952a8",
"manifest.json": "ba8cb0c065e201d18bd9887a07b61f68",
"version.json": "727e86a18495df49b86a04e00c159c5e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
