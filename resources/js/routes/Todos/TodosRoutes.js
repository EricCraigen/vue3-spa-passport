const Todos = { template: '<div>Todos Here</div>' };
const TodosList = { template: '<div>Todos List Here</div>' };

const todosRoutes = {
    path: '/todos',
    name: 'todos',
    component: Todos,
    children: [
        {
            path: '/edit',
            name: 'todos-list',
            component: TodosList,
        }
    ],
};

export default todosRoutes;
