import Main from '@/pages/Main'
import { createRouter, createWebHistory } from 'vue-router'
import UserPage from '@/pages/UserPage'
import About from '@/pages/About'


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/cart',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;