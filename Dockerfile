FROM node:6.9.5-slim

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN echo 'export PATH="$PATH:$(yarn global bin)"' | tee -a ~/.bashrc
