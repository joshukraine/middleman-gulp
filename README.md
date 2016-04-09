# Middleman 4 + Gulp.js

[![Build Status](https://travis-ci.org/joshukraine/middleman-gulp.svg?branch=master)](https://travis-ci.org/joshukraine/middleman-gulp)

This is a Middleman template which implements Gulp using the new [`external_pipeline`](https://middlemanapp.com/advanced/external-pipeline/) feature introduced in v4.

Huge thank-you to [Craig Dennis](https://twitter.com/craigmdennis) for his [YouTube video](https://youtu.be/-io8EeB3GHI) and accompanying [GitHub repo](https://github.com/craigmdennis/middleman-gulp-starter) where he illustrates how to use Middleman with Gulp Starter.

### Features

- [Gulp](http://gulpjs.com/) via [Gulp Starter](https://github.com/vigetlabs/gulp-starter) - Asset pipeline
- [BrowserSync](https://www.browsersync.io/) - Fast page reloading when changes are made in development
- [Haml](http://haml.info/) - So much cleaner than ERB
- [SassC (LibSass)](https://github.com/sass/sassc)

I also like to use [Bourbon](http://bourbon.io/), [Neat](http://neat.bourbon.io/), and [Bitters](http://bitters.bourbon.io/). Uncomment these in the Gemfile if desired.

### Usage

To start new Middleman site using this template, do the following:

1. Clone this repo using the https link.

        $ git clone https://github.com/joshukraine/middleman-gulp.git my_new_site

2. Change into the project root and run the setup script.

        $ cd my_new_site
        $ bin/setup

3. Start the Middleman server. Appending `-e gulp` [sets the environment](https://middlemanapp.com/basics/upgrade-v4/#environments-and-changes-to-configure-blocks) to `gulp` and invokes the external pipeline.

        # With Gulp
        $ bundle exec middleman server -e gulp
        
        # Without Gulp
        $ bundle exec middleman server

4. Remove old git history and initialize a new repo.

        $ rm -rf .git
        $ git init
        $ git add --all
        $ git commit -m "Initial commit"
        $ git remote add origin https://[your-repo-url]
        $ git push -u origin master

### Acknowledgements

The following repos were very helpful in setting up this template.

- [https://github.com/craigmdennis/middleman-gulp-starter](https://github.com/craigmdennis/middleman-gulp-starter)
- [https://github.com/thoughtbot/proteus-middleman](https://github.com/thoughtbot/proteus-middleman)
- [https://github.com/NathanBowers/mm-template](https://github.com/NathanBowers/mm-template)

### Reference

- [https://youtu.be/-io8EeB3GHI](https://youtu.be/-io8EeB3GHI)
- [https://github.com/middleman/middleman/issues/1817](https://github.com/middleman/middleman/issues/1817)
- [https://forum.middlemanapp.com/t/gulp-and-middleman-4/2012](https://forum.middlemanapp.com/t/gulp-and-middleman-4/2012)
