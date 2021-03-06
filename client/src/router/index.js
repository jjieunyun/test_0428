import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'memolist',
    component: function () {
      return import( '../views/MemoListView.vue')
    }
  },
  {
    path: '/list/:id',
    name: 'pageview',
    component: function () {
      return import( '../views/PageView.vue')
    }
  },
  {
    path: '/write',
    name: 'writeview',
    component: function () {
      return import( '../views/WriteView.vue')
    }
  },
  {
    path: '/search',
    name: 'Searchview',
    component: function () {
      return import( '../views/SearchView.vue')
    }
  },
  {
    path: '/update/:id',
    name: 'updateview',
    component: function () {
      return import( '../views/UpdateView.vue')
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
