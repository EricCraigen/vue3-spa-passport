import Todos from '../../vue/app/Todos/Todos.vue';
import TodosList from '../../vue/app/Todos/components/TodosList.vue';

const todosRoutes = {
    path: '/todos',
    name: 'todos',
    component: Todos,
    props: true,
    children: [
        {
            path: '/edit',
            name: 'todos-list',
            component: TodosList,
        }
    ],
};

export default todosRoutes;
