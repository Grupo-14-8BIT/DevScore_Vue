import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projetoformcadastrar from '../views/CadastrarProjetos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/teste',
    name: 'teste',
    component: ()=>import('../views/TesteView.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: ()=>import('../views/CadastroView.vue')
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: ()=>import('../views/cadastrar.vue')
  },
  {
    path: '/cadastro2',
    name: 'Cadastro2',
    component: ()=>import('../views/CadastroView2.vue')
  },
  {
    path: '/cadastro3',
    name: 'cadastro3',
    component: ()=>import('../views/CadastroView3.vue')
  },
  // {
  //   path: '/',
  //   name: 'index',
  //   component: () => import('../views/index.vue')
  // },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/login.vue')
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
