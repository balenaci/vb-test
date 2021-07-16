# syntax=docker/dockerfile:experimental
FROM node:14.0-alpine
WORKDIR /code

RUN --mount=type=secret,id=npmtoken,dst=/token cat /token

COPY . .
CMD ["node", "app.js"]
