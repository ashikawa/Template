/*browser: true*/
/*global require*/
(function () {
    'use strict';

    require.config({
        shim: {
            'jquery': {},
            'jquery.easing': {deps: ['jquery']},
            'jquery.cookie': {deps: ['jquery']},
            'jquery.tmpl':   {deps: ['jquery']},
            'jquery.pjax':   {deps: ['jquery']},
            'jquery.purl':   {deps: ['jquery']},
            'bootstrap':     {deps: ['jquery']},
            'underscore': {},
            'backbone': {
                deps: ['underscore', 'jquery']
            },
            'backbone.localstrage': {
                deps: ['backbone']
            },
            'less': {},
            'moment': {}
        },
        paths: {
            'jquery':        '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min',
            'jquery.easing': '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min',
            'jquery.cookie': '//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min',
            'jquery.pjax':   '//cdnjs.cloudflare.com/ajax/libs/jquery.pjax/1.9.2/jquery.pjax.min',
            'jquery.purl':   '//cdnjs.cloudflare.com/ajax/libs/jquery-url-parser/2.3.1/purl.min',
            'bootstrap':     '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min',
            'underscore':    '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
            'backbone':      '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
            'backbone.localstrage': '//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.15/backbone.localStorage-min',
            'knockout':      '//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min',
            'less':          '//cdnjs.cloudflare.com/ajax/libs/less.js/2.2.0/less.min',
            'moment':        '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-langs'
        }
    });
}());