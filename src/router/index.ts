import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/LoginView.vue')
  },
  {
    path:'/aboutme',
    name:'AboutMe',
    component:()=>import('../views/ProfileAboutMeView.vue')
  },
  {
    path:'/projects',
    name:'Projects',
    component:()=>import('../views/ProfileProjects.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
