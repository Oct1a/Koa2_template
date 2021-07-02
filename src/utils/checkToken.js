const jwt = require('jsonwebtoken');
const config = require('../config')
  // 必须要有Token (需要用户登录)
module.exports = async(ctx, next) => {
  token = ctx.get('token'); // request 带过来的 token
  if (token == '') {
    ctx.body = {
      status: 101,
      msg: '用户未登录'
    }
    return false
  }
  try {
    ctx.userInfo = await jwt.verify(token, config.jwtKey);
    await next();
  } catch (err) {
    ctx.body = {
      status: 101,
      msg: '用户登录验证失效'
    }
  }
}