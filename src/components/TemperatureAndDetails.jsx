// import { formateToLocalTime } from "../services/Services";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formateToLocalTime } from "../services/Services";

const TemperatureAndDetails = ({ weather, units }) => {
  const {
    temp_max,
    temp_min,
    pressure,
    humidity,
    feels_like,
    visibility,
    sunrise,
    sunset,
    timezon,
    speed,
  } = weather;
  return (
    <>
      <div className="card mt-7 sm:1">
        <div className="grid grid-cols-2  gap-y-5 place-items-center sm:grid-cols-3">
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-arrow-up"></i>
              <p className="text-xl">High</p>
            </div>
            <span className="text-xl">
              {Math.round(temp_max)}&deg;{units === "metric" ? "C" : "F"}
            </span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-arrow-down"></i>
              <p className="text-xl">Low</p>
            </div>
            <span className="text-xl">
              {Math.round(temp_min)}&deg;{units === "metric" ? "C" : "F"}
            </span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilTemperature />
              <p className="text-xl">Feels-Like</p>
            </div>
            <span className="text-xl">
              {Math.round(feels_like)}&deg;{units === "metric" ? "C" : "F"}
            </span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilWind />
              <p className="text-xl">Wind</p>
            </div>
            <span className="text-xl">{speed} km/h</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <p className="text-xl">Pressure</p>
            <span className="text-xl">{pressure}</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <p className="text-xl">Visibility</p>
            <span className="text-xl">{visibility} mi</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilTear />
              <p className="text-xl">Humidity</p>
            </div>
            <span className="text-xl">{Math.round(humidity)}%</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilSun />
              <p className="text-xl">Sun Rise</p>
            </div>
            <span className="text-xl">
              {formateToLocalTime(sunrise, timezon, "hh:mm a")}
            </span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilSunset />
              <p className="text-xl">Sun Set</p>
            </div>
            <span className="text-xl">
              {formateToLocalTime(sunset, timezon, "hh:mm a")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemperatureAndDetails;

// {
//     weather: {
//       temp,
//       temp_max,
//       temp_min,
//       pressure,
//       humidity,
//       icon,
//       details,
//       feels_like,
//       speed,
//       sunrise,
//       sunset,
//       visibility,
//       timezone,
//     },
//     units,
//   }
