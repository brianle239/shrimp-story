if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/shrimp-story/sw.js', { scope: '/shrimp-story/' })})}