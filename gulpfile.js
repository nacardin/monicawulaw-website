'use strict';

var gulp = require('gulp');
gulp.environment = {};
gulp.devDeps = {};

var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
  runSequence('build', 'hash', cb);
});

gulp.task('serve', function(cb) {
  gulp.environment.development = true;
  runSequence('watch', cb);
});

gulp.task('build', ['delete'], function(cb) {
  runSequence(
    [
      //'code-review'
    //], [
      'scss',
      'jade',
      'copy',
      'copy-images'
    ], [
      'styles',
      'jademin-uglify',
      'localize'
    ],
    cb);
});

// Load tasks from the `tasks` directory
var tasks;
try {
  tasks = require('require-dir')('gulp-tasks');
} catch (err) {
  console.error(err);
}
