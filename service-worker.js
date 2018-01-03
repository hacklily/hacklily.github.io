"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/0.licenses.txt","eafe57add2c03ae7b4b63d031350b4e0"],["/1.licenses.txt","1759600fe96421e02ffa6302c8bbee19"],["/about-javascript.html","60fa62a27bf5843f4d2ac5cd89c98dbd"],["/app.licenses.txt","a8526ff9080ddc7a2f2978720771a56c"],["/index.html","8f9e065aeade1def4503e2dc0831211b"],["/static/js/0.dc208eea.chunk.js","9c5a8f01e45c09d8781e011643af611f"],["/static/js/1.8c33d89d.chunk.js","cbff7f91b75a3df0c3f08dd15e8fad94"],["/static/js/app.d5fdf2f8.js","9d1f49bf18bc2156a13f31511ca4b9cc"],["/static/js/status.e5085569.js","a4c1d26ec777cd636a38f5b0e2ccfd19"],["/static/media/logo.729a4eef.svg","729a4eef35b627c76e1528f2993e97f7"],["/status.html","7052f6fb1b4c621e0bb2fab453e254bd"],["/status.licenses.txt","b9621829ffc294d717f6971719e1b5ad"],["/vs/base/worker/workerMain.js","93cdf8019f17ddfdbcbc7d00fcb1a786"],["/vs/basic-languages/src/bat.js","e51f2cd80e0cd7ec1dcff4a90e684094"],["/vs/basic-languages/src/coffee.js","ed3bca6cd2700565f57c1a1dde618568"],["/vs/basic-languages/src/cpp.js","54bfcf0015c44907f5c2fb2196e1dd58"],["/vs/basic-languages/src/csharp.js","a7e1364b05b1876835b79dbc352ef325"],["/vs/basic-languages/src/css.js","a7b9d6e850a4349f9d14916194be041a"],["/vs/basic-languages/src/dockerfile.js","36fc3b44c33edc66bb38ceae042e56d2"],["/vs/basic-languages/src/fsharp.js","140e636ea1605cb9dc149aef82f433b1"],["/vs/basic-languages/src/go.js","2f7827643fb34c6b31db0de15bfb5faf"],["/vs/basic-languages/src/handlebars.js","a5bb8ec7e9ebe498f22e6574d52afd5d"],["/vs/basic-languages/src/html.js","b4ac31ee3c7fee961840dce71d2b4b0c"],["/vs/basic-languages/src/ini.js","7efdf6ef2739f4b764c819d10fe33346"],["/vs/basic-languages/src/java.js","865e1b3795015e91639c4b7c8eb4161a"],["/vs/basic-languages/src/less.js","606c56b2caef781ee79be92fa0ec73d0"],["/vs/basic-languages/src/lua.js","25ebf7b2bdaf938882802ce193f22f1b"],["/vs/basic-languages/src/markdown.js","e4ef9a583b4a9b184ba0cb46bbf29d8c"],["/vs/basic-languages/src/msdax.js","e486a9bf9d45fe031359a381d168d1c2"],["/vs/basic-languages/src/objective-c.js","aa7540b900b058ff3769e4c708c71d88"],["/vs/basic-languages/src/php.js","44242b01b7b7d982ec278f9af3469c10"],["/vs/basic-languages/src/postiats.js","b0ce479e2f34bc3a934881d42878dc9d"],["/vs/basic-languages/src/powershell.js","7784001d1ea6ebf755ce7a778aa1ece2"],["/vs/basic-languages/src/pug.js","653127a3f1af6b633b66910b3d020b7a"],["/vs/basic-languages/src/python.js","66f336259b4ac3e1afcf20350f6cbc85"],["/vs/basic-languages/src/r.js","68f2cd091513a7e8efbf6c836cfa3a01"],["/vs/basic-languages/src/razor.js","3d8fd5eca2c05e49e670f60b3696b37f"],["/vs/basic-languages/src/ruby.js","fdf1dfb0e84028e4494149e8709a10db"],["/vs/basic-languages/src/sb.js","4a922f1aae92304528d92ecf20705c7e"],["/vs/basic-languages/src/scss.js","1489d414500bf1e3187fc31981849404"],["/vs/basic-languages/src/solidity.js","ae00d1fca04371d175c4b6bce9d7d2f1"],["/vs/basic-languages/src/sql.js","85a85b94c90bcb4740cd9e731b4903a5"],["/vs/basic-languages/src/swift.js","e316b6013d070ad64076b6ef793cd276"],["/vs/basic-languages/src/vb.js","7814472a1bdcdf3a8a3ae49d091f7fb2"],["/vs/basic-languages/src/xml.js","29542b689cfc3091cc86027a3e2adb09"],["/vs/basic-languages/src/yaml.js","b4f1fd85a61b500c905e4a1a656e764b"],["/vs/editor/contrib/suggest/browser/media/String_16x.svg","48e754cb54c78a85dcc9aaea9a27847e"],["/vs/editor/contrib/suggest/browser/media/String_inverse_16x.svg","6e5c0ce7ec09969f07ea6ee078ef8ad6"],["/vs/editor/editor.main.css","ad44f47d754a4d6cc7389b05fc37a508"],["/vs/editor/editor.main.js","3a82940062c2a1874398c094a6e60dde"],["/vs/editor/editor.main.nls.de.js","4019650a865961530de6e171a5a44c85"],["/vs/editor/editor.main.nls.es.js","bca78689da6bf40a1d67326898fb88a3"],["/vs/editor/editor.main.nls.fr.js","4cf5f1adcf63ca2472cb66e40e2c8baf"],["/vs/editor/editor.main.nls.hu.js","9308e02b6c62b43386e75306d78a4a36"],["/vs/editor/editor.main.nls.it.js","4acb3ff02176e79df6ab573eea3e8185"],["/vs/editor/editor.main.nls.ja.js","17922fedcf1e6ed0134b3ee94b0a0962"],["/vs/editor/editor.main.nls.js","f490fab3eb9c793b20f99db9b6e48d95"],["/vs/editor/editor.main.nls.ko.js","6be4c0e0eb005bce674dbbdb8e7a7e38"],["/vs/editor/editor.main.nls.pt-br.js","5bd4e381e481dd824f04985295b40eb2"],["/vs/editor/editor.main.nls.ru.js","c3f5724ee2fbff5e8f3b5f2ccac4a7e8"],["/vs/editor/editor.main.nls.tr.js","ce8907e3f4fd52bc74620c26e264c78c"],["/vs/editor/editor.main.nls.zh-cn.js","9d9f318a1e6852ff0c2c4bd8a09cc6e9"],["/vs/editor/editor.main.nls.zh-tw.js","12127046be5ba373438d9141f25205f3"],["/vs/editor/standalone/browser/quickOpen/symbol-sprite.svg","649fb0a55b0e0fc9d79e6b7872a14c10"],["/vs/language/css/cssMode.js","40f15898b7a09b6fb6b260d7c1dd3f56"],["/vs/language/css/cssWorker.js","5b7f6412ba66802576e4ac4eb504bdbb"],["/vs/language/html/htmlMode.js","001e24dec3cf105d1e099316c83a5632"],["/vs/language/html/htmlWorker.js","f065b0b4b1a6c1919bc3370d249df808"],["/vs/language/json/jsonMode.js","4a3dab54b23af097e9e414100867200e"],["/vs/language/json/jsonWorker.js","4dcceaade2ef2a37ea5b3f6883f5fe95"],["/vs/language/typescript/lib/typescriptServices.js","517e6ef05aa497f98e19d6c03a9879dc"],["/vs/language/typescript/src/mode.js","d96c89a5dacbac90292dcb9502217398"],["/vs/language/typescript/src/worker.js","d929d97d845eebf18fb20f4f55a9ca49"],["/vs/loader.js","c8164365b9ce6609cb37358a167fb342"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,s,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],c=new URL(s,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),s=urlsToCacheKeys.has(a));var r="/index.html";!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});