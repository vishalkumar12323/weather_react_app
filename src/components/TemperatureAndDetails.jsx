// import { formateToLocalTime } from "../services/Services";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
// import { iconUrlFromCode } from "../services/Services";

const TemperatureAndDetails = () => {
  return (
    <>
      <div className="card mt-7 sm:1">
        <div className="grid grid-cols-2  gap-y-5 place-items-center sm:grid-cols-3">
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-arrow-up"></i>
              <p className="text-xl">High</p>
            </div>
            <span className="text-xl">45&deg;C</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-arrow-down"></i>
              <p className="text-xl">Low</p>
            </div>
            <span className="text-xl">41&deg;C</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilTemperature />
              <p className="text-xl">Feels-Like</p>
            </div>
            <span className="text-xl">40&deg;C</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilWind />
              <p className="text-xl">Speed</p>
            </div>
            <span className="text-xl">3.9 kph</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <p className="text-xl">Pressure</p>
            <span className="text-xl">500</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <p className="text-xl">Visibility</p>
            <span className="text-xl">5000 mi</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilTear />
              <p className="text-xl">Humidity</p>
            </div>
            <span className="text-xl">18&deg;</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <p className="text-xl">Rain</p>
            <span className="text-xl">15%</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilSun />
              <p className="text-xl">Sun Rise</p>
            </div>
            <span className="text-xl">6:30AM</span>
          </div>
          <div className="w-[10rem] sm:w-48 h-20 sm:h-[4.5rem] bg-blue-600 shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <UilSunset />
              <p className="text-xl">Sun Set</p>
            </div>
            <span className="text-xl">6:45PM</span>
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
