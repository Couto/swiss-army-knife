FROM node:6.9.5-slim

RUN apt-get update && \
  apt-get install -y \
  apt-transport-https \
  libelf1
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && \
  apt-get install -y yarn && \
  apt-get clean && \
  apt-get autoremove
