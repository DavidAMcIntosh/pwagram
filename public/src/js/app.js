// check if the browser supports service workers
if ('serviceWorker' in navigator) {
    // register the service worker
    navigator.serviceWorker
        .register('../sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        });
}