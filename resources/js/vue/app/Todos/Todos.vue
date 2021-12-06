<template>
    <div class="flex text-bone text-2xl">
        <div class="flex items-center justify-between p-5">
            <h3 class="text-bone">
                Your Todo's
            </h3>
            <button class="px-2 py-1 bg-moss hover:bg-glaucous rounded-md shadow-sm" @click="open = ! open">
                Add Todo
            </button>
        </div>
        <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-7 pt-5">
            <li v-for="(todo, index) in this.$store.state.todos" :key="index" class="col-span-1 bg-bone rounded-lg shadow divide-y divide-gray-200">
                <todos-list
                    :todo="todo"
                />
                <!-- v-on:todochanged="$emit('reloadlist')" -->
            </li>
        </ul>
        <TodoSlideOver :open="open" v-on:todoSlideOverClosed="toggleSlideOver()" class="relative z-10" />
    </div>
</template>

<script>
import TodoSlideOver from './components/TodoSlideOver.vue';
import TodosList from './components/TodosList.vue'
export default {
    components: {
        TodoSlideOver,
        TodosList,
    },
    data: function() {
        return {
            open: false,
        }
    },
    methods: {
        getTodos() {
            axios.get('api/todos')
            .then(response => {
                this.$store.state.todos = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        toggleSlideOver() {
            this.open = ! this.open;
            console.log(this.open);
        }
    },
    created() {
        this.getTodos();
    }
};
</script>
