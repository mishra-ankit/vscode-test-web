console.log('Hello from sw.js');

self.addEventListener("install", event => {
    console.log("Service worker installed");
 });
 self.addEventListener("activate", event => {
    console.log("Service worker activated");
 });

 self.addEventListener('fetch', (event) => {
    // intercept all requests to *.vscode-unpkg.net and send to CORS proxy
    if (event.request.url.indexOf('vscode-unpkg.net') > 0) {
        console.log('intercepting request to vscode-unpkg.net');
        event.respondWith(
            fetch('https://ncert.centralindia.cloudapp.azure.com:8080/' + event.request.url)
        );
    }
  });