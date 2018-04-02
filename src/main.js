// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'
import Home from '@/Pages/Home'
import Extras from '@/Pages/Extras'
//
Vue.config.productionTip = false
//
Vue.use(VueRouter)
//
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Extras',
    name: 'Extras',
    component: Extras
  },
  {
    path: '*',
    redirect: { name: 'Home' }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
