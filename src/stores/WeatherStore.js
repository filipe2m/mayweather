import { defineStore } from 'pinia';
import { getWeatherFromApi } from '../services/OpenWeatherService';

export const useWeatherStore = defineStore('WeatherStore', {
    state: () => ({
        weather: null,
        currLat: null,
        currLng: null
    }),
    actions: {
        async getWeatherData(lat, lng) {
            if(lat === this.currLat && lng === this.currLng)
                return;
            this.weather = await getWeatherFromApi(lat, lng);
            this.currLat = lat;
            this.currLng = lng;
        },
    },
    getters: {
        getWeather(state) {
            return state.weather
        }
    }
})