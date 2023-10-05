import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)
app.use(Vue3VideoPlayer, {
  lang: 'en'
})

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2);
app.use(VueTheMask)
app.mount('#app')
