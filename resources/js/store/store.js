import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            sidebarOpen: false,
            todos: [],
        };
    },
    mutations: {
        toggleMenu(state, item) {
            state.sidebarOpen = ! state.sidebarOpen;
            console.log(state.sidebarOpen);
        },
        setTodos(state, responseData) {
            state.todos += responseData;
        },
        storeTodo(state, todo) {
            state.todos.unshift(todo);
        },
        destroyTodo(state, todo) {
            state.todos.splice(todo, 1);
            console.log(todo);
        },
    },
});
