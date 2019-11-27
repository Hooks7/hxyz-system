var path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  }
}

module.exports = {
  devServer: {
    proxy: { // 为天气接口配置代理，解决跨域
      '/proxy/': {
        'target': 'https://hxtch.xiaoyansuo.cn', // 天气接口地址
        'secure': false, // false为http访问，true为https访问
        'changeOrigin': true, // 跨域访问设置，true代表跨域
        'pathRewrite': { // 路径改写规则
          '^/proxy': '' // 以/proxy/为开头的改写为''
        }
      }
    }
  }
}
