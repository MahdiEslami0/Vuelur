import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: [

        /* Routes */

        {
            path: '/',
            component: require('../pages/index.vue').default,
            name: 'index'
        },



        /* 404 Page */

        {
            path: '/404',
            component: require('../error/notfound').default,
            name: 'not-found'
        },

        {
            path: '*',
            component: require('../error/notfound').default,
            redirect: '/404'
        },

    ]
});