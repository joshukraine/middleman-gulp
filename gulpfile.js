var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp
    .src('source/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError)) // Make sure to use sass.logError so watch task doesn't exit.
    .pipe(gulp.dest('source/dist/css'));
});

gulp.task('build', ['styles']);

gulp.task('default', ['styles'], function(){
  gulp.watch('source/stylesheets/*.scss', ['styles']);
});
