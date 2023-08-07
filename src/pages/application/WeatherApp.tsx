import React from "react";

export const WeatherApp = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-zinc-800 h-screen w-screen">
        <div className="flex flex-col h-1/2 w-screen md:w-1/2">
          <span className="text-3xl text-amber-300 text-center font-bold">
            Welcome,
          </span>
          <span className="text-2xl text-gray-300 text-center">
            search for the city you want and check the weather
          </span>
          <div className="flex items-center justify-center mt-10 md:mt-4">
            <input
              placeholder="Enter city name..."
              value={""}
              className="px-4 py-2 w-9/12 md:w-full border-solid p-2 rounded-l-md border-2"
            ></input>
            <button className="px-4 py-2 border-2 rounded-r-md text-white hover:text-amber-300 hover:border-amber-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
