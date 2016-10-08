// Gulp and required plugins
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var changed  = require('gulp-changed');
var del      = require('del');
var sass     = require('gulp-sass');

// Primary file paths
var src  = 'source/'; // The Middleman source folder
var dest = '.tmp/'; // The "hot" build folder used by Middleman's external pipeline

// Configuration
var
  images = {
    in: src + 'images/*.*',
    out: dest + 'images/'
  },

  css = {
    in: src + 'stylesheets/**/*.+(scss|sass)',
    out: dest + 'stylesheets/',
  };

// CSS Preprocessing
gulp.task('css', function() {
  return gulp.src(css.in)
    .pipe(sass())
    .pipe(gulp.dest(css.out));
});

// Image Optimization
gulp.task('images', function() {
  return gulp.src(images.in)
    .pipe(changed(images.out))
    .pipe(imagemin())
    .pipe(gulp.dest(images.out));
});

// Clean .tmp/
gulp.task('clean', function() {
  del([
    dest + '*'
  ]);
});

// Default Task
gulp.task('default', ['images', 'css'], function() {

  gulp.watch(images.in, ['images']);
  gulp.watch(css.in, ['css']);

});

// TODO: Production Task
