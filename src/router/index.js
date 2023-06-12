import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  //1
  {
    path: '/intro',
    name: 'intro',

    component: () => import( '../views/IntroView.vue')
  }, 

  {
    path: '/guia',
    name: 'guia',

    component: () => import( '../views/Guia.View.vue')
  }, 
  
  {
    path: '/uno',
    name: 'uno',

    component: () => import( '../views/CompuUnoView.vue')
  }
  , 
  
  {
    path: '/dos',
    name: 'dos',

    component: () => import( '../views/CompuDosView.vue')
  }, 

  {
    path: '/tres',
    name: 'tres',

    component: () => import( '../views/CompuTresView.vue')
  }, 

  {
    path: '/mi',
    name: 'mi',

    component: () => import( '../views/MiHo.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
