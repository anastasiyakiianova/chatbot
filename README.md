# chatbot
This chatbot is a simple API that sends back instructions according to some key phrases

To start:
```git clone git@github.com:anastasiyakiianova/chatbot.git
docker build -t koa:latest .
docker run -it --name koa -dp 3000:3000 koa:latest