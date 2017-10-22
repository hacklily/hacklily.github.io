"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/about-javascript.html","6b2f6f63cf773e3ba32bf3ace474dc7d"],["/app.licenses.txt","1f52dd2b2692936091b9707253f23b34"],["/index.html","7c7ae11bfd7a54e807f987bafbc2e426"],["/static/js/app.8ba3534c.js","213ae2d52c6bb4f4e792f6622eea237e"],["/static/js/status.e41afbe1.js","b8b150ace8fd0277b975ce0bc2a90727"],["/static/media/logo.729a4eef.svg","729a4eef35b627c76e1528f2993e97f7"],["/status.html","08191467a5374cd2fdd2f79b8db9f44e"],["/status.licenses.txt","413a8e0454864656ef5ce6a573eb81de"],["/vs/base/worker/workerMain.js","5cec987542b2c0d02f63de125cac9287"],["/vs/basic-languages/src/bat.js","e51f2cd80e0cd7ec1dcff4a90e684094"],["/vs/basic-languages/src/coffee.js","ed3bca6cd2700565f57c1a1dde618568"],["/vs/basic-languages/src/cpp.js","54bfcf0015c44907f5c2fb2196e1dd58"],["/vs/basic-languages/src/csharp.js","a7e1364b05b1876835b79dbc352ef325"],["/vs/basic-languages/src/css.js","a7b9d6e850a4349f9d14916194be041a"],["/vs/basic-languages/src/dockerfile.js","36fc3b44c33edc66bb38ceae042e56d2"],["/vs/basic-languages/src/fsharp.js","140e636ea1605cb9dc149aef82f433b1"],["/vs/basic-languages/src/go.js","2f7827643fb34c6b31db0de15bfb5faf"],["/vs/basic-languages/src/handlebars.js","a5bb8ec7e9ebe498f22e6574d52afd5d"],["/vs/basic-languages/src/html.js","b4ac31ee3c7fee961840dce71d2b4b0c"],["/vs/basic-languages/src/ini.js","7efdf6ef2739f4b764c819d10fe33346"],["/vs/basic-languages/src/java.js","865e1b3795015e91639c4b7c8eb4161a"],["/vs/basic-languages/src/less.js","606c56b2caef781ee79be92fa0ec73d0"],["/vs/basic-languages/src/lua.js","25ebf7b2bdaf938882802ce193f22f1b"],["/vs/basic-languages/src/markdown.js","e4ef9a583b4a9b184ba0cb46bbf29d8c"],["/vs/basic-languages/src/msdax.js","e486a9bf9d45fe031359a381d168d1c2"],["/vs/basic-languages/src/objective-c.js","aa7540b900b058ff3769e4c708c71d88"],["/vs/basic-languages/src/php.js","44242b01b7b7d982ec278f9af3469c10"],["/vs/basic-languages/src/postiats.js","b0ce479e2f34bc3a934881d42878dc9d"],["/vs/basic-languages/src/powershell.js","7784001d1ea6ebf755ce7a778aa1ece2"],["/vs/basic-languages/src/pug.js","653127a3f1af6b633b66910b3d020b7a"],["/vs/basic-languages/src/python.js","66f336259b4ac3e1afcf20350f6cbc85"],["/vs/basic-languages/src/r.js","68f2cd091513a7e8efbf6c836cfa3a01"],["/vs/basic-languages/src/razor.js","3d8fd5eca2c05e49e670f60b3696b37f"],["/vs/basic-languages/src/ruby.js","fdf1dfb0e84028e4494149e8709a10db"],["/vs/basic-languages/src/sb.js","4a922f1aae92304528d92ecf20705c7e"],["/vs/basic-languages/src/scss.js","1489d414500bf1e3187fc31981849404"],["/vs/basic-languages/src/solidity.js","ae00d1fca04371d175c4b6bce9d7d2f1"],["/vs/basic-languages/src/sql.js","85a85b94c90bcb4740cd9e731b4903a5"],["/vs/basic-languages/src/swift.js","e316b6013d070ad64076b6ef793cd276"],["/vs/basic-languages/src/vb.js","7814472a1bdcdf3a8a3ae49d091f7fb2"],["/vs/basic-languages/src/xml.js","29542b689cfc3091cc86027a3e2adb09"],["/vs/basic-languages/src/yaml.js","b4f1fd85a61b500c905e4a1a656e764b"],["/vs/editor/contrib/suggest/browser/media/String_16x.svg","48e754cb54c78a85dcc9aaea9a27847e"],["/vs/editor/contrib/suggest/browser/media/String_inverse_16x.svg","6e5c0ce7ec09969f07ea6ee078ef8ad6"],["/vs/editor/editor.main.css","ad617dd10af3058027e01715290c6bf1"],["/vs/editor/editor.main.js","cc21d49f1b239190902b851dd2a82d7e"],["/vs/editor/editor.main.nls.de.js","e9f4e0eba86d95a86db0008ce20f1855"],["/vs/editor/editor.main.nls.es.js","7751e8e70fa13fd65773603f556390dd"],["/vs/editor/editor.main.nls.fr.js","bbd32235412b09b53966c31db51824c0"],["/vs/editor/editor.main.nls.hu.js","5772061beed3bcc565155e72613478b5"],["/vs/editor/editor.main.nls.it.js","80ae237e26000390d5cda33f07ccaea4"],["/vs/editor/editor.main.nls.ja.js","de235840b7f8a6832f048d6f5c0d3039"],["/vs/editor/editor.main.nls.js","89f6a3d072831f585bb0df9ea5c59e3d"],["/vs/editor/editor.main.nls.ko.js","9937c9a5ed2844890a1d71ee49e5f6c8"],["/vs/editor/editor.main.nls.pt-br.js","14d99903fb04133b48d7679431f76344"],["/vs/editor/editor.main.nls.ru.js","80c0865d998828d821764786563cf959"],["/vs/editor/editor.main.nls.tr.js","19979813fbfabf1058418689e7d5508b"],["/vs/editor/editor.main.nls.zh-cn.js","ea75b0998cb4a37bda3f54cf2c1aefcb"],["/vs/editor/editor.main.nls.zh-tw.js","32f88a60909e1b6cd1c621a2bd19670b"],["/vs/editor/standalone/browser/quickOpen/symbol-sprite.svg","649fb0a55b0e0fc9d79e6b7872a14c10"],["/vs/language/css/cssMode.js","40f15898b7a09b6fb6b260d7c1dd3f56"],["/vs/language/css/cssWorker.js","5b7f6412ba66802576e4ac4eb504bdbb"],["/vs/language/html/htmlMode.js","001e24dec3cf105d1e099316c83a5632"],["/vs/language/html/htmlWorker.js","f065b0b4b1a6c1919bc3370d249df808"],["/vs/language/json/jsonMode.js","4a3dab54b23af097e9e414100867200e"],["/vs/language/json/jsonWorker.js","4dcceaade2ef2a37ea5b3f6883f5fe95"],["/vs/language/typescript/lib/typescriptServices.js","517e6ef05aa497f98e19d6c03a9879dc"],["/vs/language/typescript/src/mode.js","d96c89a5dacbac90292dcb9502217398"],["/vs/language/typescript/src/worker.js","d929d97d845eebf18fb20f4f55a9ca49"],["/vs/loader.js","f2b93cd9e3955e96cfbd58d41df3ee5b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],c=new URL(s,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),s=urlsToCacheKeys.has(a));!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});