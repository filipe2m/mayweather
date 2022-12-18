<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=9666f2afb7124254fd323b58e9b72122&units=metric`
    );

    // cal current date & time
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const utc = weatherData.data.current.dt * 1000 + localOffset;
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;

    // cal hourly weather offset
    weatherData.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime =
        utc + 1000 * weatherData.data.timezone_offset;
    });

    return weatherData.data;
  } catch (err) {
    console.log(err);
  }
};
const weatherData = await getWeatherData();
</script>

<template>
  <div class="flex flex-col flex-1 items-center">
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
    <div class="w-screen bg-sky-900 bg-opacity-50 flex items-center justify-center">
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
