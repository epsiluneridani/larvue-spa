import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/js/views/Home'
import About from '@/js/views/About'
import Err404 from '@/js/views/Error404'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
    	{ 
        	path: '/panel',
         	redirect: '/panel/home' 
        },
        {
            path: '/panel/home',
            name: 'home',
            component: Home
        },
        {
            path: '/panel/about',
            name: 'about',
            component: About
        },
    	{
        	path: '/panel/*',
        	name: 'err404',
        	component: Err404
    	}
    ]
});

export default router;