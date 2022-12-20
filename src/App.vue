<script setup>
import { RouterView } from 'vue-router';
import NavigationComponent from "./components/NavigationComponent.vue";
</script>

<template>
    <div class="flex flex-col min-h-screen font-Roboto bg-sky-700">
        <NavigationComponent />
        <RouterView />
    </div>
</template>
