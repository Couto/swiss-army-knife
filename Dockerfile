FROM node:6.10.3-slim
LABEL maintainer hello@luiscouto.pt

RUN apt-get update && \
  apt-get install -y \
  apt-transport-https \
  libelf1

RUN apt-get clean && apt-get autoremove
