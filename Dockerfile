FROM node:argon
MAINTAINER nullck <nullck@gmail.com>
RUN mkdir /opt/nodeapp
COPY package.json app.js /opt/nodeapp/
WORKDIR /opt/nodeapp
RUN npm install
CMD [ "node", "app.js" ]
