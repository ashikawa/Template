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
            'jquery':        '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
            'jquery.easing': '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min',
            'jquery.cookie': '//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.3.1/jquery.cookie.min',
            'jquery.tmpl':   '//ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min',
            'jquery.pjax':   '//cdnjs.cloudflare.com/ajax/libs/jquery.pjax/1.7.0/jquery.pjax.min',
            'jquery.purl':   '//cdnjs.cloudflare.com/ajax/libs/jquery-url-parser/2.3.1/purl.min',
            'bootstrap':     '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min',
            'underscore':    '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
            'backbone':      '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
            'backbone.localstrage': '//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.0/backbone.localStorage-min',
            'knockout':      '//cdnjs.cloudflare.com/ajax/libs/knockout/3.1.0/knockout-min',
            'less':          '//cdnjs.cloudflare.com/ajax/libs/less.js/1.4.1/less.min',
            'moment':        '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment-with-langs'
        }
    });
}());