<template>
    <div class="flex text-bone text-2xl">
        <div class="flex items-center justify-end">
            <button @click="open = ! open">
                Add Todo
            </button>
        </div>
            <TodoSlideOver :open="open" v-on:todoSlideOverClosed="toggleSlideOver()" class="relative z-10" />
            {{ this.$store.state.todos }}
    </div>
</template>

<script>
import TodoSlideOver from './components/TodoSlideOver.vue';
export default {
    components: {
        TodoSlideOver,
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
