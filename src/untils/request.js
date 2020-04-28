// 引入axios
import axios from 'axios'
// Vue.use(axios())
// 创建一个实列对象 axios的二次封装
const instance = axios.create({
  // axios.get('/hello') 请求的地址是http://localhost:8080/hello
  baseURL: 'http://localhost:8080',
  // 超时时间的设置,后端接口的设置ms
  timeout: 5000
})
// 添加请求拦截器  axios改成实列 instance
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default instance
