FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install http-server -g
COPY . .
RUN npm run build
CMD ["http-server", "dist"]