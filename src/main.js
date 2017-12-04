// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 注册全局组件开始
import navBar from './components/common/navBar'
Vue.component('navBar',navBar)

import in_theaters from './components/in_theaters'
Vue.component('inTheaters',in_theaters)
// 注册全局组件结束

Vue.config.productionTip = false

Vue.use(elementUi)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
