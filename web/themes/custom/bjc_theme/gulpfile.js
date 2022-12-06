"use strict";

const { src } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var plugins     = require('gulp-load-plugins')({ camelize: true });
var browserSync = require('browser-sync').create();

var themePath   = './web/themes/custom/bjc_theme/';
console.log(themePath)

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});
gulp.task('scripts', () => {
    // return  src([
        // themePath + 'js/src/*.js'
        return gulp.src('js/src/*.js')
    // ])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
        .pipe(plugins.concat('main.min.js'))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./js/'))
        .pipe(browserSync.stream());
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles', 'scripts']));