## 目录结构
```
Koa2_template

 ├── src
 │   ├── app.js
 │   ├── config 							//配置
 │   │   └── index.js
 │   ├── controller	 				//操作类
 │   │   └── user.js
 │   ├── core				 			//核心方法
 │   │   └── mysql.js	 			//数据库链接设置
 │   ├── model			 			//模型
 │   │   └── user.js
 │   ├── public
 │   ├── routers                			//路由
 │   │   ├── common.js
 │   │   └── index.js
 │   └── utils								//工具类
 │       ├── checkToken.js			//验证token
 │       ├── createToken.js			//创建token
 │       └── sha1.js						 //sha1算法，微信验证时会用到
 └── vue.config.js

```

## 启动

安装所需的库

```
yarn / npm i
```

启动服务

```
yarn dev
```



## 说明

目前的koa的版本

```
"koa-body": "^4.2.0",
"koa-bodyparser": "^4.3.0",
"koa-html-render": "^1.0.3",
"koa-json": "^2.0.2",
"koa-jwt": "^4.0.1",
"koa-router": "^10.0.0",
"koa-static": "^5.0.0",
"koa2": "^2.0.0-alpha.7",
"koa2-cors": "^2.0.6",
```



template内置了**Element-ui**、*sass*、*axios*比较基本的库，可直接上手开发简单项目，无需多余配置



## 升级所有插件版本

如果感觉插件版本过低，不是最新版本的话可以一键更新所有插件版本，目前是2021.7.2更新了一次最新版。有需要的自行更新。

npm中有一个插件 `npm-check-updates`,该插件可以帮我们一键升级。

1. 安装该插件 `cnpm install -g npm-check-updates` 或者 `npm install -g npm-check-updates`
2. 在有package.json的目录执行 `npm-check-updates`或者 `ncu`简写命令检查是否有更新（该插件会去npm官网查询是否有最新版本3

3. 然后根据命令行提示执行`ncu -u`，自动检查package.json文件，会发现package.json里面的依赖版本号已经变成最新版本
4. 最后再`npm install`即可



## 错误说明

> 如果用yarn出现错误The engine "node" is incompatible with this module

应该是node版本过低，可以从node官网下载最新版，覆盖安装

还可以输入这个进行设置，就不会有问题了

```bash
 yarn config set ignore-engines true
```

