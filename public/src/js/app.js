let deferredPrompt;

// check if the browser supports service workers
if ('serviceWorker' in navigator) {
    // register the service worker
    navigator.serviceWorker
        .register('../sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        });
}

// intercept the beforeinstallprompt event and prevent Chrome from automatically
// prompting the user. Save the event for use later.
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
})