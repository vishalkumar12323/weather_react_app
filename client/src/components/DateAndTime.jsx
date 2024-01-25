import React from "react";
import { formateToLocalTime } from "../services/Services";
const DateAndTime = ({ weather }) => {
  return (
    <>
      <div className="mt-1 py-1">
        <div className="flex justify-center items-center text-xl sm:text-2xl">
          <div className="date">
            <p>Sun 12, Jan | Local Time: 12:00AM</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DateAndTime;
