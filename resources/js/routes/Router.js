// This is the app router. You may create routes here
import { createRouter, createWebHistory } from "vue-router";

// import name routers here
import todosRoutes from './Todos/TodosRoutes';

// import components for routes declared in the app router.
import Home from '../vue/app/Home/Home.vue';

const history = createWebHistory();

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    todosRoutes,
]

export default createRouter({
    history,
    routes
});
 