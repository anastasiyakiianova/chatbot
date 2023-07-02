# chatbot
This chatbot is a simple API that sends back instructions according to some key phrases

To start in container:
```git clone git@github.com:anastasiyakiianova/chatbot.git
docker build -t koa:latest .
docker run -it --name koa -dp 3000:3000 koa:latest


To request it through browser mozilla RESTer extension:
```send a POST request: http://127.0.0.7/addTask
body tab>right side>burger menu>Form:
id someId
description test description


To install packages manually:
```yarn add nodemon
yarn add koa-json
yarn add koa-router
yarn add koa-body