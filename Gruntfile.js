/*jslint node:true, nomen:true, unparam:true*/
/*global module*/

module.exports = function (grunt) {
    'use strict';

    [
        'grunt-closure-compiler',
        'grunt-contrib-less',
        'grunt-contrib-watch',
        'grunt-contrib-clean'
    ].forEach(function (element, i) {
        grunt.loadNpmTasks(element);
    });

    grunt.initConfig({
        'closure-compiler': {
            'main': {
                'closurePath': '/usr/local/opt/closure-compiler/libexec/',
                'js': ['./js/src/main.js'],
                'jsOutputFile': './js/main.js',
                'noreport': true,
                'options': {}
            }
        },
        'less': {
            'production': {
                'options': {
                    'paths': ['./less'],
                    'compress': true
                },
                'files': {
                    './css/style.css': './less/style.less'
                },
            }
        },
        'watch': {
            'js': {
                'files': './js/src/*.js',
                'tasks': ['closure-compiler']
            },
            'less': {
                'files': './less/*.less',
                'tasks': ['less']
            }
        },
        'clean': [
            './js/main.js',
            './css/style.css'
        ]
    });

    grunt.registerTask('default', ['closure-compiler', 'less']);
};