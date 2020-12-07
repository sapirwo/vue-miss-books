import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loader from '@/cmps/Loader.vue';
import VueMaterial from 'vue-material'
import '@/assets/styles/global.scss'

Vue.config.productionTip = false
Vue.component('loader', Loader)
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
