// 专门处理 漫画相关的接口请求
// 在接口中引用封装好的二次axios的实列
// 暴露的实列
import request from '@/untils/request'
// 获取轮播图  不是默认暴露,所以可以暴露多个
export const getBanner = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
  // ?直接写在了url的地址上面/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
    url: '/api/comic_v2/getproad',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 123
    }
  })
}
