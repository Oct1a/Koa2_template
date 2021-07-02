'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title
const port = 8818

module.exports = {
  publicPath: '/', //如果是子目录的话需要改成对应路径
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@server': resolve('server')
      }
    }
  },
  chainWebpack(config) {
    // 提高加载速度
    config.plugin('preload').tap(() => [{
      rel: 'preload',
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include: 'initial'
    }])

    //当页面太多时，会导致太多无意义的请求
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // 只打包最初依赖的第三方
                },
                elementUI: {
                  name: 'chunk-elementUI', // 将elementUI拆分为单个包
                  priority: 20,
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // 适应cnpm运行，避免无法找到
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // 可以自定义规则
                  minChunks: 3, //  最低常见的数量
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}