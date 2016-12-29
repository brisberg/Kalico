FROM node:alpine

# Create app directory
RUN mkdir -p /server
WORKDIR /server

# Install app dependencies
COPY package.json /server
RUN npm install

COPY server.js /server

EXPOSE 3001

CMD ["node", "server.js"]
