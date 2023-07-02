const Koa = require('koa');
const { koaBody } = require('koa-body');
const router = require('./router');


const port = 3000;
const app = new Koa();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(port, () => console.log('http://localhost:3000'));
