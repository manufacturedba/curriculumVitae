(function (document) {
    'use strict';

    var app = document.querySelector('#app');
    app.name = "Roberto Rodriguez";

    app.addEventListener('template-bound', function(){
        console.log('Rock and roll');
    });

    window.addEventListener('WebComponentsReady', function() {
        document.querySelector('platinum-sw-register').register();
        document.querySelector('body').removeAttribute('unresolved');
        app.route = "about"; // Default route to load

        var drawer = document.querySelector('#drawer');
    });

})(document);

//(wrap(document));
