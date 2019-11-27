import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import iview from 'iview'
import './style/index.less'
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(iview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
