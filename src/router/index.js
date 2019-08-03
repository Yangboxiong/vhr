import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import System from '@/components/system'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/system',
      name: 'system',
      component: System
    }
  ]
})
