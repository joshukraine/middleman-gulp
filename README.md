Middleman 4 + Gulp.js
=====================

[![Build Status](https://travis-ci.org/joshukraine/middleman-gulp.svg?branch=master)](https://travis-ci.org/joshukraine/middleman-gulp) [![Dependency Status](https://gemnasium.com/badges/github.com/joshukraine/middleman-gulp.svg)](https://gemnasium.com/github.com/joshukraine/middleman-gulp)

This is a [Middleman](https://middlemanapp.com/) template which implements [Gulp.js](http://gulpjs.com/) using the new [external pipeline](https://middlemanapp.com/advanced/external-pipeline/) feature introduced in Middleman 4.

Features
--------

- [Gulp](http://gulpjs.com/) - Asset pipeline
- [SassC (LibSass)](https://www.npmjs.com/package/gulp-sass)
- [Browserify](http://browserify.org/) - JavaScript bundling
- [Haml](http://haml.info/) - So much cleaner than ERB
- [Image Optimization](https://www.npmjs.com/package/gulp-imagemin)
- [BrowserSync](https://www.browsersync.io/) - Fast page reloading when changes are made in development
- [Pry](https://github.com/AndrewKvalheim/middleman-pry#readme) - REPL, debugger, overall better console experience
- [jQuery](http://jquery.com/) and [Moment.js](http://momentjs.com/) - Included as examples and so Browserify has something to bundle. :)
- [Web Font Loader](https://www.npmjs.com/package/webfontloader) for asynchronous font loading.
- Integration and unit testing with [Rspec](http://rspec.info/) and [Capybara](https://github.com/jnicklas/capybara)
- Linting with [ESLint](https://www.npmjs.com/package/eslint), [scss-lint](https://github.com/brigade/scss-lint#readme), and [haml-lint](https://github.com/brigade/haml-lint#readme)
- Environment-specific deployment to Amazon S3

I also like to use [Bourbon](http://bourbon.io/), [Neat](http://neat.bourbon.io/), and [Bitters](http://bitters.bourbon.io/). Uncomment these in the Gemfile if desired.

Requirements
------------

* [Middleman 4.x](https://middlemanapp.com/basics/install/)
* [Ruby 2.x](https://github.com/rbenv/rbenv#readme)
* [Node 6.x](https://github.com/creationix/nvm#readme)
* [Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)

Usage
-----

1. Start a new Middleman site using this template.

        $ middleman init my_new_site -T joshukraine/middleman-gulp

2. Change into the project root and execute the setup script.

        $ cd my_new_site
        $ chmod +x bin/* # Make sure we can run included scripts
        $ bin/setup

3. Start the Middleman server. Note that this will also invoke Gulp via the external pipeline.

        $ bundle exec middleman server

4. Initialize a new Git repo.

        $ git init
        $ git add --all
        $ git commit -m "Initial commit"
        $ git remote add origin https://[your-repo-url]
        $ git push -u origin master

Deployment
----------

I recommend Amazon S3 for deployment. It's very simple and surprisingly cost effective. Here's how to deploy your site to S3.

1. Read Amazon's guide on [Hosting a Static Website](http://docs.aws.amazon.com/gettingstarted/latest/swh/website-hosting-intro.html)

2. In the Gemfile, uncomment and install [middleman-s3_sync](https://github.com/fredjean/middleman-s3_sync#readme)

3. Configure your deployment configs in `environments/production.rb` and `environments/staging.rb`.

4. To deploy, run the deploy script, passing your desired environment as an argument.

        $ bin/deploy production
        
        # OR...
        $ bin/deploy staging

Environments
------------

Middleman has two default environments: `development` and `production`. This template is configured to run the external pipeline (Gulp in our case) in both. There are times, however, when the external pipeline should not run. Two good examples are tests and the console. We therefore define two additional environments: `test` and `console`.

Custom environments can be invoked on the command line with `-e` flag like so:

    # Start the console in the console enviroment
    $ bundle exec middleman console -e console

Code for custom environments is stored in `environments/<your-custom-env>.rb`. Note that custom environments can be invoked without the existence of a corresponding file in the `environments/` directory. If, for example, you merely wanted to start a server without the default `development` configs, you could run `middleman server -e <anything-here>`.

For completeness, all five environments used in this template have corresponding files:

```sh
environments/
├── console.rb
├── development.rb
├── production.rb
├── staging.rb
└── test.rb
```

Middleman vs. Gulp
------------------

As I initially experimented with Gulp and Middleman, it was sometimes difficult to determine which tool should handle which tasks. The problem is that, while Gulp and Middleman are very different, they have a fair amount of overlapping functionality. For example, Middleman can [minify your CSS and JavaScript](https://middlemanapp.com/advanced/file_size_optimization/#compressing-css-and-javascript) right out of the box. So can Gulp. Middleman can also minify your [HTML](https://middlemanapp.com/advanced/file_size_optimization/#minify-html), [gzip your files](https://middlemanapp.com/advanced/file_size_optimization/#gzip-text-files), and automatically reload your browser using [LiveReload](https://middlemanapp.com/basics/development_cycle/#livereload). And Gulp can do [all](https://www.npmjs.com/package/gulp-clean-css) [these](https://www.npmjs.com/package/gulp-uglify) [things](https://www.npmjs.com/package/gulp-htmlmin) [too](https://www.npmjs.com/package/gulp-livereload).

So how do you decide who does what? I think most people would be inclined to have Gulp do it all. That's what it was designed for, and it makes sense to keep all these asset-related tasks in one place. However, since we're using Gulp inside of Middleman - a robust static site generator - I think there are some tasks that are better left to Middleman. Here's how I've broken it down in this template:

| Middleman       | Gulp              |
| --------------- | ----------------- |
| HTML Templating |                   |
| Minify HTML     |                   |
| Gzip Files      |                   |
|                 | Preprocess CSS    |
|                 | Minify CSS        |
|                 | Minify Javascript |
|                 | Sourcemaps        |
|                 | Autoprefixer      |
|                 | Bundle JavaScript |
|                 | Compress Images   |
|                 | Copy web fonts    |
|                 | Browser Reload    |

Tests
-----

Testing is done with Rspec. A few basic tests are provided as an example. Run your test suite like so:

    $ bin/rspec spec/

Aliases
-------

Consider adding the following to your `.bashrc` or `.zshrc` file:

```sh
mm='bundle exec middleman'
mmb='bundle exec middleman build --clean'
mmc='bundle exec middleman console -e console'
mms='bundle exec middleman server'
```

Acknowledgements
----------------

The following repos were very helpful in setting up this template.

- [https://github.com/craigmdennis/middleman-gulp-starter](https://github.com/craigmdennis/middleman-gulp-starter)
- [https://github.com/thoughtbot/proteus-middleman](https://github.com/thoughtbot/proteus-middleman)
- [https://github.com/NathanBowers/mm-template](https://github.com/NathanBowers/mm-template)
- [https://github.com/simonrice/middleman-rspec](https://github.com/simonrice/middleman-rspec)

Reference
---------

- [https://youtu.be/-io8EeB3GHI](https://youtu.be/-io8EeB3GHI)
- [https://github.com/middleman/middleman/issues/1817](https://github.com/middleman/middleman/issues/1817)
- [https://forum.middlemanapp.com/t/gulp-and-middleman-4/2012](https://forum.middlemanapp.com/t/gulp-and-middleman-4/2012)

License
-------

Copyright (c) 2016 Joshua Steele. [MIT License](https://github.com/joshukraine/middleman-gulp/blob/master/LICENSE)
