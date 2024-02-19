const Post = require('../../models/post');
const mongoose = require('mongoose');
const joi = require('joi');

const { ObjectId } = mongoose.Types;
exports.getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }

  try {
    const post = await Post.findById(id);
    // 포스트가 존재하니 않을 때
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
    return;
  } catch (e) {
    ctx.throw(500, e);
  }

  return next();
};

exports.checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

/*
  POST /api/posts
  {
      "title": "제목",
      "body": "내용",
      "tags": ["태그1", "태그2"]
  }
*/
exports.write = async (ctx) => {
  const schema = joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: joi.string().required(),
    body: joi.string().required(),
    tags: joi.string().items(joi.string()).require()
  });

  // 검증하고 나서 검증 실패인 경우 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
    user: ctx.state.user
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/posts
*/
exports.list = async (ctx) => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
  // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username' : username} : {}),
    ...(tag ? { tags : tag } : {})
  }

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/posts/:id
*/
exports.read = (ctx) => {
  ctx.body = ctx.state.post;

  // const { id } = ctx.params;
  // try {
  //   const post = await Post.findById(id).exec();
  //   if (!post) {
  //     ctx.status = 404;
  //   }
  //   ctx.body = post;
  // } catch (e) {
  //   ctx.throw(500, e);
  // }
};

/*
  DELETE /api/posts/:id
*/
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndDelete(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  PATCH /api/posts/:id
    {
      "title": "제목",
      "body": "내용",
      "tags": ["태그1", "태그2"]
  }
*/
exports.update = async (ctx) => {
  const { id } = ctx.params;

  const schema = joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: joi.string(),
    body: joi.string(),
    tags: joi.string().items(joi.string())
  });

  // 검증하고 나서 검증 실패인 경우 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true
      // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false일 때는 업데이트되기 전의 데이터를 반환합니다.
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
