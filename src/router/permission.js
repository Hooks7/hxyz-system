import router from './index'

// 导航守卫
router.beforeEach(function (to, form, next) {
  if (to.path.endsWith('/home')) {
    next('/home/main')
  } else {
    next()
  }
})
router.afterEach(() => {

})
export default router
