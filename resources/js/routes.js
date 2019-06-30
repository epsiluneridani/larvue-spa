import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Guards from '@/js/guards';

const Home = () => import('@/js/views/Home');
const About = () => import('@/js/views/About');
const Err404 = () => import('@/js/views/Error404');
const Login = () => import('@/js/views/auth/Login');

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
            component: About,
        	beforeEnter: Guards
        },
    	{
        	path: '/panel/login',
        	name: 'login',
        	component: Login
    	},
    	{
        	path: '/panel/*',
        	name: 'err404',
        	component: Err404
    	}
    ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;