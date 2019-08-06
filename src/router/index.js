import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import System from '@/components/system'
import basicinfo from '@/components/staffInfo/basicinfo'
import gzztgl from '@/components/moneymanage/gzztgl'
import ygztsz from '@/components/moneymanage/ygztsz'
import jcxxsz from '@/components/sysmanage/jcxxsz'

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
    },
    {
      path: '/basicinfo',
      name: 'basicinfo',
      component: basicinfo
    },
    {
      path: '/gzztgl',
      name: 'gzztgl',
      component: gzztgl
    },
    {
      path: '/ygztsz',
      name: 'ygztsz',
      component: ygztsz
    },
    {
      path: '/jcxxsz',
      name: 'jcxxsz',
      component: jcxxsz
    }
  ]
})
