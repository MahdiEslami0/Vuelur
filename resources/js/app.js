import Vue from 'vue'
window.Vue = require('vue');
import router from './router/router';
import App from './app.vue';
import VueMeta from 'vue-meta';
import 'bootstrap/dist/js/bootstrap';
Vue.use(VueMeta);
const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
});