// Gulp and required plugins
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var changed    = require('gulp-changed');
var del        = require('del');
var sass       = require('gulp-sass');
var browserify = require('browserify');
var stream     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');

// Primary file paths
var src  = 'source/'; // The Middleman source folder
var dest = '.tmp/'; // The "hot" build folder used by Middleman's external pipeline

// Configuration
var
  css = {
    in: src + 'stylesheets/**/*.{css,scss,sass}',
    out: dest + 'stylesheets/',
  },

  js = {
    in: src + 'javascripts/*.{js,coffee}',
    out: dest + 'javascripts/'
  },

  images = {
    in: src + 'images/*.*',
    out: dest + 'images/'
  };

// CSS Preprocessing
gulp.task('css', function() {
  return gulp.src(css.in)
    .pipe(sass())
    .pipe(gulp.dest(css.out));
});

// Javascript Bundling
gulp.task('js', function() {
  var b = browserify({
    entries: src + 'javascripts/all.js',
    debug: true
  });

  return b.bundle()
    .pipe(stream('bundle.js'))
    .pipe(gulp.dest(js.out));
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

  gulp.watch(css.in, ['css']);
  gulp.watch(js.in, ['js']);
  gulp.watch(images.in, ['images']);

});

// TODO: Production Task
