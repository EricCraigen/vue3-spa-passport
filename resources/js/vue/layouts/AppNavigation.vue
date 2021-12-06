<template>

  <div>

        <TransitionRoot as="template" :show="this.$store.state.sidebarOpen">

            <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="this.$store.commit('toggleMenu')">

                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-glaucous bg-opacity-10" />
                </TransitionChild>

                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">

                    <div class="relative flex-1 flex flex-col max-w-xs w-full bg-raisin border-glaucous border-r">

                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">

                            <div class="absolute top-0 right-0 -mr-12 pt-2">
                                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click.stop="this.$store.commit('toggleMenu')">
                                <span class="sr-only">Close sidebar</span>
                                <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>

                        </TransitionChild>

                        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">

                            <div class="flex-shrink-0 flex items-center px-4">
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
                            </div>

                            <nav class="mt-5 flex-1 px-2 bg-raisin space-y-1">
                                <router-link class="" v-for="item in navigation" :key="item.name" :to="{ name: item.name }" v-slot="{isActive}">
                                    <span :class="[isActive ? 'bg-bone text-glaucous' : 'text-bone hover:bg-bone bg-opacity-50 hover:text-glaucous', 'group flex items-center px-2 py-2 text-sm font-bold rounded-md capitalize mb-2']">
                                        <component :is="item.icon" :class="[isActive ? 'text-glaucous' : 'text-bone group-hover:text-glaucous', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                                        {{ item.name }}
                                    </span>
                                </router-link>
                            </nav>

                        </div>

                        <!-- <div class="flex-shrink-0 flex border-t border-glaucous p-4">

                            <a href="#" class="flex-shrink-0 group block">

                                <div class="flex items-center">

                                    <div class="ml-3">

                                        <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                                            Tom Cook
                                        </p>

                                        <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                            View profile
                                        </p>

                                    </div>

                                    <div>
                                        <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </div>

                                </div>

                            </a>

                        </div> -->

                    </div>

                </TransitionChild>

                <div class="flex-shrink-0 w-14">
                </div>

            </Dialog>

        </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex-1 flex flex-col min-h-0 border-r border-glaucous bg-raisin">

            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">

                <div class="flex items-center flex-shrink-0 px-4">
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
                </div>

                <nav class="mt-5 flex-1 px-2 bg-raisin space-y-1">
                    <router-link class="" v-for="item in navigation" :key="item.name" :to="{ name: item.name }" v-slot="{isActive}">
                        <span :class="[isActive ? 'bg-bone text-glaucous' : 'text-bone hover:bg-bone bg-opacity-50 hover:text-glaucous', 'group flex items-center px-2 py-2 text-sm font-bold rounded-md capitalize mb-2']">
                            <component :is="item.icon" :class="[isActive ? 'text-glaucous' : 'text-bone group-hover:text-glaucous', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                            {{ item.name }}
                        </span>
                    </router-link>
                </nav>

            </div>

            <div class="flex-shrink-0 flex border-t border-glaucous p-4">

                <a href="#" class="flex-shrink-0 w-full group block">
                    <div class="flex items-center">
                        <div>
                            <CogIcon class="text-bone hover:text-glaucous h-9 w-9 transition-all duration-1000 transform group-hover:rotate-180 group-hover:text-glaucous" />
                        </div>
                        <div class="ml-3">
                            <p class="text-md font-bold text-bone group-hover:text-glaucous">
                                Account Settings
                            </p>
                        </div>
                    </div>
                </a>

            </div>

        </div>

    </div>

  </div>
</template>

<script>
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue';
import {
//   CalendarIcon,
//   ChartBarIcon,
  FolderIcon,
  HomeIcon,
//   InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
  ClipboardListIcon,
  CogIcon,
} from '@heroicons/vue/outline';

const navigation = [
  { name: 'home', href: '/', icon: HomeIcon },
  { name: 'todos', href: '/todos', icon: UsersIcon },
  { name: 'projects', href: '/projects', icon: FolderIcon },
//   { name: 'Calendar', href: '#', icon: CalendarIcon },
//   { name: 'Documents', href: '#', icon: InboxIcon },
//   { name: 'Reports', href: '#', icon: ChartBarIcon },
];

export default {
    components: {
        Dialog,
        DialogOverlay,
        TransitionChild,
        TransitionRoot,
        MenuIcon,
        XIcon,
        HomeIcon,
        ClipboardListIcon,
        CogIcon,
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu');
        },
    },
    created() {
        // console.log(this.$store.state.sidebarOpen);
    },
    setup() {
        return {
            navigation,
        }
    },
};
</script>
