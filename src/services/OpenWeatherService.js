import axios from "axios";

export const getWeatherFromApi = async (lat, lng) => {
    try {
        const weatherData = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=9666f2afb7124254fd323b58e9b72122&units=metric`
        );

        return weatherData.data;
    } catch (err) {
        console.log(err);
    }
}
