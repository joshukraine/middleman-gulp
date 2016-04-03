var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('styles', function() {
  return gulp.src('source/stylesheets/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('source/dist/css'));
});

gulp.task('scripts', function() {
  var b = browserify({
    entries: 'source/javascripts/bundle.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('all.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('source/dist/js'));
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('default', ['styles', 'scripts'], function(){
  gulp.watch('source/stylesheets/*.scss', ['styles']);
  gulp.watch('source/javascripts/*.js', ['scripts']);
});
