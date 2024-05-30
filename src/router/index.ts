import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact/Contact.vue')
    },
  ]
})

export default router
