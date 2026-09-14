const C="re15-v5";
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;
const isAsset=u.pathname.startsWith("/audio/")||u.pathname.endsWith(".png");
if(isAsset){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok){const cl=n.clone();caches.open(C).then(c=>c.put(e.request,cl))}return n})));return}
e.respondWith(fetch(e.request).then(n=>{if(n.ok){const cl=n.clone();caches.open(C).then(c=>c.put(e.request,cl))}return n}).catch(()=>caches.match(e.request)))});