var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', ['sprite', 'woff', 'jpg', 'ico', 'scss','html'], function(){
    gulp.watch( 'src/**/*.scss', ['scss']);
    gulp.watch( 'src/**/*.html', ['html']);
});
 
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
});


gulp.task('woff', function () {
    return gulp
        .src('src/fonts/*.woff')
        .pipe(gulp.dest('./build/fonts'))
})

gulp.task('ico', function () {
    return gulp
        .src('src/*.ico')
        .pipe(gulp.dest('./build'));
})

gulp.task('jpg', function () {
    return gulp
        .src('src/img/*.jpg')
        .pipe(gulp.dest('./build/img'));
})

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./src/img/sprite/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss',
                cssFormat: 'scss',
                algorithm: 'top-down',
                padding: 40,
                cssVarMap: function (sprite) {
                sprite.name = 'sprite_' + sprite.name;
}
 
            }));

    spriteData.img.pipe(gulp.dest('./build/img/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./src/')); // путь, куда сохраняем стили
});

