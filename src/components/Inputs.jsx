import { useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { searchCity } from "../services/Services";
import { toast } from "react-toastify";
import { SearchResult } from "./SearchResult";
const Inputs = ({ units, setQuery, setUnits }) => {
  const [city, setCity] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleOnChange = async (e) => {
    const { value } = e.currentTarget;
    setCity(value);
  };
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
    setCity("");
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      // toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        // toast.success("Location fetched!");
        setQuery({ lat, lon });
      });
    }
  };

  useEffect(() => {
    const getResult = async () => {
      await searchCity(city).then((value) => {
        const regex = new RegExp(/^[a-zA-Z0-9]+$/);
        const isMatch = regex.test(value);
        if (isMatch) {
          const words = regex.exec(value);
          searchResult(words);
        }
      });
    };
    if (city.length == 3 || city.length == 6 || city.length == 9) {
      // getResult();
    }
  }, [city]);
  console.log(searchResult);
  return (
    <>
      <div className="inputs-bar py-3 sm:py-1">
        <div className="input flex justify-between">
          <div className="w-[75%] flex gap-1 sm:gap-4 items-center">
            <input
              onChange={handleOnChange}
              value={city}
              type="text"
              placeholder="search city..."
              className="py-2 px-1 w-full rounded-sm outline-none text-black capitalize"
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
      {city ? <SearchResult searchResult={searchResult} /> : null}
    </>
  );
};
export default Inputs;
