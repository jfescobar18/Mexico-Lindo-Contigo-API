FROM node:13.12.0

RUN mkdir -p /usr/src/mexico-lindo-contigo-api

WORKDIR /usr/src/mexico-lindo-contigo-api

COPY ["package.json",  "/usr/src/mexico-lindo-contigo-api/"]

RUN npm install --production

COPY [".",  "/usr/src/mexico-lindo-contigo-api/"]

EXPOSE 3000

CMD ["node", "server.js"]