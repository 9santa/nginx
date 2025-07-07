# Fetching the minified node image on alpine linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /express-docker

COPY package*.json ./

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "npm", "run", "start" ]

# Exposing server port
EXPOSE 7777
