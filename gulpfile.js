var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcss_nested = require('postcss-nested');
var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var processors = [
    autoprefixer,
    postcss_nested
];

const rename = require('gulp-rename');



gulp.task('pcss_to_css', function () {
    return gulp.src('./src/*.pcss')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(rename({
            extname: '.css'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});