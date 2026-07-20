// Service worker mínimo — solo cumple el requisito de instalabilidad.
// No cachea nada a propósito: el sitio se decidió instalable, sin soporte offline.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  self.clients.claim();
});

// Sin evento 'fetch': todas las peticiones van directo a la red, como en un sitio normal.
