import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Lista',
    component: () => import('../views/List.vue')
  },
  {
    path: '/kedvencek',
    name: 'Kedvencek',
    component: () => import('../views/Favorite.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
