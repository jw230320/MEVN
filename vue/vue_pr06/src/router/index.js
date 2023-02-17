import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ex" */ '../views/AboutView.vue')
  },
  {
    path: '/String',
    name: 'String',
    component: () =>
      import(/* webpackChunkName: "ex" */ '../views/bindString.vue')
  },
  {
    path: '/Html',
    name: 'Html',
    component: () =>
      import(/* webpackChunkName: "ex" */ '../views/bindHtml.vue')
  },
  {
    path: '/Input',
    name: 'Input',
    component: () =>
      import(/* webpackChunkName: "ex" */ '../views/bindInput.vue')
  },
  {
    path: '/Select',
    name: 'Select',
    component: () =>
      import(/* webpackChunkName: "ex" */ '../views/bindSelect.vue')
  },
  {
    path: '/Checkbox',
    name: 'Checkbox',
    component: () =>
      import(/* webpackChunkName: "ex" */ '../views/bindCheckbox.vue')
  },
  {
    path: '/List',
    name: 'List',
    component: () =>
      import(/* webpackChunkName: "ex" */ '../views/bindList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
