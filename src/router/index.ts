import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: () => import('../views/MenuDesafio.vue'),
    },
    {
      path: '/desafio-um',
      name: 'desafio-um',
      component: () => import('../views/DesafioUm.vue'),
    }
  ]
})

export default router
