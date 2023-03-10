import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mongoose from 'mongoose'

const app = createApp(App)
app.config.globalProperties.$mongoose = mongoose
app.use(store).use(router).mount('#app')
