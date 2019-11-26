import axios from 'axios'

const request = axios.create({
  timeout: 10000,
  baseURL: ''
})

request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么，例如加入token

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
