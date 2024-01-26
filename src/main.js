import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import VueSmoothScroll from 'vue3-smooth-scroll'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
// app.use(VueSmoothScroll, {
//   duration: 1000,
//   updateHistory: true,
//   delay: 500,
//   offset: -50
// })

app.mount('#app')
