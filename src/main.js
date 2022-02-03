import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Chart, registerables } from 'chart.js'
import { registerSW } from 'virtual:pwa-register'

registerSW()

Chart.register(...registerables)

createApp(App).use(store).use(router).mount('#app')
