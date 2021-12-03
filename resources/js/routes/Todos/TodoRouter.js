const Todos = { template: '<div>Todos Here</div>' };

const routes = [
    {path: '/todos', component: Todos},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
