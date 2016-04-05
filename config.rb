activate :directory_indexes

set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"
set :relative_links, true
set :haml, { ugly: true, format: :html5 }

page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false
page "/404.html", directory_index: false

configure :development do
  # activate :livereload
end

activate :external_pipeline,
  name: :gulp,
  command: build? ? "npm run production" : "npm run gulp",
  source: ".tmp",
  latency: 1

configure :build do
  activate :minify_html do |html|
    html.remove_quotes = false
    html.remove_intertag_spaces = true
  end

  # Ignore the CSS file Middleman normally generates
  # Middleman expects `site.css.scss` → `site.css`
  # We strip the `.css` to prevent Gulp generating `site.css.css`
  # Add your site's main `.scss` filename (without the extension)
  # To understand more, comment this out and run `middleman build`
  ignore "stylesheets/site"
end
