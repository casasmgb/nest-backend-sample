FROM node:lts-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

# Bundle app source

EXPOSE 3000
CMD [ "node", "dist/main.js" ]
