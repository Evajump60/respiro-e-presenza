/* Service worker — Respiro e Concentrazione */
const VERSION = 'v57';
const SHELL_CACHE = 'shell-' + VERSION;
const AUDIO_CACHE = 'audio-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];
const AUDIO = ["audio/1/07a29cc8e615.m4a", "audio/1/0b688f40e35b.m4a", "audio/1/0d5db05651f3.m4a", "audio/1/13f479fb4d92.m4a", "audio/1/1450411a121e.m4a", "audio/1/1948f4c22dd9.m4a", "audio/1/1d6a0bda8ddf.m4a", "audio/1/1e3f9a070f5f.m4a", "audio/1/3354eed3749d.m4a", "audio/1/3a5ce3df332a.m4a", "audio/1/3b9c9547515f.m4a", "audio/1/3d2400ef091c.m4a", "audio/1/404517725ccb.m4a", "audio/1/42ea4b53928c.m4a", "audio/1/487d4963dc57.m4a", "audio/1/4c33f224dac2.m4a", "audio/1/4c4f0544ddd2.m4a", "audio/1/4cc54ab67da0.m4a", "audio/1/4d18755d9aa0.m4a", "audio/1/4e6184b8a0ac.m4a", "audio/1/5011af16a8f0.m4a", "audio/1/535a4356432b.m4a", "audio/1/568da8753ae0.m4a", "audio/1/589f6b6d83a6.m4a", "audio/1/5b9a3c0e33fa.m4a", "audio/1/5bdcc6116a9c.m4a", "audio/1/5be61ba2c9d8.m4a", "audio/1/5d8f8dd38ffc.m4a", "audio/1/5f3067251dba.m4a", "audio/1/660e3fe41ef6.m4a", "audio/1/6676e44945d9.m4a", "audio/1/6bfa19768eb0.m4a", "audio/1/6de1fa492723.m4a", "audio/1/76004f3fc2e8.m4a", "audio/1/7b41386f511b.m4a", "audio/1/809687c472eb.m4a", "audio/1/84502f066800.m4a", "audio/1/86709051676b.m4a", "audio/1/8b2617f5c832.m4a", "audio/1/8d5fbc88a70b.m4a", "audio/1/8f1d60401626.m4a", "audio/1/97cfbcd31471.m4a", "audio/1/98a0628be2f8.m4a", "audio/1/9fea7e02efd1.m4a", "audio/1/a6258b8fc0d9.m4a", "audio/1/ac0364ddaa45.m4a", "audio/1/acbc4cbd37aa.m4a", "audio/1/acf9b370c907.m4a", "audio/1/ad83f062910d.m4a", "audio/1/ae0e5cd700d0.m4a", "audio/1/b4135392747b.m4a", "audio/1/b9d05beec036.m4a", "audio/1/c2cfbb7fb7a0.m4a", "audio/1/c3bcde152d22.m4a", "audio/1/c4643d6ab162.m4a", "audio/1/c4c0e8a01f6a.m4a", "audio/1/c64d63f3b199.m4a", "audio/1/c6cf7f7e58b3.m4a", "audio/1/c83291caef48.m4a", "audio/1/c946f6a9124e.m4a", "audio/1/caa4979c6115.m4a", "audio/1/ccee70947578.m4a", "audio/1/cd2bf770a3c3.m4a", "audio/1/d03659faab20.m4a", "audio/1/d299718ec198.m4a", "audio/1/d80871c0aae1.m4a", "audio/1/daed7a355fa1.m4a", "audio/1/dbd6ad67afab.m4a", "audio/1/e1ac5712d2a5.m4a", "audio/1/e1b8340d5b0c.m4a", "audio/1/e5096384bdfb.m4a", "audio/1/e969bc3b0c9c.m4a", "audio/1/edfe0e097ee1.m4a", "audio/1/ef4b245cfe3a.m4a", "audio/1/f032473fe5ec.m4a", "audio/1/f047b6a04557.m4a", "audio/1/f04c068e4961.m4a", "audio/1/f3b8bccd6cc1.m4a", "audio/1/f8d0a3381db2.m4a", "audio/1/fe98162eab9c.m4a", "audio/2/029a0443298e.m4a", "audio/2/02d30101c5f0.m4a", "audio/2/0bea2c0e7b5f.m4a", "audio/2/0d8d28926956.m4a", "audio/2/10b8f0ce8d41.m4a", "audio/2/192c57feae6d.m4a", "audio/2/1a70c37a7894.m4a", "audio/2/1a9e6a9106a6.m4a", "audio/2/1b38ef602b28.m4a", "audio/2/1f7900099e64.m4a", "audio/2/231e7a045fa6.m4a", "audio/2/29a9028c11a3.m4a", "audio/2/2c39df22bc46.m4a", "audio/2/39cb5d6ea1cc.m4a", "audio/2/4104033c4d52.m4a", "audio/2/4313d50196fa.m4a", "audio/2/4931f6043c20.m4a", "audio/2/51cf17886cc9.m4a", "audio/2/629ccf17c018.m4a", "audio/2/650bf969e77d.m4a", "audio/2/65e414ad05c2.m4a", "audio/2/65e8a72185ed.m4a", "audio/2/661d0da4c90c.m4a", "audio/2/6951796badc3.m4a", "audio/2/6a3635ea79a7.m4a", "audio/2/6feccf6ff016.m4a", "audio/2/7125729c0054.m4a", "audio/2/7a93377b138b.m4a", "audio/2/805928aa98ed.m4a", "audio/2/80dd2b48cea9.m4a", "audio/2/8131db7d7d93.m4a", "audio/2/86fd2f9bd7e7.m4a", "audio/2/8bfaf0b5aecf.m4a", "audio/2/8deb3689bc16.m4a", "audio/2/911cf6dc2387.m4a", "audio/2/9377b95bd0aa.m4a", "audio/2/96e57f06575a.m4a", "audio/2/97d1ed9a214a.m4a", "audio/2/98fd64796e8c.m4a", "audio/2/991f5b80551d.m4a", "audio/2/9b06f4462d53.m4a", "audio/2/9ce7d6810e7d.m4a", "audio/2/a1e706568afd.m4a", "audio/2/a4b4d701a7ca.m4a", "audio/2/a5306f231a6c.m4a", "audio/2/a5ca02b3d014.m4a", "audio/2/adcfc3573220.m4a", "audio/2/b20a380287b6.m4a", "audio/2/b227cf0d8e04.m4a", "audio/2/b42d79deccf0.m4a", "audio/2/be09b3264b70.m4a", "audio/2/c101625e0544.m4a", "audio/2/c306fe296d3d.m4a", "audio/2/c521ea9d02ce.m4a", "audio/2/c8942a96792a.m4a", "audio/2/ca49103ff00d.m4a", "audio/2/ce199f9aced9.m4a", "audio/2/d3285dc6fdba.m4a", "audio/2/d547bf098c17.m4a", "audio/2/dad8d164cfae.m4a", "audio/2/dc8c9381f9d2.m4a", "audio/2/dfd6fdf8f412.m4a", "audio/2/e2ccce40a8dd.m4a", "audio/2/e3623f1c7867.m4a", "audio/2/eb9d102544eb.m4a", "audio/2/ec1ec6082d69.m4a", "audio/2/f061a3ab797d.m4a", "audio/2/f2e9038591bb.m4a", "audio/2/f4b50d336e9d.m4a", "audio/2/fbdac8ca1297.m4a", "audio/2/fdafc36ac199.m4a", "audio/3/GH-A01.m4a", "audio/3/GH-A02.m4a", "audio/3/GH-A03.m4a", "audio/3/GH-A04.m4a", "audio/3/GH-A05.m4a", "audio/3/GH-A06.m4a", "audio/3/GH-A07.m4a", "audio/3/GH-A08.m4a", "audio/3/GH-I-A.m4a", "audio/3/GH-I-K.m4a", "audio/3/GH-K01.m4a", "audio/3/GH-K02.m4a", "audio/3/GH-K03.m4a", "audio/3/GH-K04.m4a", "audio/3/GH-K05.m4a", "audio/3/GH-K06.m4a", "audio/3/GH-K07.m4a", "audio/3/GH-K08.m4a", "audio/3/SL-A01.m4a", "audio/3/SL-A02.m4a", "audio/3/SL-A03.m4a", "audio/3/SL-A04.m4a", "audio/3/SL-A05.m4a", "audio/3/SL-A06.m4a", "audio/3/SL-A07.m4a", "audio/3/SL-A08.m4a", "audio/3/SL-A09.m4a", "audio/3/SL-I-A.m4a", "audio/3/SL-I-K.m4a", "audio/3/SL-K01.m4a", "audio/3/SL-K02.m4a", "audio/3/SL-K03.m4a", "audio/3/SL-K04.m4a", "audio/3/SL-K05.m4a", "audio/3/SL-K06.m4a", "audio/3/SL-K07.m4a", "audio/3/SL-K08.m4a", "audio/3/UD-A01.m4a", "audio/3/UD-A02.m4a", "audio/3/UD-A03.m4a", "audio/3/UD-A04.m4a", "audio/3/UD-A05.m4a", "audio/3/UD-A06.m4a", "audio/3/UD-A07.m4a", "audio/3/UD-A08.m4a", "audio/3/UD-A09.m4a", "audio/3/UD-A10.m4a", "audio/3/UD-A11.m4a", "audio/3/UD-A12.m4a", "audio/3/UD-I-A.m4a", "audio/3/UD-I-K.m4a", "audio/3/UD-K01.m4a", "audio/3/UD-K02.m4a", "audio/3/UD-K03.m4a", "audio/3/UD-K04.m4a", "audio/3/UD-K05.m4a", "audio/3/UD-K06.m4a", "audio/3/UD-K07.m4a", "audio/3/UD-K08.m4a", "audio/3/UD-K09.m4a", "audio/3/UD-K10.m4a", "audio/3/UD-K11.m4a", "audio/3/UD-K12.m4a", "audio/4/AC-A01.m4a", "audio/4/AC-A02.m4a", "audio/4/AC-A03.m4a", "audio/4/AC-A04.m4a", "audio/4/AC-A05.m4a", "audio/4/AC-A06.m4a", "audio/4/AC-I-A.m4a", "audio/4/AC-I-K.m4a", "audio/4/AC-K01.m4a", "audio/4/AC-K02.m4a", "audio/4/AC-K03.m4a", "audio/4/AC-K04.m4a", "audio/4/AC-K05.m4a", "audio/4/GI-A02.m4a", "audio/4/GI-A03.m4a", "audio/4/GI-A04.m4a", "audio/4/GI-A05.m4a", "audio/4/GI-A06.m4a", "audio/4/GI-A07.m4a", "audio/4/GI-I-A.m4a", "audio/4/GI-I-K.m4a", "audio/4/GI-K01.m4a", "audio/4/GI-K02.m4a", "audio/4/GI-K03.m4a", "audio/4/GI-K04.m4a", "audio/4/GI-K05.m4a", "audio/4/GI-K06.m4a", "audio/4/GI-K07.m4a", "audio/4/GI-K08.m4a", "audio/4/SC-A01.m4a", "audio/4/SC-A02.m4a", "audio/4/SC-A03.m4a", "audio/4/SC-A04.m4a", "audio/4/SC-A05.m4a", "audio/4/SC-A06.m4a", "audio/4/SC-A07.m4a", "audio/4/SC-A08.m4a", "audio/4/SC-A09.m4a", "audio/4/SC-I-A.m4a", "audio/4/SC-I-K.m4a", "audio/4/SC-K01.m4a", "audio/4/SC-K02.m4a", "audio/4/SC-K03.m4a", "audio/4/SC-K04.m4a", "audio/4/SC-K05.m4a", "audio/4/SC-K06.m4a", "audio/4/SC-K07.m4a", "audio/4/SC-K08.m4a", "audio/4/SC-K09.m4a", "audio/4/TD-A01.m4a", "audio/4/TD-A02.m4a", "audio/4/TD-A03.m4a", "audio/4/TD-A04.m4a", "audio/4/TD-A05.m4a", "audio/4/TD-A06.m4a", "audio/4/TD-A08.m4a", "audio/4/TD-A09.m4a", "audio/4/TD-A10.m4a", "audio/4/TD-I-A.m4a"];

self.addEventListener('install', function(e){
  e.waitUntil((async function(){
    const sc = await caches.open(SHELL_CACHE);
    await Promise.all(SHELL.map(function(u){ return sc.add(new Request(u, {cache:'reload'})).catch(function(){}); }));
    const ac = await caches.open(AUDIO_CACHE);
    for(const u of AUDIO){
      try{ if(!(await ac.match(u))) await ac.add(u); }catch(err){}
    }
    self.skipWaiting();
  })());
});

self.addEventListener('activate', function(e){
  e.waitUntil((async function(){
    const names = await caches.keys();
    await Promise.all(names.filter(function(n){ return n.startsWith('shell-') && n !== SHELL_CACHE; }).map(function(n){ return caches.delete(n); }));
    const ac = await caches.open(AUDIO_CACHE);
    const keys = await ac.keys();
    await Promise.all(keys.filter(function(r){ const p = new URL(r.url).pathname; return !AUDIO.some(function(a){ return p.endsWith('/'+a); }); }).map(function(r){ return ac.delete(r); }));
    await self.clients.claim();
  })());
});

// Safari richiede le risposte "Range" per l'audio: le ricaviamo dalla copia in cache
async function rangeResponse(req, cached){
  const buf = await cached.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  let start = 0, end = buf.byteLength - 1;
  if(m){ if(m[1] !== '') start = parseInt(m[1], 10); if(m[2] !== '') end = Math.min(parseInt(m[2], 10), end); if(m[1] === '' && m[2] !== '') { start = Math.max(0, buf.byteLength - parseInt(m[2], 10)); end = buf.byteLength - 1; } }
  if(start > end || start >= buf.byteLength) return new Response(null, {status:416, headers:{'Content-Range':'bytes */' + buf.byteLength}});
  return new Response(buf.slice(start, end + 1), {status:206, headers:{
    'Content-Type': cached.headers.get('Content-Type') || 'audio/mp4',
    'Content-Length': String(end - start + 1),
    'Content-Range': 'bytes ' + start + '-' + end + '/' + buf.byteLength,
    'Accept-Ranges': 'bytes'}});
}

self.addEventListener('fetch', function(e){
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== location.origin) return;
  if(/\/audio\/.+\.m4a$/.test(url.pathname)){
    e.respondWith((async function(){
      const ac = await caches.open(AUDIO_CACHE);
      const key = url.origin + url.pathname;
      let cached = await ac.match(key);
      if(!cached){
        try{
          const net = await fetch(key);
          if(net.ok){ await ac.put(key, net.clone()); cached = net; } else return net;
        }catch(err){ return new Response('', {status:504}); }
      }
      if(req.headers.get('range')) return rangeResponse(req, cached.clone());
      return cached;
    })());
    return;
  }
  // pagina e file dell'app: prima la rete (così gli aggiornamenti arrivano subito), poi la copia salvata
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
