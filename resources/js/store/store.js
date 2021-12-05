import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            sidebarOpen: false,
        };
    },
    mutations: {
        toggleMenu(state, item) {
            state.sidebarOpen = ! state.sidebarOpen;
            console.log(state.sidebarOpen);
        }
    },
});
