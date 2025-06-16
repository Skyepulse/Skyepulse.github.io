import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import App from '../App.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: App,
    },
    {
        path: '/projects',
        component: App,
    },
    {
        path: '/about',
        component: App,
    },
    {
        path: '/contact',
        component: App,
    }
]

const scrollBehavior: RouterScrollBehavior = (to, _from, _savedPosition) => {
    if (to.path === '/projects') {
        return scrollToId('projects')
    } else if (to.path === '/') {
        return scrollToId('home')
    } else if (to.path === '/about') {
        return scrollToId('about')
    }
    else if (to.path === '/contact') {
        return scrollToId('contact')
    }
    return { top: 0 }
}

function scrollToId(id: string): Promise<ScrollToOptions> {
    return new Promise((resolve) => {
        setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        resolve({ top: el ? el.offsetTop - (window.innerHeight * 0.1) : 0, behavior: 'smooth' })
        }, 50)
    })
}

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
})

export default router
