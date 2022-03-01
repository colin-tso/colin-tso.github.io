const postcss = require('gulp-postcss'),
    concatcss = require('gulp-concat-css'),
    autoprefixer = require('autoprefixer'),
    postcss_nested = require('postcss-nested'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    cssnano = require('gulp-cssnano'),
    gulp = require('gulp'),
    processors = [
        autoprefixer,
        postcss_nested
    ];

gulp.task('pcss_to_css', function () {
    return gulp.src('./src/*/*.pcss')
        .pipe(postcss(processors))
        .pipe(cssnano())
        .pipe(rename({
            extname: '.css'
        }))
        .pipe(gulp.dest('./temp'));
});

gulp.task('css_concat', function () {
    return gulp.src('./temp/*/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('clean_temp', function () {
    return del(['./temp']);
});