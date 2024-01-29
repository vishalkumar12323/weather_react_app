import { DateTime } from "luxon";
import API from "../../api";

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

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

const formateToLocalTime = (
  secs,
  zons,
  formate = "ccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zons).toFormat(formate);

export { iconUrlFromCode, formateToLocalTime };
