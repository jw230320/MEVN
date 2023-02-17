/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as from '@tensorflow/tfjs'

const app = create(App)
app.config.globalProperties.tf = tf
app.use(store).use(router).mount('#app')
