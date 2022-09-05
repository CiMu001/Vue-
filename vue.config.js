const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //关闭eslint
  lintOnSave: false,
  transpileDependencies: true,
  // devServer: {
  //   proxy: 'http://gmall-h5-api.atguigu.cn'
  // },
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      }
    }
  },
})
