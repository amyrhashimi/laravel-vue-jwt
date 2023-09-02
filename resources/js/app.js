import './bootstrap';
import {createApp} from "vue/dist/vue.esm-bundler.js";
import {createRouter, createWebHistory} from "vue-router";
import Routes from './routes.js';

const app = createApp({});

const routes = createRouter({
    routes: Routes,
    history: createWebHistory(),
});

app.use(routes);

app.mount('#app');
