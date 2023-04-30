import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'

import 'uno.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.mount('#app')
