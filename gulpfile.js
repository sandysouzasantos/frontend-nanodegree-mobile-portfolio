var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-htmlmin');

gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minimg', function () {
    gulp.src('img/*.{png,jpg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task("htmlmin", function () {
    gulp.src('*.html')
        .pipe(minifyHTML({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('script', function () {
    gulp.src('views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'));
});

gulp.task('style', function () {
    gulp.src('views/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/views/css'));
});

gulp.task('minimage', function () {
    gulp.src('views/images/*.{png,jpg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images'));
});

gulp.task("minhtml", function () {
    gulp.src('views/*.html')
        .pipe(minifyHTML({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/views'));
});