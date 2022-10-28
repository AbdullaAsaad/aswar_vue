import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/expired',
    name: 'expired',
    component: () => import('@/views/ExpiredProduct.vue')
  },
  {
    path: '/create',
    name: 'CreateProduct',
    component:() => import('@/views/CreateProduct.vue')
  },
  {
    path: '/edit/:id',
    name: 'EditProduct',
    component: () => import('@/views/EditProduct.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/auth/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/auth/Signup.vue')
  },

  
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
