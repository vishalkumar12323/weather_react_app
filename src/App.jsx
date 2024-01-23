// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import TopButtons from "./components/TopButtons";
// import Inputs from "./components/Inputs";
// import TimeAndLocation from "./components/TimeAndLocation";
// import TemperatureAndDetails from "./components/TemperatureAndDetails";
// import getFormattedWeatherData from "./services/Services";

// const App = () => {
//   // State variables
//   const [query, setQuery] = useState({ q: "Dehli" });
//   const [units, setUnits] = useState("metric");
//   const [weather, setWeather] = useState(null);

//   // Fetch weather data on initial render and when query or units change
//   useEffect(() => {
//     const fetchWeather = async () => {
//       const message = query.q ? query.q : "current location.";

//       // Display info toast while fetching weather
//       toast.info("Fetching weather for " + message);

//       await getFormattedWeatherData({ ...query, units }).then((data) => {
//         // Fetch weather data and display success toast
//         toast.success(
//           `Successfully fetched weather for ${data.name}, ${data.country}.`
//         );
//         setWeather(data);
//       });
//     };

//     fetchWeather();
//   }, [query, units]);

//   // Determine background gradient based on temperature
//   const formatBackground = () => {
//     if (!weather) return "from-cyan-700 to-blue-700";
//     const threshold = units === "metric" ? 22 : 60;
//     if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

//     return "from-yellow-700 to-orange-700";
//   };
//   return (
//     <>
//       <div
//         className={`mx-auto max-w-screen-md m-2 py-4 px-16 bg-gradient-to-br ${formatBackground()} h-fit text-white shadow-md`}
//       >
//         <TopButtons setQuery={setQuery} />
//         <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
//         {weather && (
//           <>
//             <TimeAndLocation weather={weather} />
//             <TemperatureAndDetails weather={weather} units={units} />
//           </>
//         )}
//         <ToastContainer theme="colored" newestOnTop={true} autoClose={4000} />
//       </div>
//     </>
//   );
// };

import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const App = () => {
  return (
    <>
      <div className="bg-blue-500 w-full h-[100vh] py-2 px-2 lg:max-w-[768px] lg:mx-auto">
        <div className="app-name py-2">
          <h1 className="text-3xl">Cloud Fire</h1>
        </div>
        {/* input and search  */}
        <div className="inputs-bar py-3">
          <div className="input flex justify-between">
            <div className="max-w-[75%] flex gap-1 items-center">
              <input
                type="text"
                placeholder="search city..."
                className="py-2 px-1 w-[100%] rounded-sm outline-none "
              />
              <UilSearch />
              <UilLocationPoint />
            </div>
            <div className="flex gap-2 text-xl">
              <button className="hover:scale-110">&deg;C</button>
              <div className="border-l-2 border-black"></div>
              <button className="hover:scale-110">&deg;F</button>
            </div>
          </div>
        </div>

        {/* date and time  */}
        <div className="mt-3 py-1">
          <div className="flex justify-around items-center text-xl">
            <div className="date">
              <p>Sunday 12 Jan, 2024</p>
            </div>
            <div>
              <p>4:45AM</p>
            </div>
          </div>
        </div>

        {/* weather, weather-icon and weather mood */}
        <div className="mt-3 py-1">
          <div className="flex justify-around text-xl">
            <div className="flex gap-5">
              <div className="flex">
                <UilTemperature />
                <p>45&deg;C</p>
              </div>
              <p>ICON</p>
            </div>
            <div>
              <p>SUNNY</p>
            </div>
          </div>
        </div>

        <div className="card mt-10">
          <div className="">
            <div className="grid grid-cols-2 gap-x-2 gap-y-5 place-items-center lg:grid-cols-4">
              <div className="w-36 h-20 bg-blue-600 shadow-md flex flex-col items-center justify-center">
                <p className="text-xl">Humidity</p>
                <span className="text-xl">78%</span>
              </div>
              <div className="w-36 h-20 bg-blue-600 shadow-md flex flex-col items-center justify-center">
                <p className="text-xl">Wind-Speed</p>
                <span className="text-xl">3.9 kph</span>
              </div>
              <div className="w-36 h-20 bg-blue-600 shadow-md flex flex-col items-center justify-center">
                <p className="text-xl">Wind-Speed</p>
                <span className="text-xl">3.9 kph</span>
              </div>
              <div className="w-36 h-20 bg-blue-600 shadow-md flex flex-col items-center justify-center">
                <p className="text-xl">Wind-Speed</p>
                <span className="text-xl">3.9 kph</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
