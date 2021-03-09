import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Main from '@/views/home/main'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  redirect: 'main',
  children: [{
    path: 'main',
    name: '首页',
    component: Main
  }, {
    path: 'sendNotification',
    name: '发送通知',
    component: () => import('../views/sendnotification')
  }, {
    path: 'homeWork',
    name: '收发作业',
    component: () => import('../views/homework')
  }, {
    path: 'data',
    name: '资料管理',
    component: () => import('../views/data')
  }, {
    path: 'course',
    name: '课程管理',
    component: () => import('../views/course')
  }, {
    path: 'teacher',
    name: '老师管理',
    component: () => import('../views/teacher')
  }, {
    path: 'classroom',
    name: '教学场地管理',
    component: () => import('../views/classroom')
  }, {
    path: 'class',
    name: '班级管理',
    component: () => import('../views/class')
  }, {
    path: 'institutions',
    name: '机构信息设置',
    component: () => import('../views/institutions')
  }, {
    path: 'classType',
    name: '班级类型管理',
    component: () => import('../views/classType')
  }, {
    path: 'termSet',
    name: '学期设置',
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
