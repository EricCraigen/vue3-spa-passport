<template>

    <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-raisin shadow">
        <button type="button"
                class="px-4 border-r border-glaucous text-bone focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                @click="this.$store.commit('toggleMenu')">
            <span class="sr-only">
                Open sidebar
            </span>
            <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
            <div class="flex-1 flex">
                <form class="w-full flex md:ml-0" action="#" method="GET">
                    <label for="search-field" class="sr-only">
                        Search
                    </label>
                    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                            <SearchIcon class="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input id="search-field"
                            class="block w-full h-full pl-8 pr-3 py-2 border-transparent bg-raisin text-bone placeholder-bone focus:outline-none focus:placeholder-white focus:ring-0 focus:border-transparent sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search" />
                    </div>
                </form>
            </div>
            <div class="ml-4 flex items-center md:ml-6">
                <button type="button" class="bg-raisin p-1 rounded-full text-bone hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-glaucous">
                    <span class="sr-only">
                        View notifications
                    </span>
                    <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" class="ml-3 relative">
                    <div>
                        <MenuButton class="max-w-xs bg-raisin flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-glaucous">
                            <span class="sr-only">
                                Open user menu
                            </span>
                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </MenuButton>
                    </div>
                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-jet ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                <a :href="item.href" :class="[active ? 'bg-bone' : '', 'block px-4 py-2 text-sm font-bold text-bone hover:text-glaucous']">{{ item.name }}</a>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
    </div>

</template>

<script>
import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue';
import {
    BellIcon,
    MenuAlt2Icon,
    MenuIcon,
    XIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export default {
    components: {
        Dialog,
        DialogOverlay,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        BellIcon,
        MenuAlt2Icon,
        MenuIcon,
        SearchIcon,
        XIcon,
    },
    created() {
        console.log(this.$store.state.sidebarOpen);
    },
    setup() {
        return {
          userNavigation,
        }
    },
}
</script>
