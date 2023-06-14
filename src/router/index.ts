import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Profile from '../views/ProfileView.vue'
import ProfileProject from '../views/ProfileProject.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profileProject',
      name: 'ProfileProject',
      component: ProfileProject
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
