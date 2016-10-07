// Gulp and required plugins
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin')
var changed  = require('gulp-changed')

// file paths
var source = 'source/'
var dest   = '.tmp/'
var images = {
  in: source + 'images/*.*',
  out: dest + 'images/'
};

// images
gulp.task('images', function() {
  return gulp.src(images.in)
    .pipe(changed(images.out)) // ignore unchanged files
    .pipe(imagemin()) // optimize
    .pipe(gulp.dest(images.out))
})

// default task
gulp.task('default', function() {

});
