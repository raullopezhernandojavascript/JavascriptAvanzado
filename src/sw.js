// Self es como "this" pero especifico para los "ServiceWorkers"

const VERSION = "V1"
self.addEventListener('install', event => {
    event.waitUntil(precache());
});

self.addEventListener('fetch',event=>{
    const request = event.request;
    //Get - Solo queremos trabajar con las peticiones get
    if(request.method != "GET"){
        return
    }

    // Buscar en cache
    event.respondWith(cachedResponse(request))

    // Actualizar el cache

    event.waitUntil(updateCache(request));
})

async function precache() {
    const cache = await caches.open(VERSION);
    // Esto regresa una promesa que es lo que espera el metodo "waitUntil"
    return cache.addAll([
        //Agregamos todos los recursos que van a estar en cache
        // '/',
        // './index.html',
        './src/assets/index.js',
        './src/assets/MediaPlayer.js',
        './src/assets/plugins/AutoPlay.js',
        './src/assets/plugins/AutoPause.js',
        // './src/css/index.css',
        // './src/assets/drafteados.mp4',
    ]);

}

   async function cachedResponse(request){
        const cache = await caches.open(VERSION);
        //¿Ya tienes una copia que le corresponde al request?
        const response = await cache.match(request);
        return response || fetch(request)
    }

    async function updateCache(request){
        const cache = await caches.open(VERSION);
        const response = await fetch(request);
        return cache.put(request,response);

    
    }



