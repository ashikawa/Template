/*browser: true*/
/*global require*/
(function () {
    'use strict';

    require.config({
        baseUrl: 'js/src',
        shim: {
            'jquery': {exports: '$'},
            'jquery.easing': {deps: ['jquery']},
            'jquery.cookie': {deps: ['jquery']},
            'jquery.tmpl':   {deps: ['jquery']},
            'jquery.pjax':   {deps: ['jquery']},
            'underscore': {exports: '_'},
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'backbone.localstrage': {
                deps: ['backbone']
            },
            'js-url': {exports: 'url'},
            'less': {}
        },
        paths: {
            'jquery':        '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
            'jquery.easing': '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min',
            'jquery.cookie': '//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.3.1/jquery.cookie.min',
            'jquery.tmpl':   '//ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min',
            'jquery.pjax':   '//cdnjs.cloudflare.com/ajax/libs/jquery.pjax/1.2.0/jquery.pjax.min',
            'underscore':    '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
            'backbone':      '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
            'backbone.localstrage': '//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.0/backbone.localStorage-min',
            'js-url':        '//cdnjs.cloudflare.com/ajax/libs/js-url/1.7.6/js-url.min',
            'less':          '//cdnjs.cloudflare.com/ajax/libs/less.js/1.3.3/less.min'
        }
    });

    require(['less']);
}());