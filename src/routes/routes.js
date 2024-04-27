import { createRouter, createWebHistory } from "vue-router"

const routes = [
    // {
    //     path: '/',
    //     name: 'views.landing',
    //     component: () => import('../views/LandingPage.vue')
    // },
    // {
    //     path: '/login',
    //     name: 'views.login',
    //     component: () => import('../views/auth/login/login.vue')
    // },
    {
        path: '/',
        name: 'views.home',
        component: () => import('../components/chat/hide.vue')
    },
    {
        path: '/hide-chat',
        name: 'views.hide',
        component: () => import('../components/chat/hide.vue')
    },
    {
        path: '/show-chat',
        name: 'views.show',
        component: () => import('../components/chat/show.vue')
    },
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router