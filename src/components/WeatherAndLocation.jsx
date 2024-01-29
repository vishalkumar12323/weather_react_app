import { UilTemperature } from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../services/Services";

const WeatherAndLocation = ({ weather, units }) => {
  const { temp, icon, details, name, country } = weather;
  return (
    <>
      <div className="mt-2">
        <div className="flex justify-around sm:justify-center items-center gap-3 sm:gap-5 text-xl sm:text-2xl">
          <div className="flex gap-3">
            <div className="flex items-center">
              <UilTemperature />
              <p>
                {Math.round(temp)}&deg;{units === "metric" ? "C" : "F"}
              </p>
            </div>
            <img src={iconUrlFromCode(icon)} alt={details + "weather icon"} />
          </div>
          <div>
            <p>{details}</p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-2">
          <p className="text-2xl">
            {name}, {country}
          </p>
        </div>
      </div>
    </>
  );
};

export { WeatherAndLocation };
