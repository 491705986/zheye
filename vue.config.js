module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8080, // 端口号
    open: true, // 配置自动启动浏览器
    proxy: {
      '/': {
        target: 'http://api.vikingship.xyz/', //你要访问的服务器域名
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
};
