import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/products/:id/:name/',
    name: 'Productdetails',
    props: true,
    component: () => import('../components/Productdetails.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/proveedores',
    name: 'Proveedores',
    component: () => import('../views/Proveedores.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
