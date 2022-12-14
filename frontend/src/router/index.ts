import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: ''
            }
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
            meta: {
                title: 'About'
            }
        },
    ],
})

router.beforeEach((to, from, next) => { // nadpis stránky
    if (to.meta.title && to.meta.title != ""){
        document.title = to.meta.title + ' | Weathery';
    } else if (to.meta.title == "") {
        document.title = 'Weathery';
    }
    next();
});


export default router
