const Koa = require('koa');
const json = require('koa-json');

const port = 3000;
const app = new Koa();

app.use(json())

app.use(async (ctx) => {
        ctx.body = {Text : "Hello World"};
})

app.listen(port, () => console.log('Server Running on port: 3000.'));
