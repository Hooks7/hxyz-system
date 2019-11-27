import axios from 'axios'
axios.defaults.withCredentials = true

const request = axios.create({
  timeout: 10000,
  baseURL: 'https://hxtch.xiaoyansuo.cn'
})

request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

request.interceptors.response.use(function (response) {
  // 在接收响应做些什么，例如跳转到登录页

  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default request
