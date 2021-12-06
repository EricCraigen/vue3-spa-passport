<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="this.$emit('todoSlideOverClosed')">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col py-6 bg-jet shadow-xl overflow-y-auto border-l border-glaucous">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-bold text-bone">
                      Create New Todo
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button type="button" class="bg-raisin rounded-md text-bone hover:text-glaucous focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="this.$emit('todoSlideOverClosed')">
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="absolute inset-0 px-4 sm:px-6 text-bone">
                        <div class="flex flex-col w-full justify-center items-center gap-5">
                            <input class="bg-jet bg-opacity-50 w-full rounded-md shadow-md text-bone" type="text" v-model="todo.name" placeholder="Learn Vue Routing" />
                            <input class="bg-jet bg-opacity-50 w-full rounded-md shadow-md text-bone" type="text" v-model="todo.group" placeholder="Vue.js" />
                        </div>
                        <div class="flex items-center justify-between">
                                <button @click.stop="this.$emit('todoSlideOverClosed')" class="inline-flex items-center justify-center px-2 py-1 bg-rose text-lg font-semibold rounded-md shadow-md border border-raisin hover:bg-red-600">
                            Close
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-bone ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <button @click.stop="addTodo()" class="inline-flex items-center justify-center px-2 py-1 bg-moss text-lg font-semibold rounded-md shadow-md border border-raisin hover:bg-glaucous">
                            Submit
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-bone ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        </div>
                  </div>
                  <!-- /End replace -->
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
// import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'

export default {
    props: {
        open: Boolean,
    },
    data() {
        return {
            todo: {
                    name: '',
                    group: '',
            }
        };
    },
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        XIcon,
    },
    methods: {
        addTodo() {
            if (this.todo.name == '') {
                return;
            }

            axios.post('api/todo/store', {
                todo: this.todo
            })
            .then(response => {
                if (response.status == 201) {
                    this.todo.name = '';
                    this.todo.group = '';
                    this.$store.commit('storeTodo', response.data);
                }
            })
            .catch( error => {
                console.log(error);
            });
            this.$emit('todoSlideOverClosed');
            // this.$emit('todoChanged', this.todo);
        }
    },

//   setup() {
//     const open = ref(false)

//     return {
//       open,
//     }
//   },
}
</script>
