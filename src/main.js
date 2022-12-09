// import { apply } from 'core-js/fn/reflect'
import { createApp } from 'vue'
import App from './App'
import router from '@/router/router'
import components from '@/components'

const app = createApp(App)

// components.forEach(components => {
//     app.component(component.name, component)
// })

app.use(router).mount('#app')
