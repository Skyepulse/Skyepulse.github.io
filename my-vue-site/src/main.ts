import { createApp } from 'vue'
import '@src/assets/tailwind.css'
import RootApp from '@src/RootApp.vue'
import FloatingVue from 'floating-vue'
import router from '@src/router'

createApp(RootApp).use(FloatingVue).use(router).mount('#app')