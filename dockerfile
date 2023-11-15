FROM node:18-alpine

WORKDIR /usr/src/app

COPY . . 

CMD node ./sort/sort.js; node ./sort/sort1.js
