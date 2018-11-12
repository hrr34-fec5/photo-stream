#base image
FROM node:10.13.0

#set working directory
WORKDIR /usr/src/app
RUN npm install -g nodemon
COPY package.json /usr/src/app
#expose port of service
RUN npm install

#install and configure 'serve'
# RUN nodemon server/index.js

#copy source code to image
COPY . /usr/src/app
 
EXPOSE 8080

#install dependencies
# RUN npm install

#build app and start server from script
CMD ["npm","start"]
# FROM node:10.13.0
# WORKDIR /app
# RUN npm install -g nodemon
# COPY package*.json ./
# RUN npm install
# COPY . /app
# EXPOSE 1337
# CMD npm run web