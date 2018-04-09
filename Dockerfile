FROM ruby:2.3
EXPOSE 4000
WORKDIR /app
COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install
RUN gem install jekyll
