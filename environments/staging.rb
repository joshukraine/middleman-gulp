# Use this file for staging-specific deployment configs.
# https://middlemanapp.com/basics/upgrade-v4/#environments-and-changes-to-configure-blocks

# https://github.com/fredjean/middleman-s3_sync
# activate :s3_sync do |s3|
#   s3.bucket = "staging.example.com"
#   s3.aws_access_key_id = ENV["AWS_ACCESS_KEY_ID"]
#   s3.aws_secret_access_key = ENV["AWS_SECRET_ACCESS_KEY"]
#   s3.prefer_gzip = true
#   s3.index_document = "index.html"
#   s3.error_document = "404.html"
# end

# https://github.com/fredjean/middleman-s3_sync#http-caching
# default_caching_policy max_age: (60 * 60 * 24 * 365)
# caching_policy 'text/html', public: true, max_age: 0, must_revalidate: true
