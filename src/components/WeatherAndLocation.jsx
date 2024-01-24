import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const WeatherAndLocation = () => {
  return (
    <>
      <div className="mt-2 py-1">
        <div className="flex justify-around sm:justify-center gap-3 sm:gap-5 text-xl sm:text-2xl">
          <div className="flex gap-3">
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

        <div className="flex justify-center items-center mt-2">
          <p className="text-2xl">London, GB</p>
        </div>
      </div>
    </>
  );
};

export { WeatherAndLocation };
