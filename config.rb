activate :directory_indexes
activate :autoprefixer

set :css_dir, "dist/css"
set :js_dir, "dist/js"
set :images_dir, "images"
set :relative_links, true
set :haml, { ugly: true, format: :html5 }

page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

configure :development do
  activate :livereload
end

activate :external_pipeline,
  name: :gulp,
  latency: 0,
  command: build? ? "./node_modules/gulp/bin/gulp.js buildSite" : "./node_modules/gulp/bin/gulp.js default",
  source: ".tmp/dist"

configure :build do
  activate :minify_css
  activate :minify_javascript
end
