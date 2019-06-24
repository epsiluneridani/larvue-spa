import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/js/views/Home'
import About from '@/js/views/About'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/panel/home',
            name: 'home',
            component: Home
        },
        {
            path: '/panel/about',
            name: 'about',
            component: About
        }
    ]
});

export default router;