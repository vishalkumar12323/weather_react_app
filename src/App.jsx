import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Inputs from "./components/Inputs";
import getFormattedWeatherData from "./services/Services";
import { WeatherAndLocation } from "./components/WeatherAndLocation";
import { AppName } from "./components/AppName";
import DateAndTime from "./components/DateAndTime";

// const Apps = () => {

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

const App = () => {
  // state variables
  const [query, setQuery] = useState({ location: "Jaipur" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // Fetch weather data on initial render and when query or units change
  useEffect(() => {
    const fetchWeather = async () => {};
  }, [query, units]);

  return (
    <>
      <div className="bg-blue-500 w-full h-[100vh]">
        <div className="bg-blue-600 shadow-lg text-white w-full h-full py-2 px-2 md:max-w-[768px] md:mx-auto">
          <AppName />
          <Inputs />
          <DateAndTime />
          <WeatherAndLocation />
          <TemperatureAndDetails />
        </div>
      </div>
    </>
  );
};
export default App;
