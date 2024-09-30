const gulp = require('gulp')
const miniCSS = require('gulp-clean-css')
const miniJS = require('gulp-minify')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

gulp.task('buildCSS', async () => {
    gulp.src('public/src/css/*.scss')
        .pipe(sass.sync({ silenceDeprecations: ['legacy-js-api']}).on('error', sass.logError))
        .pipe(miniCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/dist/css'))
        .pipe(browserSync.stream())
})

gulp.task('buildJS', async () => {
    gulp.src('public/src/js/*.js')
        .pipe(miniJS())
        .pipe(gulp.dest('public/dist/js'))
        .pipe(browserSync.stream())
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('watchAll', () => {
    gulp.watch("public/src/css/*.scss", gulp.series('buildCSS'))
    gulp.watch("public/src/js/*.js", gulp.series('buildJS'))
})

gulp.task('default', gulp.parallel('browser-sync', 'watchAll'))