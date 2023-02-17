import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ex1',
    name: 'ex1',
    // route level code-splitting
    // this generates a separate chunk (ex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ex" */ '../views/ex1.vue')
  },
  {
    path: '/ex2',
    name: 'ex2',
    // route level code-splitting
    // this generates a separate chunk (ex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ex" */ '../views/ex2.vue')
  },
  {
    path: '/ex3',
    name: 'ex3',
    // route level code-splitting
    // this generates a separate chunk (ex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ex2", webpackPrefetch:true */ '../views/ex3.vue'
      )
  },
  {
    path: '/ex4',
    name: 'ex4',
    // route level code-splitting
    // this generates a separate chunk (ex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ex2" , webpackPrefetch:true */ '../views/ex4.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
