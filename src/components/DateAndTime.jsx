import React from "react";
import { formateToLocalTime } from "../services/Services";
// { weather: { dt, timezone, country, name } }
const DateAndTime = () => {
  return (
    <>
      <div className="mt-1 py-1">
        <div className="flex justify-around sm:justify-center sm:gap-10 items-center text-xl sm:text-2xl">
          <div className="date">
            <p>Sunday 12 Jan, 2024</p>
          </div>
          <div>
            <p>4:45AM</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DateAndTime;
