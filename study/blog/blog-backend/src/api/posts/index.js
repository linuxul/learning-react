const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router();
post.get('/', postsCtrl.checkObjectId, postsCtrl.read);
post.delete('/', postsCtrl.checkObjectId, postsCtrl.remove);
post.patch('/', postsCtrl.checkObjectId, postsCtrl.update);

posts.use('/:id', postsCtrl.checkObjectId, post.routes());

module.exports = posts;
