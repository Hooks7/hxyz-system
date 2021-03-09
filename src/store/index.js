import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: [],
    activeIndex: '/main',
    menuItems: [
      { name: '首页', route: '/main', class: 'el-icon-star-off' },
      {
        name: '发送通知',
        route: '/sendNotification',
        class: 'el-icon-goods',
      },
      { name: '收发作业', route: '/homeWork', class: 'el-icon-plus' },
      { name: '资料管理', route: '/data', class: 'el-icon-star-off' },
      { name: '课程管理', route: '/course', class: 'el-icon-plus' },
      { name: '老师管理', route: '/teacher', class: 'el-icon-star-off' },
      {
        name: '教学场地管理',
        route: '/classroom',
        class: 'el-icon-star-off',
      },
      { name: '班级管理', route: '/class', class: 'el-icon-star-off' },
      {
        name: '机构信息设置',
        route: '/institutions',
        class: 'el-icon-star-off',
      },
      {
        name: '班级类型管理',
        route: '/classType',
        class: 'el-icon-star-off',
      },
      { name: '学期设置', route: '/termSet', class: 'el-icon-star-off' },
    ],
  },
  mutations: {
    // 添加tabs
    add_tabs (state, data) {
      this.state.options.push(data)
    },
    // 删除tabs
    delete_tabs (state, route) {
      let index = 0
      for (let option of state.options) {
        if (option.route === route) {
          break
        }
        index++
      }
      this.state.options.splice(index, 1)
    },
    // 设置当前激活的tab
    set_active_index (state, index) {
      this.state.activeIndex = index
    }
  }
})
