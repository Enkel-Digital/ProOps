import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * The route uses lazy loading for the components
 * 
 * route level code-splitting
 * this generates a separate chunk (about.[hash].js) for this route
 * which is lazy-loaded when the route is visited.
*/
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/ipad',
    name: 'ipad',
    component: () => import('@/views/ipad.vue')
  },
  {
    path: '/walkie',
    name: 'walkie',
    component: () => import('@/views/Walkie.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/Team.vue')
  },
  {
    path: '/faulty',
    name: 'faulty',
    component: () => import('@/views/Faulty.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
