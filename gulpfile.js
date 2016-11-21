const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const del = require('del');
const mkdirp = require('mkdirp');
const browserSync = require('browser-sync').create();


gulp.task('clean-dist', function() {
  del.sync('dist');
  mkdirp.sync('dist');
});

gulp.task('build-assets', ['clean-dist'], function() {
  gulp.src('src/assets/**')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('build-styles', ['clean-dist', 'build-assets'], function() {
  gulp.src('./src/app.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-html', ['clean-dist'], function() {
  gulp.src('src/*.html')
    .pipe(plugins.nunjucks.compile({ year: (new Date).getFullYear() }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['build-html', 'build-assets', 'build-styles']);

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
