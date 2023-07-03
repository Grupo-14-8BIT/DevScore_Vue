import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projetoformcadastrar from '../views/CadastrarProjetos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/cadastro',
    name: 'cadastro',
    component: ()=>import('../views/CadastroView.vue')
  },
  {
    path: '/cadastro2',
    name: 'cadastro2',
    component: ()=>import('../views/CadastroView2.vue')
  },
  {
    path: '/cadastro3',
    name: 'cadastro3',
    component: ()=>import('../views/CadastroView3.vue')
  },
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
    path: '/aboutme',
    name: 'AboutMe',
    component: () => import('../views/ProfileAboutMeView.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/ProfileProjects.vue')
  },
  {
    path: '/projetoformcadastrar',
    name: 'Projetoformcadastrar',
    component: Projetoformcadastrar,
    children: [
      {
        path: '/porjetoformexcluir',
        name: 'Projetoformexcluir',
        component: () => import('../views/CadastrarProjetos.vue')
      }
    ]
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
