import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all.js'

import Routes from "./services/router.js"

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueSession)

Vue.config.productionTip = false;

const Router = new VueRouter({
  routes : Routes,
  mode : "history"
})

new Vue({
  el: '#app',
  render: h => h(App),
  router : Router
})
