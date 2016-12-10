FROM node:7.2
RUN npm install -g angular-cli
WORKDIR /app
CMD npm install && npm run server