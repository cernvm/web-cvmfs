FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ruby-full build-essential zlib1g-dev

RUN gem install jekyll bundler

COPY . web

WORKDIR web

RUN bundle install                                                                                                                          

CMD bundle exec jekyll serve
