import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Vue3VideoPlayer, {
    lang: 'en'
  })
app.use(createPinia())
app.use(router)


app.mount('#app')
