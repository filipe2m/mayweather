<script setup>
import { RouterView } from 'vue-router';
import NavigationComponent from "./components/NavigationComponent.vue";
</script>

<template>
    <div class="flex flex-col min-h-screen font-Roboto bg-gradient-to-tl from-sky-900 to-sky-600">
        <NavigationComponent />
        <RouterView />
    </div>
</template>
