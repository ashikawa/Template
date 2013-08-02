/*jslint nomen:true browser: true*/
(function () {
    'use strict';

    var _gaq = window._gaq || [];
    _gaq.push(['_setAccount', 'UA-XXXXX-1']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga   = document.createElement('script'),
            s    = document.getElementsByTagName('script')[0];
        ga.type  = 'text/javascript';
        ga.async = true;
        ga.src   = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        s.parentNode.insertBefore(ga, s);
    }());
}());
