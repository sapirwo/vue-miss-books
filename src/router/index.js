import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookApp from '../views/BookApp.vue'
import BookDetails from '../views/BookDetails'
import BookEdit from '../views/BookEdit'


Vue.use(VueRouter)

const routes = [{
    path: '/book/edit/:id',
    name: 'BookEdit',
    component: BookEdit
  },
  {
    path: '/book/:id',
    name: 'BookDetails',
    component: BookDetails
  },
  {
    path: '/book',
    name: 'BookApp',
    component: BookApp
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
