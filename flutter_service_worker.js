'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b378918826a6f7d35f0c243e92166701",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/gif/paw_loader.gif": "560fd4680b7e6cc73e9c6f7756b469db",
"assets/assets/icons/add-filled.svg": "eed65ba682b92bc40a0e792f8aaac6a1",
"assets/assets/icons/add.svg": "1ef85a6a6a8f4e9e338b0f5bace282d1",
"assets/assets/icons/add_offer_active.svg": "979c0427343fca9a481a64158c6eeadf",
"assets/assets/icons/add_offer_inactive.svg": "e471a69020bdbccc830bde4008ce769e",
"assets/assets/icons/all_animals_icon.svg": "05ad4706544a462dd021daa14c28f7c1",
"assets/assets/icons/bird_icon.svg": "eb35ae093a632a26dc1ff8738a9863cb",
"assets/assets/icons/case.svg": "cdad4b04247fba62ebb67d006da1400a",
"assets/assets/icons/cat_icon.svg": "c5ab46e0ca33c5320f5e636c134d8012",
"assets/assets/icons/check-circle.svg": "ce63c0459a272d8301b186ec73db37e7",
"assets/assets/icons/check-line.svg": "17e71de75a02629d503adc27d18f52a5",
"assets/assets/icons/chevron_left.svg": "feedeeb326b38a8b4e1af812919f530b",
"assets/assets/icons/chevron_right.svg": "eefb75b084b8a5a0428679deab6e9781",
"assets/assets/icons/close-search.svg": "786a505b6def64cb0d53e1f137ee5e79",
"assets/assets/icons/dog_icon.svg": "f1d44a9f93061ccaa979f0d16d1d6d26",
"assets/assets/icons/eye-off.svg": "c68b9e9b64c0d3a41be7c02ec81c76dd",
"assets/assets/icons/eye.svg": "62517b9ba0aa6eb7d9a48cd982b9fa77",
"assets/assets/icons/fish_icon.svg": "60166b74b6d42a0919207f52222d5949",
"assets/assets/icons/history.svg": "65387e78a045d056228993b169ed42d0",
"assets/assets/icons/home-1.svg": "f9315f7e8b1743efd3fcffba55eede81",
"assets/assets/icons/home-2.svg": "6841bafce47d3983e06d4dcc799db6b5",
"assets/assets/icons/home_active.svg": "1b4aa67bae886c86424074fd49171e57",
"assets/assets/icons/home_inactive.svg": "9a557fc27af0c5188dd6a67ea32f31a1",
"assets/assets/icons/menu-filter.svg": "139e19031ce710a6a70e006cef9084e0",
"assets/assets/icons/more-grid.svg": "0eb77542e20aa702dfc194914fdb6475",
"assets/assets/icons/person-circle.svg": "64b2b55945d339b02af1523ef117d185",
"assets/assets/icons/phone.svg": "47b6b2d19b0eb9a75a023ec4189c7530",
"assets/assets/icons/profile_active.svg": "a4877785ff2ceffcba6ee0898359f75d",
"assets/assets/icons/profile_inactive.svg": "4451b64855d56caf100b4ec982e88a87",
"assets/assets/icons/rodent_icon.svg": "4041adfc412881aa9e9f18a09863cdbc",
"assets/assets/icons/search.svg": "691fc26f4afa67b589218f64b240a0cf",
"assets/assets/icons/trash.svg": "edc891446a42dfdd6126b26eca058869",
"assets/assets/icons/turtle_icon.svg": "086f7c04a1e131a516b4f3126a3af089",
"assets/assets/icons/user_propositions_active.svg": "136246c753c0e0e243f740042c1622fc",
"assets/assets/icons/user_propositions_inactive.svg": "28103977569c3530f29f51700b1e6d9e",
"assets/assets/images/bones.svg": "4c06acf64ce17b3932a1c9bc8cee8cea",
"assets/assets/images/bones_bg.png": "78a66f933fc0cd37f3bab9ced3cc17db",
"assets/assets/images/cat-1.svg": "510d1a02e8bfef3e3e50aae17bc4cab0",
"assets/assets/images/cat-2.svg": "5a6d59b6fe7a166594324b7cecf19099",
"assets/assets/images/cat-3.svg": "44b9fee5deb1afade747a63cb7f182f2",
"assets/assets/images/dog-1.svg": "54a3402faae8e39849f55c2939ae1a10",
"assets/assets/images/image_placeholder.png": "af2419a79e44aecc87e33372c42abbd2",
"assets/assets/launcher_icons/branding.png": "763835c8248f7d4227490440833ca492",
"assets/assets/launcher_icons/logo-512-android-background.png": "c8fb59ce0ad8a48d5ad9292cca132b55",
"assets/assets/launcher_icons/logo-512-android-foreground.png": "b82789277c9ab78b718734d07370813b",
"assets/assets/launcher_icons/logo-512.png": "c998986c50e59f684e5d23fc3d88b7e1",
"assets/assets/launcher_icons/logo-60px.png": "1dba419a271b3327a3ea4106e427c8f1",
"assets/assets/launcher_icons/splash.png": "17f375e392cf0fa43466343b820b43b4",
"assets/FontManifest.json": "9aaf3cadff7a6acb398faaa001700230",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4d82b1e5fa1ba21b9ab6337341ebe67b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "1b0af4a94620cf3743f051d2a1f2f103",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "2590ea5cb409e5b0be33d133ccfaa519",
"icons/Icon-512.png": "01955727d7e1ccae38798a018645f76f",
"icons/Icon-maskable-192.png": "2590ea5cb409e5b0be33d133ccfaa519",
"icons/Icon-maskable-512.png": "01955727d7e1ccae38798a018645f76f",
"index.html": "16ffb602a1b2cbb14f4615f597c05969",
"/": "16ffb602a1b2cbb14f4615f597c05969",
"main.dart.js": "7e0fe18583d630f9d8c69d417b6ff3ab",
"manifest.json": "2baae4455fd37de376c041845b360d9e",
"splash/img/branding-1x.png": "ae540f92fa2e9f60254a7c4d12eab158",
"splash/img/branding-2x.png": "76214906b27b48305c403c9fcd57e9ea",
"splash/img/branding-3x.png": "2962370aec0cf2e0a3f8bdeb51cb173f",
"splash/img/branding-4x.png": "5a072434a6ebbce8bd6883e9535377de",
"splash/img/branding-dark-1x.png": "ae540f92fa2e9f60254a7c4d12eab158",
"splash/img/branding-dark-2x.png": "76214906b27b48305c403c9fcd57e9ea",
"splash/img/branding-dark-3x.png": "2962370aec0cf2e0a3f8bdeb51cb173f",
"splash/img/branding-dark-4x.png": "5a072434a6ebbce8bd6883e9535377de",
"splash/img/dark-1x.png": "67721fd7339fc856838b3d2d7888fe08",
"splash/img/dark-2x.png": "d9c6bdfaf528b57e0d6e73cf6437008b",
"splash/img/dark-3x.png": "beb711091c8b76e5776a02d41006b9c3",
"splash/img/dark-4x.png": "38265ed28e067c532ca1cf1fddadc67a",
"splash/img/light-1x.png": "67721fd7339fc856838b3d2d7888fe08",
"splash/img/light-2x.png": "d9c6bdfaf528b57e0d6e73cf6437008b",
"splash/img/light-3x.png": "beb711091c8b76e5776a02d41006b9c3",
"splash/img/light-4x.png": "38265ed28e067c532ca1cf1fddadc67a",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"version.json": "461b19799ef12845941d8a00a0ab330e"
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
