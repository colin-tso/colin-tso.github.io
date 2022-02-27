const postcss = require('gulp-postcss'),
    concatcss = require('gulp-concat-css'),
    autoprefixer = require('autoprefixer'),
    postcss_nested = require('postcss-nested'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    data = require('gulp-data'),
    fs = require('fs'),
    // fileinclude = require('gulp-file-include'),
    cssnano = require('gulp-cssnano'),
    gulp = require('gulp'),
    processors = [
        autoprefixer,
        postcss_nested
    ];

const rename = require('gulp-rename');

gulp.task('pcss_to_css', function () {
    return gulp.src('./src/*.pcss')
        //.pipe(concatcss('style.pcss'))
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(cssnano())
        .pipe(rename({
            extname: '.css'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

/* 
gulp.task('build:pug', function () {
    return gulp.src('./src/*.pug')
        .pipe(data(function (file) {
            return JSON.parse(fs.readFileSync('./src/project-tiles.json'))
        }))
        .pipe(pug())
        .pipe(gulp.dest('./dist'));
}); */

/* gulp.task('HTML:fileinclude', function () {
    gulp.src(['./src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'));
}); */