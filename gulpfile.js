var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
    gulp.src('css/*.css')
        .pipe($.cssmin())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minimage', function () {
    gulp.src('img/*.{png,jpg}')
        .pipe($.imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task("htmlmin", function () {
    gulp.src('index.html')
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});
