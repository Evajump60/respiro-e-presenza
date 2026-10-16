/* Service worker — Respiro e Concentrazione (v80)
   Salva solo la pagina e le icone, per aprirla anche senza rete.
   Gli audio NON passano da qui: li scarica direttamente il telefono. */
const VERSION = 'v87';
const SHELL_CACHE = 'shell-' + VERSION;
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', function(e){
  e.waitUntil((async function(){
    const sc = await caches.open(SHELL_CACHE);
    await Promise.all(SHELL.map(function(u){ return sc.add(new Request(u, {cache:'reload'})).catch(function(){}); }));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', function(e){
  e.waitUntil((async function(){
    const names = await caches.keys();
    // toglie le vecchie copie (pagina e audio salvati dalle versioni precedenti)
    await Promise.all(names.filter(function(n){ return n !== SHELL_CACHE; }).map(function(n){ return caches.delete(n); }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', function(e){
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== location.origin) return;
  // audio: nessun intervento, va direttamente in rete (Safari gestisce da solo gli intervalli)
  if(/\.(m4a|mp3|wav|aac|ogg)$/i.test(url.pathname) || req.headers.get('range')) return;
  // pagina e file dell'app: prima la rete, poi la copia salvata
  e.respondWith((async function(){
    const sc = await caches.open(SHELL_CACHE);
    try{
      const net = await fetch(req);
      if(net.ok && !url.search){ sc.put(url.origin + url.pathname, net.clone()).catch(function(){}); }
      return net;
    }catch(err){
      if(url.search.indexOf('c=') === 1) return new Response('', {status:503});
      const hit = (await sc.match(url.origin + url.pathname)) || (await sc.match('index.html')) || (await sc.match('./'));
      return hit || new Response('Offline', {status:503});
    }
  })());
});
