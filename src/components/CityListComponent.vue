<script setup>
import { useRouter } from "vue-router";
import CityCard from "./CityCardComponent.vue";

import { useCityStore } from '../stores/CityStore';

const cityStore = useCityStore();
const cities = cityStore.getCities();

const router = useRouter();
const goToCityView = (city) => {
  router.push({
    name: "cityView",
    params: { country: city.country, city: city.city },
    query: {
      lat: city.lat,
      lng: city.lng,
    },
  });
};
</script>

<template>
  <div v-for="city in cities" :key="city.id">
    <CityCard :city="city" @click="goToCityView(city)" />
  </div>
</template>

