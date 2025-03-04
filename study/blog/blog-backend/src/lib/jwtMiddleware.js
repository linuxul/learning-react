const jwt = require('jsonwebtoken');
const User = require('../models/user');

const jwtMiddleware = async (ctx, next) => {
  console.log('jwtMiddleware #1 : ', ctx)

  const token = ctx.cookies.get('access_token');
  console.log('jwtMiddleware #2 token : ', token)

  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username
    };
    console.log('jwtMiddleware #2 token : ', token)

    // 토큰의 남은 유효 기간이 3.5일 미만이면 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      });
    }

    console.log(decoded);
    return next();
  } catch (e) {
    return next();
  }
};

module.exports = jwtMiddleware;
