import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import GalleryView from '../views/GalleryView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/lista', name: 'lista', component: TodoView },
  { path: '/galeria', name: 'galeria', component: GalleryView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
