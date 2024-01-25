import { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import { SearchResult } from "./SearchResult";
const Inputs = ({ units, setUnits, setQuery }) => {
  const [city, setCity] = useState("");

  const handleOnChange = async (e) => {
    const { value } = e.currentTarget;
    setCity(value);
  };
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ location: city });
    setCity("");
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <>
      <div className="inputs-bar py-3 sm:py-1">
        <div className="input flex justify-between">
          <div className="w-[75%] flex gap-1 sm:gap-4 items-center">
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="search city..."
              className="py-2 px-1 w-full rounded-sm outline-none text-black "
            />
            <UilSearch
              className="fa-solid fa-magnifying-glass hover:scale-125 transition hover:cursor-pointer"
              onClick={handleSearchClick}
            />
            <UilLocationPoint
              className="fa-solid fa-magnifying-glass hover:scale-125 transition hover:cursor-pointer"
              onClick={handleLocationClick}
            />
          </div>
          <div className="flex gap-2 sm:gap-3 text-xl sm:text-2xl">
            <button
              name="metric"
              className="hover:scale-125 transition"
              onClick={handleUnitsChange}
            >
              &deg;C
            </button>
            <div className="border-l-2 border-white"></div>
            <button
              name="imperial"
              className="hover:scale-125 transition"
              onClick={handleUnitsChange}
            >
              &deg;F
            </button>
          </div>
        </div>
      </div>
      {city ? <SearchResult /> : null}
    </>
  );
};
export default Inputs;
