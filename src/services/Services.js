import api from "../../api";
import { DateTime } from "luxon";
const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(api.BASE + infoType + "?");
  url.search = new URLSearchParams({ ...searchParams, appid: api.API_KEY });

  const res = await fetch(url);
  return await res.json();
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
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    `weather`,
    searchParams
  ).then(formateCurrentWeather);

  return { ...formattedCurrentWeather };
};
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

const formateToLocalTime = (
  secs,
  zons,
  formate = "ccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zons).toFormat(formate);
export { iconUrlFromCode, formateToLocalTime };
export default getFormattedWeatherData;
