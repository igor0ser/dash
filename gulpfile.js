var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
 
gulp.task('scss', function () {
  return gulp.src('src/**/*.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('build/'));
});

gulp.task('html', function () {
    return gulp
        .src('src/**/*.html')
        .pipe(gulp.dest('./build'))
})

gulp.task('default', ['scss','html'], function(){
    gulp.watch( 'src/**/*.scss', ['scss']);
    gulp.watch( 'src/**/*.html', ['html']);
});