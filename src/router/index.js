import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginComponent from '../views/login.vue'
// import SecureComponent from '../views/secure.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'secure'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../App.vue')
    },
    {
      path: '/secure',
      name: 'secure',
      component: () => import(/* webpackChunkName: "about" */ '../views/secure.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ '../views/Register-user.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import(/* webpackChunkName: "about" */ '../views/shooppingChart.vue')
    }
  ]
})
