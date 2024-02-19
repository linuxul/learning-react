require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const api = require('./api');
const mongoose = require('mongoose')

const app = new Koa();
const router = new Router();

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

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

console.log('port : ' + PORT)
const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
