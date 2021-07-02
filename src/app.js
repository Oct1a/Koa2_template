const path = require('path')
const Koa = require('koa2');
const cors = require('koa2-cors');
const server = require('koa-static');
const $config = require('./config'); // 基础设置
const $router = require('./routers'); //设置路由
const json = require('koa-json');
const htmlRender = require("koa-html-render")
const app = new Koa();
const bodyparser = require('koa-body')

// 设置静态文件
app.use(server(
  path.join(__dirname, 'server/public/')
))
app.use(server(
  path.join(__dirname, './public')
))


app.use(cors())
app.use(json())
app.use(htmlRender('./server/public/html'))

// 路由中间件，因上传文件需求与koa-bodyparser不兼容，故换成koa-body
app.use(bodyparser({
    multipart: true // 是否支持 multipart-formdate 的表单
  }))
  // 设置路由
app.use($router.routes())

app.listen($config.port) // 监听端口

console.log('listen in http://localhost:' + $config.port)