import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Main from '@/views/home/main'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/',
  redirect: '/login'
},
{
  path: '/home',
  name: 'home',
  component: Home,
  children: [{
    path: '',
    component: Main
  }, { // 发送通知
    path: 'sendNotification',
    component: () => import('../views/sendnotification')
  }, { // 收发作业
    path: 'homeWork',
    component: () => import('../views/homework')
  }, { // 资料管理
    path: 'data',
    component: () => import('../views/data')
  }, { // 课程管理
    path: 'course',
    component: () => import('../views/course')
  }, { // 老师管理
    path: 'teacher',
    component: () => import('../views/teacher')
  }, { // 教学场地管理
    path: 'classroom',
    component: () => import('../views/classroom')
  }, { // 班级管理
    path: 'class',
    component: () => import('../views/class')
  }, { // 机构信息设置
    path: 'institutions',
    component: () => import('../views/institutions')
  }, { // 班级类型管理
    path: 'classType',
    component: () => import('../views/classType')
  }, { // 学期设置
    path: 'termSet',
    component: () => import('../views/termset')
  }

  ]
}
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
