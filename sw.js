console.log('Hello from sw.js');

self.addEventListener("install", event => {
    self.skipWaiting();


    self.addEventListener('fetch', (event) => {
        // intercept all requests to *.vscode-unpkg.net and send to CORS proxy
        const url = new URL(event.request.url);
        const list = ['vscode-unpkg.net', 'code.visualstudio.com'];
        if (list.some(x => url.hostname.endsWith(x))) {
            console.log('intercepting request', event.request.url);
            event.respondWith(
                fetch('https://ncert.centralindia.cloudapp.azure.com:8080/' + event.request.url)
            );
        }
    });

    console.log("Service worker installed");
});
self.addEventListener("activate", event => {
    console.log("Service worker activated");
});
