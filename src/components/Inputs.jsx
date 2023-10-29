import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

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
      <div className="flex flex-row justify-center mt-3 my-3">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            className="py-1 px-1 outline-none text-black w-full shadow-md capitalize"
            placeholder="search..."
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
          />
          <UilSearch
            className="fa-solid fa-magnifying-glass hover:scale-125 transition hover:cursor-pointer text-[18px]"
            onClick={handleSearchClick}
          />
          <UilLocationPoint
            className="fa-solid fa-magnifying-glass hover:scale-125 transition hover:cursor-pointer text-[18px]"
            onClick={handleLocationClick}
          />
        </div>
        <div className="flex w-1/4 justify-end items-center">
          <button
            name="metric"
            onClick={handleUnitsChange}
            className="text-[1.2rem] font-bold hover:scale-125 transition"
          >
            &deg;C
          </button>
          <p className="mx-1">|</p>
          <button
            name="imperial"
            onClick={handleUnitsChange}
            className="text-[1.2rem] font-bold hover:scale-125 transition"
          >
            &deg;F
          </button>
        </div>
      </div>
    </>
  );
};

export default Inputs;
