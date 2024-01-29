import { UilTemperature } from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../services/Services";

const WeatherAndLocation = ({ weather }) => {
  const { temp, icon, details, name, country } = weather;
  return (
    <>
      <div className="mt-2 py-1">
        <div className="flex justify-around sm:justify-center gap-3 sm:gap-5 text-xl sm:text-2xl">
          <div className="flex gap-3">
            <div className="flex">
              <UilTemperature />
              <p>{temp}&deg;C</p>
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
