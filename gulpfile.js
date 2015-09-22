var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', ['sprite', 'woff', 'js', 'jpg', 'ico', 'scss','html', 'github-io'], function(){
    gulp.watch( 'src/**/*.scss', ['scss', 'github-io']);
    gulp.watch( 'src/**/*.html', ['html', 'github-io']);
    gulp.watch( 'src/**/*.js', ['js', 'github-io']);
});
 
gulp.task('scss', function () {
  return gulp.src('src/main.scss')
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

gulp.task('js', function () {
    return gulp
        .src('src/*.js')
        .pipe(gulp.dest('./build'));
})

gulp.task('jpg', function () {
    return gulp
        .src('src/*.js')
        .pipe(gulp.dest('./build'));
})

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./src/img/sprite/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                cssFormat: 'scss',
                algorithm: 'top-down',
                padding: 40,
                cssVarMap: function (sprite) {
                sprite.name = 'sprite_' + sprite.name;
}
 
            }));

    spriteData.img.pipe(gulp.dest('./build/img/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./src/source/')); // путь, куда сохраняем стили
});


gulp.task('github-io', function () {
    return gulp
        .src('build/**/*.*')
        .pipe(gulp.dest('../igor0ser.github.io'));
})
