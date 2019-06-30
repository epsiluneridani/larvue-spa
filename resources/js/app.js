/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'
import { store } from "./store";
import router from '@/js/routes.js'
import App from '@/js/views/App'

// const passportClients = () => import('./components/passport/Clients.vue');
// const passportAuthorizedClients = () => import('./components/passport/AuthorizedClients.vue');
// const passportPersonalAccessToken = () => import('./components/passport/PersonalAccessTokens.vue');

Vue.use(Vuetify)

// Vue.component( 'passport-clients', passportClients );
// Vue.component( 'passport-authorized-clients', passportAuthorizedClients );
// Vue.component( 'passport-personal-access-token', passportPersonalAccessToken );

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
	store,
    render: h => h(App)
});
