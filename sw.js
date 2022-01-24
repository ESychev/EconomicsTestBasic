'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html", "style1.css", "questions.js"]);

toolbox.router.get('/image/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});