const mysql = require('mysql');
const config = require('../config');

var pool = mysql.createPool(config.mysql);

/**
 * 数据库封装
 * @param {*} sql
 * @param {*} val
 */

const query = (sql, val) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, val, (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
          connection.release();
        })
      }
    })
  })
}

module.exports = query