FROM node:14-alpine

COPY . /code

WORKDIR /code

RUN npm install

USER node

CMD ["node", "index.js"]