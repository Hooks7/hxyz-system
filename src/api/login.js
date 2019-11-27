import request from '@/utils/request.js'

// 教师首页基本信息
export const homepageInformation = () => {
  return request.post('/index/index')
}

// 获取用户所有身份
export const userIdentity = () => {
  return request.get('​/index​/usertypes')
}

// 更改学校接口

export const changeSchool = (id) => {
  return request.post('/index/changeschool', {
    // 机构id
    schld: id })
}
