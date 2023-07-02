const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');

const port = 3000;
const app = new Koa();
const router = new KoaRouter();

app.use(json())
// app.use(async (ctx) => ( ctx.body = {Text : "Hello World"} ));

router.get('/home', ctx => ( ctx.body = {Text : "Welcome to koa server"} ))

app.use(router.routes()).use( router.allowedMethods() );

app.listen(port, () => console.log('Server Running on port: 3000.'));
