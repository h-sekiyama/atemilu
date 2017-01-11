source 'https://rubygems.org'

gem 'rails', '4.2.6'
gem 'turbolinks'
gem 'sqlite3', groups: %w(test development), require: false
gem 'pg', groups: %w(production), require: false
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'bcrypt', '~> 3.1.7'

gem 'slim-rails'
gem 'config'

# マスターデータ
gem 'active_hash'

# Facebookログイン
gem 'sorcery'
gem 'omniauth'
gem 'omniauth-facebook'

# 静的ページ
gem 'high_voltage'

group :development, :test do
  gem 'brakeman', require: false
  gem 'factory_girl_rails'
  gem 'byebug'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'better_errors'
  gem 'rubocop'
end

group :development do
  gem 'quiet_assets'
  gem 'rack-mini-profiler'
  gem 'bullet'
  gem 'web-console', '~> 2.0'
  gem 'spring'
end

group :production do
  gem 'pg'
end
group :development, :test do
  gem 'sqlite3'
  gem 'sqlite3-ruby', :require => 'sqlite3'
end

gem 'haml-rails'
gem 'erb2haml'
