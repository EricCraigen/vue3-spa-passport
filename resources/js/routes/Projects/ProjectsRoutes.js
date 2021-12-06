import Projects from '../../vue/app/Projects/Projects.vue';
import ProjectsList from '../../vue/app/Projects/components/ProjectsList.vue';

const todosRoutes = {
    path: '/projects',
    name: 'projects',
    component: Projects,
    children: [
        {
            path: '/list',
            name: 'projects-list',
            component: ProjectsList,
        }
    ],
};

export default todosRoutes;
