<script setup>
defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="flex mt-4 py-6 px-3 bg-sky-900 bg-opacity-75 rounded-lg shadow-md cursor-pointer">
    <div class="flex flex-col flex-1">
      <h2 class="text-3xl">{{ city.city }}</h2>
      <h3>{{ city.country }}</h3>
    </div>

    <div class="flex flex-col gap-6">
      <p class="text-xs self-end">
        Lat:
          {{ city.lat }}
      </p>
      <p class="text-xs self-end">
        Lng:
          {{ city.lng }}
      </p>
    </div>
  </div>
</template>

