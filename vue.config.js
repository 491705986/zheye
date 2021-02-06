module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8080, // 端口号
    open: true // 配置自动启动浏览器
  }
};
