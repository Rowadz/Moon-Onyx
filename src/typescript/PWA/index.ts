if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(
      'https://raw.githubusercontent.com/MohammedAl-Rowad/Moon-Onyx/code/src/typescript/PWA/sw.js'
    )
    .then(function() {
      console.log('Service Worker Registered');
    });
}
