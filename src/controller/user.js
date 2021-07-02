/**
 * 针对数据库操作
 */

const $sql = require('../core/mysql');

const userModel = require('../model/user')

const createToken = require('../utils/createToken');


let getUser = async(userinfo) => {

}

module.exports = {
  getUser,
}