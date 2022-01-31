'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html", "style1.css", "questions.js", "script.js", "author.html", "content/author.html"]);

toolbox.router.get('/image/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});