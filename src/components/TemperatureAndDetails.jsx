// import { formateToLocalTime } from "../services/Services";
// import {
//   UilTemperature,
//   UilTear,
//   UilWind,
//   UilSun,
//   UilSunset,
// } from "@iconscout/react-unicons";
// import { iconUrlFromCode } from "../services/Services";

// const TemperatureAndDetails = ({
//   weather: {
//     temp,
//     temp_max,
//     temp_min,
//     pressure,
//     humidity,
//     icon,
//     details,
//     feels_like,
//     speed,
//     sunrise,
//     sunset,
//     visibility,
//     timezone,
//   },
//   units,
// }) => {
//   return (
//     <>
//       <div className="flex justify-between items-start py-2 font-light">
//         <div className=" py-2">
//           <div className="flex justify-center items-center  shadow-xl py-2 px-1 my-2">
//             <img
//               src={iconUrlFromCode(icon)}
//               alt="Weather-icon"
//               className="w-[4rem]"
//             />
//           </div>
//           <div className="flex justify-center items-center shadow-xl py-5 px-16 my-5">
//             <p className="text-3xl">
//               {temp.toFixed()}&deg;{units === "metric" ? "C" : "F"}
//             </p>
//           </div>
//           <div className="flex justify-center items-center shadow-xl my-5 py-5 px-16">
//             <p className="text-[1.4rem]">{details}</p>
//           </div>
//           <div className="flex justify-center items-center shadow-xl py-6 px-16">
//             <i className="fa-solid fa-arrow-up"></i>
//             <p className="ml-1">
//               High:{" "}
//               <span>
//                 {temp_max.toFixed()} &deg;{units === "metric" ? "C" : "F"}
//               </span>
//             </p>
//           </div>
//         </div>
//         <div className=" py-2">
//           <div className="flex justify-center items-center   shadow-xl my-2 py-7 px-8">
//             <UilWind />
//             Wind:
//             <span className="font-medium ml-1">{speed}km/h</span>
//           </div>
//           <div className="flex justify-center items-center   shadow-xl my-5 py-7 px-8">
//             <UilTear />
//             Humidity
//             <span className="font-medium ml-1"> {humidity}%</span>
//           </div>
//           <div className="flex justify-center items-center   shadow-xl py-6 px-8 my-5">
//             <UilTemperature />
//             Real feel:
//             <span className="font-medium ml-1">
//               {" "}
//               {feels_like.toFixed()} &deg;
//             </span>
//           </div>
//           <div className="flex justify-center items-center   shadow-xl py-6 px-8 ">
//             <i className="fa-solid fa-arrow-down"></i>
//             <p className="ml-1">
//               Low:{" "}
//               <span>
//                 {temp_min.toFixed()}&deg;{units === "metric" ? "C" : "F"}
//               </span>
//             </p>
//           </div>
//         </div>
//         <div className=" py-2">
//           <div className="flex justify-center items-center   shadow-xl my-2 py-7 px-8">
//             <UilSun className=" " />
//             <p>
//               Rise:{" "}
//               <span>{formateToLocalTime(sunrise, timezone, "hh:mm a")} </span>
//             </p>
//           </div>
//           <div className="flex justify-center items-center   shadow-xl my-5 py-7 px-8">
//             <UilSunset className=" " />
//             <p>
//               Set:{" "}
//               <span>{formateToLocalTime(sunset, timezone, "hh:mm a")}</span>
//             </p>
//           </div>
//           <div className="flex justify-center items-center   shadow-xl py-6 px-8 my-5">
//             <p>
//               Pressure: <span>{pressure}%</span>
//             </p>
//           </div>
//           <div className="flex justify-center items-center   shadow-xl py-6 px-8 ">
//             <p>
//               Visibility: <span>{visibility}mi</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TemperatureAndDetails;
