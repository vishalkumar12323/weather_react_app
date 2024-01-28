import axios from "axios";
class WeatherServices {
  constructor() {}

  static formateCurrentWeather(data) {
    const {
      main: { temp, temp_max, temp_min, humidity, feels_like, pressure },
      name,
      dt,
      weather,
      visibility,
      timezone,
      sys: { country, sunrise, sunset },
      wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];
    return {
      temp,
      temp_max,
      temp_min,
      humidity,
      feels_like,
      pressure,
      visibility,
      dt,
      timezone,
      name,
      country,
      sunrise,
      sunset,
      details,
      icon,
      speed,
    };
  }
  static async fetchWeather(searchParams) {
    const url = `${process.env.BASE}weather?${new URLSearchParams({
      ...searchParams,
      appid: process.env.API_KEY,
    })}`;

    const response = await axios.get(url);
    return response.data;
  }
}

export { WeatherServices };
