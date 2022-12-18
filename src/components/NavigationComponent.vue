<script>
import { RouterLink } from "vue-router";

export default {
    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale;
        }
    }
};
</script>

<template>
    <header class="sticky top-0 bg-sky-900 shadow-lg mb-3 bg-opacity-75 border-1 border-white">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
            <RouterLink :to="{ name: 'home' }">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-cloud-sun text-2xl"></i>
                    <p class="text-2xl">May Weather</p>
                </div>
            </RouterLink>

            <div class="flex gap-3 flex-1 justify-end">
                <p class="text-xl hover:text-sky-700 duration-150 cursor-pointer" @click="setLocale('pt')">PT</p>
                <p class=" text-xl hover:text-sky-700 duration-150 cursor-pointer" @click="setLocale('en')">EN</p>
            </div>
        </nav>
    </header>
</template>
