FROM node:14.10.1-alpine3.12

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install 

COPY . .
