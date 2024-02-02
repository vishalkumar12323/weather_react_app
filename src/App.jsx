import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Inputs from "./components/Inputs";
import { WeatherAndLocation } from "./components/WeatherAndLocation";
import { AppName } from "./components/AppName";
import DateAndTime from "./components/DateAndTime";
import { getFormattedWeather } from "./services/Services";

const App = () => {
  // state variables
  const [query, setQuery] = useState({ q: "Dehli" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // Fetch weather data on initial render and when query or units change
  useEffect(() => {
    const fetchWeather = async () => {
      const popUpMessage = query.q ? query.q : "current location";

      // display pop-up-message
      toast.info(`fetching weather for ${popUpMessage}`);
      await getFormattedWeather({ ...query, units }).then((data) => {
        // Fetch weather data and display success toast
        toast.success(
          `successfully fetched weather for ${data.name}, ${data.country}`
        );
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  // Determine background gradient based on temperature
  const setBackgroundTheme = () => {
    if (!weather)
      return {
        primaryBackground: "from-blue-500 to-blue-500",
        secondaryBackground: "from-cyan-600 to-blue-500",
      };
    const threshold = units === "metric" ? 30 : 70;
    if (weather.temp <= threshold)
      return {
        primaryBackground: "from-blue-500 to-blue-500",
        secondaryBackground: "from-cyan-500 to-blue-600",
      };

    return {
      primaryBackground: "from-orange-600 to-yellow-600",
      secondaryBackground: "from-yellow-700 to-orange-700",
    };
  };
  return (
    <>
      <div
        className={`bg-gradient-to-tr ${
          setBackgroundTheme().primaryBackground
        } w-full h-[100vh]`}
      >
        <div
          className={`bg-gradient-to-br ${
            setBackgroundTheme().secondaryBackground
          } shadow-lg text-white w-full h-full py-2 px-2 md:max-w-[768px] md:mx-auto`}
        >
          <AppName />
          <Inputs units={units} setUnits={setUnits} setQuery={setQuery} />
          {weather && (
            <>
              <DateAndTime weather={weather} />
              <WeatherAndLocation weather={weather} units={units} />
              <TemperatureAndDetails weather={weather} units={units} />
            </>
          )}
        </div>
        <ToastContainer theme="colored" newestOnTop={true} autoClose={3000} />
      </div>
    </>
  );
};
export default App;
