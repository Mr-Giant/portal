import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel'
import { BootstrapVue } from 'bootstrap-vue'
import BackToTop from 'vue-backtotop'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import './assets/custom.scss'

import { router } from './router'

Vue.use(VueRouter)
Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(BackToTop)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')