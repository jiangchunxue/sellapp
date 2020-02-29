import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[{
      path:'/goods',
      name:'goods',
      component: () => import('../views/Goods.vue')
    },
    {
      path:'/evaluate',
      name:'evaluate',
      component: () => import('../views/Evaluate.vue')
    },
    {
      path:'/merchant',
      name:'merchant',
      component: () => import('../views/Merchant.vue')
    },
    {
      path:'/shopcar',
      name:'shopcar',
      component: () => import('../views/Shopcar.vue')
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
