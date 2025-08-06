import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { Home, User } from 'lucide-vue-next'

const app = createApp(App)
app.component('LucideHome', Home)
app.component('LucideUser', User)

createApp(App).use(router).mount('#app')
