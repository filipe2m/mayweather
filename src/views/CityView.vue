<script setup>
import CityView from "../components/CityViewComponent.vue";
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <CityView />
      </template>
    </Suspense>
  </div>
</template>

