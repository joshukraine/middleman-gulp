# Middleman 4 + Gulp.js

This is a Middleman template which implements Gulp using the new [`external_pipeline`](https://middlemanapp.com/advanced/external-pipeline/) feature introduced in v4.

### Features

- [Gulp](http://gulpjs.com/) - Asset pipeline
- [Browserify](http://browserify.org/) - JavaScript bundling
- [Haml](http://haml.info/) - So much cleaner than ERB
- [Bourbon](http://bourbon.io/) - Sass mixin library
- [Neat](http://neat.bourbon.io/) - Semantic grid for Sass and Bourbon
- [Bitters](http://bitters.bourbon.io/) - Scaffold styles, variables and structure for Bourbon projects.
- [Middleman Live Reload](https://github.com/middleman/middleman-livereload) - Reload the page when files change
- [SassC (LibSass)](https://github.com/sass/sassc)

### Usage

1. Clone this repo using the https link.

        $ git clone https://github.com/joshukraine/middleman-gulp.git my_new_site

2. Change into the project root and run the setup script.

        $ cd my_new_site
        $ bin/setup

3. Start the Middleman server (also runs Gulp via the external pipeline).

        $ bundle exec middleman server

### Acknowledgements

The following repos were very helpful in setting up this template.

- [https://github.com/thoughtbot/proteus-middleman](https://github.com/thoughtbot/proteus-middleman)
- [https://github.com/NathanBowers/mm-template](https://github.com/NathanBowers/mm-template)

### Reference

- [https://github.com/middleman/middleman/issues/1817](https://github.com/middleman/middleman/issues/1817)
- [https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md](https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md)
- [https://forum.middlemanapp.com/t/gulp-and-middleman-4/2012](https://forum.middlemanapp.com/t/gulp-and-middleman-4/2012)
