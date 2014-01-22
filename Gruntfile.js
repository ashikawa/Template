/*jslint node:true, nomen:true, unparam:true*/
/*global module*/

module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        'closure-compiler': {
            'main': {
                'closurePath': '/usr/local/opt/closure-compiler/libexec/',
                'js': ['./js/src/main.js'],
                'jsOutputFile': './js/main.js',
                'noreport': true,
                'options': {}
            },
            'main_debug': {
                'closurePath': '/usr/local/opt/closure-compiler/libexec/',
                'js': ['./js/src/main.js'],
                'jsOutputFile': './js/main.js',
                'noreport': true,
                'options': {
                    'create_source_map': './js/main.js.map',
                    'source_map_format': 'V3',
                    'output_wrapper': '%output%//@ sourceMappingURL=main.js.map',
                }
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
            },
            'debug': {
                'options': {
                    'paths': ['./less'],
                    'compress': false,
                    'sourceMap': true,
                    'sourceMapRootpath': '/Template/'
                },
                'files': '<%= less.production.files %>'
            }
        },
        'watch': {
            'js': {
                'files': './js/src/*.js',
                'tasks': ['closure-compiler:main']
            },
            'less': {
                'files': './less/*.less',
                'tasks': ['less:production']
            }
        },
        'clean': [
            './js/main.js',
            './js/main.js.map',
            './css/style.css'
        ]
    });

    grunt.registerTask('default', ['closure-compiler:main',       'less:production']);
    grunt.registerTask('debug',   ['closure-compiler:main_debug', 'less:debug']);
};