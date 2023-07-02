import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dong from '../views/Dong.vue'
import Daedeok from '../views/Daedeok.vue'
import Joong from '../views/Joong.vue'
import Seo from '../views/Seo.vue'
import Yuseong from '../views/Yuseong.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/daedeok',
    component: Daedeok
  },
  {
    path: '/dong',
    component: Dong
  },
  {
    path: '/joong',
    component: Joong
  },
  {
    path: '/seo',
    component: Seo
  },
  {
    path: '/yuseong',
    component: Yuseong
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
