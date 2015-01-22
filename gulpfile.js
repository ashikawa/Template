/*jslint node:true, plusplus:true, unparam:true*/
/*global */
(function () {
    'use strict';

    var gulp = require('gulp'),
        less = require('gulp-less'),
        closureCompiler = require('gulp-closure-compiler'),
        del = require('del'),
        debug = require('gulp-debug');

    gulp.task('less', function () {
        gulp.src('./less/*.less')
            .pipe(less({
                'compress': true
            }))
            .pipe(gulp.dest('./css'));
    });

    gulp.task('closure-compiler', function () {
        gulp.src('./js/src/main.js')
            .pipe(debug({verbose: true}))
            .pipe(closureCompiler({
                'compilerPath': '/usr/local/Cellar/closure-compiler/20141023/libexec/build/compiler.jar',
                'fileName': 'main.js'
            }))
            .pipe(gulp.dest('./js'));
    });

    gulp.task('clean', function (cb) {
        del(['css/*.css', 'js/*.js'], cb);
    });

    gulp.task('default', ['less', 'closure-compiler']);

    gulp.task('watch', function (callback) {
        gulp.watch('./less/*.less', ['less']);
        gulp.watch('./js/src/*.js', ['closure-compiler']);
    });
}());
