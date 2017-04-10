const addSrc = require('gulp-add-src');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const del = require('del');
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

const destDir = path.normalize(path.join(__dirname, '..', 'tm-beans-child'));
const sourceDir = path.normalize(path.join(__dirname, '..', 'tm-beans-child'));
const destFile = 'style.css';
const sourceFile = 'style.less';
const wpStylesheetHeader = 'wp-stylesheet-header.css';

const watchInterval = 1000;

gulp.task('clean:css', () => {
  del([path.join(destDir, destFile)], { force: true });
});

gulp.task('compile:css', ['clean:css'], () => {
  return gulp.src(path.join(sourceDir, sourceFile))
    .pipe(less())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(addSrc.prepend(path.join(sourceDir, wpStylesheetHeader)))
    .pipe(concat(destFile))
    .pipe(gulp.dest(destDir))
    .on('error', (e) => {
      console.error('Error running compile:css task! ', e.message);
      throw(e);
    });
});

gulp.task('watch:css', ['compile:css'], () => {
  gulp.watch(path.join(sourceDir, '**/*.less'), { interval: watchInterval }, ['compile:css']);
});
