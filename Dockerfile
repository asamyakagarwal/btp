FROM node:12.16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "run", "start"]