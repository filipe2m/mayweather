<script setup>
import { useRoute } from "vue-router";

import { useWeatherStore } from '../stores/WeatherStore';
const weatherStore = useWeatherStore();

const route = useRoute();
const fetchWeatherData = await weatherStore.getWeatherData(route.query.lat, route.query.lng);
const weatherData = weatherStore.getWeather;
</script>

<template>
  <div class="flex flex-col flex-1 items-center" v-if="weatherData">
    <!-- Weather Overview -->
    <div class="flex flex-col items-center text-white py-12">
      <h1 class="text-4xl mb-2">{{ route.params.city }}</h1>
      <p class="text-sm mb-12">
        {{
          new Date(weatherData.currentTime).toLocaleDateString(
            $t('date.format'),
            {
              weekday: "short",
              day: "2-digit",
              month: "long",
            }
          )
        }}
        {{
          new Date(weatherData.currentTime).toLocaleTimeString(
            $t('date.format'),
            {
              timeStyle: "short",
            }
          )
        }}
      </p>
      <p class="text-8xl mb-8">
        {{ Math.round(weatherData.current.temp) }}&deg;C
      </p>
      <p>
        {{ $t('weather.feeling') }} 
        {{ Math.round(weatherData.current.feels_like) }} &deg;C
      </p>
      <img
        class="w-[150px] h-auto"
        :src="
          `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`
        "
        alt=""
      />
    </div>

    <hr class="border-white border-1  w-full" />

    <!-- Weekly Weather -->
    <div class="w-full bg-sky-900 bg-opacity-50 flex items-center justify-center">
    <div class="max-w-screen-md w-full py-12">
      <div class="mx-8 text-white">
        <h2 class="mb-4 text-xl">{{ $t('weather.forecast') }}</h2>
        <div v-for="day in weatherData.daily" :key="day.dt" class="flex items-center">
          <p class="flex-1">
            {{
              new Date(day.dt * 1000).toLocaleDateString(
                $t('date.format'),
                {
                  weekday: "long",
                }
              )
            }}
          </p>
          <img class="w-[50px] h-[50px] object-cover" :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="" />
          <div class="flex gap-2 flex-1 justify-end">
            <p>{{ $t('weather.max') }}: {{ Math.round(day.temp.max) }}&deg;C</p>
            <p>Min: {{ Math.round(day.temp.min) }}&deg;C</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
