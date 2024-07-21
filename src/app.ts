import { ViteSSG } from 'vite-ssg/single-page'
import './app.css'
import App from './App.vue'
import 'flowbite'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(App)