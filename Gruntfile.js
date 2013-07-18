/*jslint node:true, nomen:true*/
/*global module*/

module.exports = function (grunt) {
    'use strict';

    var _ = require('underscore'),
        basedir        = '.',
        config         = {},
        jsfiles        = {},
        lessFiles      = {},
        closureConfig  = {},
        jslintFiles    = [],
        watchFiles     = {};

    _([
        'grunt-contrib-watch',
        'grunt-contrib-concat',
        'grunt-closure-compiler',
        'grunt-jslint',
        'grunt-contrib-less',
        'grunt-css',
        'grunt-plato'
    ]).each(function (element, index, list) {
        grunt.loadNpmTasks(element);
    });

    jsfiles = {
        main: {
            js: ['<%= basedir %>/js/src/main.js'],
            jsOutputFile: '<%= basedir %>/js/main.js'
        }
    };

    lessFiles = {
        '<%= basedir %>/css/style.css': '<%= basedir %>/less/style.less'
    };

    watchFiles    = {
        less: {
            files: '<%= basedir %>/less/*.less',
            tasks: ['less']
        }
    };

    // jsFile => ClosureCompiler Setting
    closureConfig = {};
    _(jsfiles).each(function (element, key, jsfiles) {

        closureConfig[key] =  {
            js: element.js,
            closurePath: 'compiler.jar',
            jsOutputFile: element.jsOutputFile,
            options: {}
        };
    });

    // jsFiles => jsLint Target
    jslintFiles = _(jsfiles).map(function (element, key, jsfiles) {
        return element.js;
    });

    // jsFiles => Watch File List
    watchFiles = _(watchFiles).extend(
        _(jsfiles).map(function (element, key, jsfiles) {
            return {
                files: element.js,
                tasks: ['closure-compiler:' + key]
            };
        })
    );

    config = {
        'basedir': basedir,
        'closure-compiler': closureConfig,
        'jslint': {
            files: jslintFiles,
            directives: {browser: true, plusplus: true},
            options: {}
        },
        'less': {
            development: {
                files: lessFiles,
                options: {paths: ['<% basedir %>/less'], yuicompress: true}
            }
        },
        'csslint': {
            all: {src: '<% basedir %>/css/*.css', rules: {}}
        },
        'watch': watchFiles,
        'plato': {
            task: {
                files: {
                    'report': ['js/src/*.js']
                }
            }
        }
    };

    grunt.initConfig(config);

    // grunt.registerTask('default', ['less:development']);
    grunt.registerTask('default', ['jslint', 'closure-compiler', 'less', 'csslint']);
    grunt.registerTask('build', ['closure-compiler', 'less']);
    grunt.registerTask('test', ['jslint', 'csslint']);
    grunt.registerTask('report', ['plato']);
};