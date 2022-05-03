import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Lista',
    component: () => import('../views/AdList.vue')
  },
  {
    path: '/kedvencek',
    name: 'Kedvencek',
    component: () => import('../views/AdFavoriteList.vue')
  },
  {
    path: '/:adId',
    name: 'Részletek',
    component: () => import('../views/AdDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
})

export default router
