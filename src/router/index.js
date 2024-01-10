import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import(/* webpackChunkName: "home" */ '../components/app-mainPage.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: import(/* webpackChunkName: "history" */ '../components/app-history.vue')
    },
    {
      path: '/house/:slug',
      name: 'house',
      component: import(/* webpackChunkName: "house" */ '../components/app-house.vue')
    }
  ]
})

export default router
