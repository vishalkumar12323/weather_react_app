import { WeatherServices } from "../services/services.js";

const queries = {
  Weather: async (_parent, query) => {
    const { location } = query;
    const weatherData = await WeatherServices.fetchWeather({ ...location });
    return weatherData;
  },
};

export const resolvers = { queries };
