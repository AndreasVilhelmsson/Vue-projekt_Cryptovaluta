import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'
import DetailView from './views/DetailView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: HomeView, path: '/' },
    { component: AboutView, path: '/about' },
    { component: DetailView, path: '/currency/:id' }
  ]
})
