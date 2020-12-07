import Vue from 'vue'
import Vuex from 'vuex'
import bookModule from './modules/book.module'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(Vuex, VueMaterial)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    bookModule
  }
})
