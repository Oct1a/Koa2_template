const Router = require('koa-router')();
const fs = require('fs');
const path = require('path');

function loadRoutes(filePath) { //封装递归
  const files = fs.readdirSync(filePath); //将当前目录下 都读出来
  files.filter(file => { // 过滤
      if (filePath !== __dirname && file === 'index.js') { //读取的时候会将当前目录的 index.js 也读取出来，这个不需要，如果拿到别的地方可以不加这个判断
        console.log("routes module must not be 'index.js' ")
      }
      return file !== 'index.js'
    }) // 将 index.js 过滤掉，路由名字一律不能用 index.js 命名，否则不生效
    .forEach(file => {
      let newFilePath = path.join(filePath, file);
      if (fs.statSync(newFilePath).isDirectory()) { // 是目录
        loadRoutes(newFilePath); // 递归
      } else { // 是文件
        let route = require(newFilePath);
        //注册路由
        Router.use(route.routes())
        Router.use(route.allowedMethods())
      }
    })
}

//启动
loadRoutes(__dirname);

module.exports = Router;