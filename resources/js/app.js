require('./bootstrap');

// import the App Router
import router from './routes/Router';

import { createApp } from 'vue';

import AppNavigation from './vue/layouts/AppNavigation.vue';
import AppSearchUserMenu from './vue/layouts/AppSearchUserMenu.vue';

// import PuesdoStore from './store/PuesdoStore.js';

import { ref } from 'vue';
import {
  HomeIcon,
  UsersIcon,
} from '@heroicons/vue/outline';

const navigation = [
    { name: 'home', href: '/', icon: HomeIcon, current: true },
    { name: 'todos', href: '/todos', icon: UsersIcon, current: false },
  //   { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  //   { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  //   { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  //   { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
];

const app = createApp({
    components: {
        AppNavigation,
        AppSearchUserMenu,
        // Dialog,
        // DialogOverlay,
        // TransitionChild,
        // TransitionRoot,
        // MenuIcon,
        // XIcon,
    },
    data() {
        return {
            appData: {
                sidebarOpen: ref(false),
            }
        };
    },
    methods: {
        toggleMobileMenu() {
            this.sidebarOpen = ! this.sidebarOpen;
        }
    },
    // setup() {
    //     const sidebarOpen = ref(false);
    //     // console.log('vue-app setup()');
    //     // console.log(router.currentRoute);
    //     // const currentRoute = computed(() => {
    //     //     return useRoute().name
    //     // });
    //     return {
    //         // navigation,
    //         sidebarOpen,
    //         // currentRoute,
    //     };
    // },
    created() {
        // console.log(this.appData.sidebarOpen);
    }
});
app.use(router);
app.mount("#app");

