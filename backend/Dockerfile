FROM node:22.0.0 AS builder
WORKDIR /dev
COPY package*.json .
RUN npm install typescript -g
RUN npm install
COPY . .
RUN npm run build
## second stage
