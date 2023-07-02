const Router = require('koa-router');
const router = new Router();

const Task = require('../api/task');

router.post('/addTask', async (ctx) => {
    console.log("ctx.request.body", ctx.request.body);
    try {
        const result = await Task.addTask();
        ctx.body = result;
    }
    catch(err) {
        console.error('err', err);
        ctx.status = 500;
        ctx.body = 'Internal server error';
    }
})

router.get('/', async(ctx) => {
    ctx.body = 'it works!'
})

module.exports = router;
