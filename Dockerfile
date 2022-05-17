FROM node:16-alpine

WORKDIR /app

ENV NODE_ENV "development"

COPY . /app/

RUN npm install

ENV PORT 3000
EXPOSE $PORT


CMD [ "npm", "start" ]
