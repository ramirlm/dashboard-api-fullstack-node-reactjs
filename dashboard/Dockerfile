FROM node:12.2.0-alpine

# Creating the app directory on the container and setting as working directory
RUN mkdir -p /srv/dashboard
WORKDIR /srv/dashboard

COPY package.json /srv/dashboard
COPY package-lock.json /srv/dashboard

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . /srv/dashboard

CMD [ "npm", "start" ]