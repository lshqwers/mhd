// 项目的配置文件
module.exports = {
  devServer: {
    proxy: {
      // key : value
      // key - 前最
      // value - 是 http-proxy-middleware 相同的一个配置对象
      '/wy': {
        // target是目标地址,只写主机(主机包括目标和端口号)
        target: 'https://m.study.163.com', // 代码的目标地址
        changeOrigin: true, // 固定写法
        pathRewrite: {
          '^/wy': ''
        }
      },
      '/migu': {
        // target是目标地址,只写主机(主机包括目标和端口号)
        target: 'http://movie.miguvideo.com', // 代码的目标地址
        changeOrigin: true, // 固定写法
        pathRewrite: {
          '^/migu': ''
        }
      },
      // https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123
      '/api': {
        // target是目标地址,只写主机(主机包括目标和端口号)
        target: 'https://mhd.zhuishushenqi.com', // ((只有主机的名字))代码的目标地址
        changeOrigin: true, // 固定写法
        pathRewrite: { // 因为地址没有斜杠/api
          '^/api': ''
        }
      },
      // http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5
      '/weibo': {
        // target是目标地址,只写主机(主机包括目标和端口号)
        target: 'http://manhua.weibo.cn', // ((只有主机的名字))代码的目标地址
        changeOrigin: true, // 固定写法
        pathRewrite: { // 因为地址没有斜杠/api
          '^/weibo': ''
        }
      },
      // https://m.study.163.com/j/operation/homepage.json
      '/wyt': {
        // target是目标地址,只写主机(主机包括目标和端口号)
        target: 'https://m.study.163.com', // ((只有主机的名字))代码的目标地址
        changeOrigin: true, // 固定写法
        pathRewrite: { // 因为地址没有斜杠/api
          '^/wyt': ''
        }
      }
    }
  }
}
