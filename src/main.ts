import '@/assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppLayout from '@/components/Layouts/AppLayout.vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
    .use(router)
    .component('AppLayout', AppLayout)
    .mount('#app')
