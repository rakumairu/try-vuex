import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../views/Todos.vue'
import Create from '../views/Create.vue'
import Show from '../views/Show.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/show/:id',
    name: 'show',
    component: Show
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
