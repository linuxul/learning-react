const User = require('../../models/user');
const joi = require('joi');
const mongoose = require('mongoose');

/*
  POST /api/auth/register
  {
      "username": "velopert",
      "password": "mypass1234",
  }
*/
exports.register = async (ctx) => {
  console.log('register #1 : ', ctx)
  // Request Body 검증하기
  const schema = joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    username: joi.string().alphanum().min(3).max(20).required(),
    password: joi.string().required()
  });

  console.log('register #2 : ')
  // 검증하고 나서 검증 실패인 경우 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  console.log('register #3 : ' + username)
  console.log('register #4 : ' + password)
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409;
      return;
    }
    console.log('register #5 : ' + exists)

    const user = new User({
      username
    });
    await user.setPassword(password);
    await user.save();

    console.log('register #6')

    // 응답할 데이터에서 hashedPassword 필드 제거
    // const data = user.toJSON();
    // delete data.hashedPassword;
    ctx.body = user.serialize()
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.login = async (ctx) => {

};

exports.check = async (ctx) => {};

exports.logout = async (ctx) => {};
