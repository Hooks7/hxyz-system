import axios from 'axios'
import JSONbig from 'json-bigint'
// import store from '@/store'
axios.defaults.withCredentials = true

const request = axios.create({
  timeout: 10000,
  baseURL: 'https://hxtch.xiaoyansuo.cn'
})

// 处理大数字
request.defaults.transformResponse = [function (data) {
  try {
    return JSONbig.parse(data)
  } catch (err) {
    return data
  }
}]

request.interceptors.request.use(function (config) {
  if (config.method === 'post' && config.data) {
    config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
  // store.dispatch('showloader')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

request.interceptors.response.use(function (response) {
  // store.dispatch('hideloader')
  return response
}, function (error) {
  console.log(error)

  // 对响应错误做点什么
  return Promise.reject(error)
})
export default request
