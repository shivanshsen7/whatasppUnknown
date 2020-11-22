self.addEventListener("install", e => {
    installed = true;
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./', './style.css', './main.js', './favicon.ico',
                './img/whatsaap-small-icon.png', './img/whatsaap-icon.png',
                './img/plus-icon.svg']);
        })
    );
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
    // console.log(`intercepting Fetch request for: ${e.request.url}`);
        
});

function newFunction() {
    return true;
}
