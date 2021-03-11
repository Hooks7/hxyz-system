import router from './index'

// 导航守卫
router.beforeEach(function (to, form, next) {
  if (to.path.endsWith('/')) {
    next('/main')
  } else {
    next()
  }
})
router.afterEach(() => {

})
export default router
