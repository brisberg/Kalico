FROM node:alpine

# Create app directory
RUN mkdir -p /public
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install
COPY app.js /app
COPY index.html /app
COPY public/ /app/public

EXPOSE 3000

CMD ["node", "app.js"]
