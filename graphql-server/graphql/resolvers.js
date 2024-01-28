import { WeatherServices } from "../services/services.js";

const queries = {
  Weather: async (_parent, query) => {
    const { location } = query;
    console.log(location);
    const weatherData = await WeatherServices.fetchWeather({ ...location });
    const formattedWeatherData =
      WeatherServices.formateCurrentWeather(weatherData);
    return formattedWeatherData;
  },
};

export const resolvers = { queries };
