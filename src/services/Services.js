import { DateTime } from "luxon";
import API from "../../api";
import axios from "axios";

const getWeather = async (type, searchQuery) => {
  const url = new URL(API.BASE + type + "?");
  url.search = new URLSearchParams({ ...searchQuery, appid: API.API_KEY });

  const response = await axios.get(url);
  return response.data;
};

const formateCurrentWeather = (data) => {
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
};

const getFormattedWeather = async (searchQuery) => {
  const formattedCurrentWeather = await getWeather(`weather`, searchQuery).then(
    formateCurrentWeather
  );

  return { ...formattedCurrentWeather };
};
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

const formateToLocalTime = (
  secs,
  zons,
  formate = "ccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zons).toFormat(formate);

export { iconUrlFromCode, formateToLocalTime, getFormattedWeather };
