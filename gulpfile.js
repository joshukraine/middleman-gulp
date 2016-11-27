// gulpfile.js - http://jsua.co/mm-gulp

'use strict'; // http://www.w3schools.com/js/js_strict.asp

// 1. LOAD PLUGINS

var gulp = require('gulp');
var p    = require('gulp-load-plugins')({ // This loads all the other plugins.
  DEBUG: false,
  pattern: ['gulp-*', 'gulp.*', 'del', 'run-*', 'browser*', 'vinyl-*'],
  rename: {
    'vinyl-source-stream': 'source',
    'vinyl-buffer': 'buffer',
    'gulp-util': 'gutil'
  },
});

// 2. CONFIGURATION

var
  src  = 'source/', // The Middleman source folder
  dest = '.tmp/',   // The "hot" build folder used by Middleman's external pipeline

  development = p.environments.development,
  production = p.environments.production,

  css = {
    in: src + 'stylesheets/**/*.{css,scss,sass}',
    out: dest + 'stylesheets/',
  },

  sassOpts = {
    imagePath: '../images',
    errLogToConsole: true
  },

  autoprefixerOpts = {
    browsers: ['last 3 versions', '> 5%']
  },

  js = {
    in: src + 'javascripts/*.{js,coffee}',
    out: dest + 'javascripts/'
  },

  uglifyOpts = {
    preserveComments: 'license'
  },

  images = {
    in: src + 'images/*',
    out: dest + 'images/'
  },

  fonts = {
    in: src + 'fonts/*.*',
    out: dest + 'fonts/'
  },

  serverOpts = {
    proxy: 'localhost:4567',
    open: true,
    reloadDelay: 500,
    files: [dest + '**/*.{js,css}', src + '**/*.{html,haml}']
  };

// 3. WORKER TASKS

// CSS Preprocessing
gulp.task('css', function() {
  return gulp.src(css.in)
    .pipe(development(p.sourcemaps.init()))
    .pipe(p.sass(sassOpts).on('error', p.sass.logError))
    .pipe(p.autoprefixer(autoprefixerOpts)).on('error', handleError)
    .pipe(production(p.cleanCss()))
    .pipe(development(p.sourcemaps.write()))
    .pipe(gulp.dest(css.out));
});

// Javascript Bundling
gulp.task('js', function() {
  var b = p.browserify({
    entries: src + 'javascripts/all.js',
    debug: true
  });

  return b.bundle().on('error', handleError)
    .pipe(p.source('bundle.js'))
    .pipe(production() ? p.buffer() : p.gutil.noop())
    .pipe(production(p.stripDebug()))
    .pipe(production() ? p.uglify(uglifyOpts) : p.gutil.noop())
    .pipe(gulp.dest(js.out));
});

// Image Optimization
gulp.task('images', function() {
  return gulp.src(images.in)
    .pipe(p.changed(images.out))
    .pipe(p.imagemin())
    .pipe(gulp.dest(images.out));
});

// Web Fonts
gulp.task('fonts', function() {
  return gulp.src(fonts.in)
    .pipe(p.changed(fonts.out))
    .pipe(gulp.dest(fonts.out));
});

// Clean .tmp/
gulp.task('clean', function() {
  p.del([
    dest + '*'
  ]);
});

// Asset Size Report
gulp.task('sizereport', function () {
  return gulp.src(dest + '**/*')
    .pipe(p.sizereport({
      gzip: true
    }));
});

// 4. SUPER TASKS

// Development Task
gulp.task('development', function(done) {
  p.runSequence('clean', 'css', 'fonts', 'js', 'images', done);
});

// Production Task
gulp.task('production', function(done) {
  p.runSequence('clean', 'css', 'fonts', 'js', 'images', 'sizereport', done);
});

// Default Task
// This is the task that will be invoked by Middleman's exteranal pipeline when
// running 'middleman server'
gulp.task('default', ['development'], function() {

  p.browserSync.init(serverOpts);

  gulp.watch(css.in, ['css']);
  gulp.watch(js.in, ['js']);
  gulp.watch(images.in, ['images']);

});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
