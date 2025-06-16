import { createApp } from 'vue'
import '@src/assets/tailwind.css'
import App from '@src/App.vue'
import FloatingVue from 'floating-vue'
import router from '@src/router'

createApp(App).use(FloatingVue).use(router).mount('#app')