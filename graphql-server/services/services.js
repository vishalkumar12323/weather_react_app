import axios from "axios";
class WeatherServices {
  constructor() {}

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
