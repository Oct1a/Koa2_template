/**
 * 关于用户的增删改查
 */
const $query = require('../core/mysql')
const $config = require('../config')

const t = $config.mysql.tablehead //表头
const { createCode, decodeCode } = require('../utils/inviteCode')

module.exports = {
  /**
   * 登录注册
   * @param {*} val
   */
  findUser: (openid) => {
    let _sql = ``
    return $query(_sql)
  }
}