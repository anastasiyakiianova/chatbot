FROM node:alpine

COPY . /koaserver
WORKDIR /koaserver

# Install Node.js dependencies
RUN yarn install --no-progress \
  && yarn cache clean 

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]
