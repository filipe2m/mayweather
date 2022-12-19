import { defineStore } from 'pinia';
import { getWeatherFromApi } from '../services/OpenWeatherService';

export const useWeatherStore = defineStore('WeatherStore', {
    state: () => ({
        weather: null,
    }),
    actions: {
        async getWeatherData(lat, lng) {
            this.weather = await getWeatherFromApi(lat, lng);
        },
    },
    getters: {
        getWeather(state) {
            return state.weather
        }
    }
})