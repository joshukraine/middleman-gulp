activate :directory_indexes

set :relative_links, true
set :haml, { ugly: true, format: :html5 }

page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false
page "/404.html", directory_index: false

configure :build do
  activate :external_pipeline,
    name: :gulp,
    command: "npm run production",
    source: ".tmp",
    latency: 1

  activate :gzip

  # activate :asset_hash
  # activate :asset_host,
  #   host: "//cdn.cloudfront.net",
  #   rewrite_ignore: ["*.js"]

  # set :url_root, "http://example.com"

  # https://github.com/Aupajo/middleman-search_engine_sitemap
  # activate :search_engine_sitemap

  ignore "javascripts/all.js"
  ignore "stylesheets/site"

  activate :minify_html do |html|
    html.remove_quotes = false
    html.remove_intertag_spaces = true
  end
end

# https://github.com/fredjean/middleman-s3_sync
# activate :s3_sync do |s3|
#   s3.bucket = "your-bucket-name"
#   s3.aws_access_key_id = ENV["AWS_ACCESS_KEY_ID"]
#   s3.aws_secret_access_key = ENV["AWS_SECRET_ACCESS_KEY"]
#   s3.prefer_gzip = true
#   s3.index_document = "index.html"
#   s3.error_document = "404.html"
# end
