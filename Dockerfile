FROM node:14.0-alpine
WORKDIR /code

COPY . .
CMD ["node", "app.js"]
