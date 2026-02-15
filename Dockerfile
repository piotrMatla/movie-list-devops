FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY app.js server.js ./

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]