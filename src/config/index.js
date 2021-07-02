module.exports = { // mysql 配置
  mysql: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test', // 数据库名称
  },
  jwtKey: "Oct1a_H", //加密密钥,解析时需要一致 才能取到信息
  port: 80, //后台管理数据代理该接口，代理修改：vue.config.js
}