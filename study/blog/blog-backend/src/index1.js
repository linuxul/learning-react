require('dotevn').config()
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose')
const api = require('./api');

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URL } = process.env;


mongoose
.connect(MONGO_URL)
.then(() => {
  console.log('connected to mongodb!')
})
.catch(e => {
  console.log(e)
})

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000 ');
});
