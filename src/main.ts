import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.'

import App from './App.vue'
import router from './router'

import './assets/normalize.css'
import './assets/main.css'
import './assets/styles.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

