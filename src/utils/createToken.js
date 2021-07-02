const jwt = require('jsonwebtoken');
const config = require('../config')
  // 创建token
  //登录时：核对用户名和密码成功后，应用将用户的id 作为JWT Payload的一个属性
module.exports = function(user) {
  const token = jwt.sign({
    openid: user.wx_openid,
    userName: user.nickname,
  }, config.jwtKey, {
    expiresIn: '24h' //过期时间设置为24h 格式有(s, m, h , day)。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
  });
  return token;
};