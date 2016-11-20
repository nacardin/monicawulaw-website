const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const del = require('del');
const mkdirp = require('mkdirp');
var browserSync = require('browser-sync').create();


gulp.task('build', function() {
  del.sync('dist');
  mkdirp.sync('dist');
  gulp.src('src/*.html')
    .pipe(nunjucks.compile({ year: (new Date).getFullYear() }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./src/**', ['build']);
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('default', ['watch']);
