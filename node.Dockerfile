FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
# COPY bin /usr/src/app/bin
# COPY ejs /usr/src/app/ejs
COPY public /usr/src/app/public
COPY views /usr/src/app/views
COPY routes /usr/src/app/routes

RUN npm i npm@latest -g
RUN npm install --quiet
RUN npm install -g nodemon --quiet
RUN npm install express-flash --quiet
RUN npm install express-session --quiet
RUN npm install body-parser --quiet
RUN npm install moment --quiet
# RUN ls /usr/src/app
# RUN ls /usr/src/app/ejs

# RUN npm start #--quiet

EXPOSE 3000

CMD [ "nodemon", "-L" ]
# CMD [ "npm start"]

