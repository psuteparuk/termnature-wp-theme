const gulp = require('gulp');
const gutil = require('gulp-util');
const requireDir = require('require-dir');

requireDir('./tasks');

gulp.task('default', ['watch:tm-beans-child']);

gulp.task('watch:tm-beans-child', ['watch:css'], () => {
  gutil.log('Watch for changes to tm-beans-child folder ...');
});

gulp.task('compile:tm-beans-child', ['compile:css']);
