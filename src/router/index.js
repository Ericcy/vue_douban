import Vue from 'vue'
import Router from 'vue-router'
import in_theaters from '@/components/in_theaters'
import comming from '@/components/coming_soon'
import top250 from '@/components/top250'
//  安装组件
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect:{name:'in_theaters'}},
    {
      path: '/in_theaters',
      name: 'in_theaters',
      component: in_theaters
    },
    {
      path: '/coming_soon',
      name: 'coming_soon',
      component: comming
    },
    {
      path: '/top250',
      name: 'top250',
      component: top250
    }
  ]
})
