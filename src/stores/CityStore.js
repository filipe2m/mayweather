import { ref } from 'vue';
import { defineStore } from 'pinia';
import citiesData from '../data/cities.json';

export const useCityStore = defineStore('CityStore', () => {
  const cities = ref(citiesData);
  
  function getCities() {
    return cities;
  };

  return { getCities }
})
