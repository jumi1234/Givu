import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Card from '../views/Card.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'Card',
    component: Card
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/Sign.vue')
  },
  {
    path: '/Mypage',
    name: 'mypage',
    component: () => import('../views/Mypage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/lectures/layout',
    component: () => import('../views/lectures/layout.vue')
  },
  {
    path: '/note',
    component: () => import('../views/lectures/note.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
