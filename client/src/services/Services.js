import { DateTime } from "luxon";

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

const formateToLocalTime = (
  secs,
  zons,
  formate = "ccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zons).toFormat(formate);

export { iconUrlFromCode, formateToLocalTime };
