import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../components/main-page.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: () => import(/* webpackChunkName: "history" */ '../components/app-history.vue')
    },
    {
      path: '/house/:slug',
      name: 'house',
      component: () => import(/* webpackChunkName: "house" */ '../components/app-house.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import(/* webpackChunkName: "students" */ '../components/text-page.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import(/* webpackChunkName: "staff" */ '../components/text-page.vue')
    },
    {
      path: '/training-program',
      name: 'training-program',
      component: () =>
        import(/* webpackChunkName: "training-program" */ '../components/program-page.vue')
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.name === 'Home') {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
