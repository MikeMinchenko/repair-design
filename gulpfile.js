var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

gulp.task('browser-sync', function(){
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('min', function (cb){
  gulp.src('src/css/**/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css/'))
      cb()
});