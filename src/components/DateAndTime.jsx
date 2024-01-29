import React from "react";
import { formateToLocalTime } from "../services/Services";
const DateAndTime = ({ weather }) => {
  const { dt, timezone } = weather;
  return (
    <>
      <div className="mt-1 py-1">
        <div className="flex justify-center items-center text-xl sm:text-2xl">
          <div className="date">
            <p>{formateToLocalTime(dt, timezone)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DateAndTime;
