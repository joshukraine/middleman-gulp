var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('styles', function() {
  return gulp.src('source/stylesheets/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Make sure to use sass.logError so watch task doesn't exit.
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('source/dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src('source/javascripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('source/dist/js'));
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('default', ['styles', 'scripts'], function(){
  gulp.watch('source/stylesheets/*.scss', ['styles']);
  gulp.watch('source/javascripts/*.js', ['scripts']);
});
