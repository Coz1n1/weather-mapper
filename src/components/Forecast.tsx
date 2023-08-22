import React, { FC } from "react";
import { cityForecastType } from "../types";
import { WeatherTile } from "./WeatherTile";

interface Props {
  data: cityForecastType | null;
}

export const Forecast: FC<Props> = ({ data }) => {
  const todaysTemp: any = data?.list[0];
  return (
    <div className="flex items-center justify-center flex-col bg-zinc-800 h-4/5 text-white">
      <div className="w-1/2 text-center">
        <span className="text-2xl font-bold">
          {data?.name} -{" "}
          <span className="text-2xl font-bold text-yellow-400">
            {data?.country}
          </span>
        </span>
      </div>
      <div className="w-1/2 text-center">
        <span className="text-xl">
          {Math.round(Math.round(todaysTemp.main.temp) / 10)} <sup>o</sup>C
        </span>
      </div>
      <div className="w-1/2 text-center">
        <span>
          {todaysTemp.weather[0].main}, {todaysTemp.weather[0].description}
        </span>
      </div>
      <div className="flex mt-8 md:w-4/5 lg:w-1/2 w-4/5 overflow-x-scroll">
        {data?.list.slice(0, 8).map((item, i) => (
          <div
            key={i}
            className="inline-block w-[130px] flex-shrink-0 text-center"
          >
            <h1 className="text-center w-full">
              {Math.round(Math.round(item.main.temp) / 10)} <sup>o</sup>C
            </h1>
            <img
              alt=""
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            />
            <h1 className="mb-4">
              {i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
            </h1>
          </div>
        ))}
      </div>
      <div className="md:w-4/5 lg:w-1/2 w-4/5 mt-8 flex flex-wrap justify-between">
        <WeatherTile
          icon="wind"
          title="Wind"
          description={`${todaysTemp.wind.speed} km/h`}
        />
        <WeatherTile
          icon="pressure"
          title="Pressure"
          description={`${todaysTemp.main.pressure} hPa`}
        />
        <WeatherTile
          icon="visibility"
          title="Visibility"
          description={`${todaysTemp.visibility} m`}
        />
        <WeatherTile
          icon="feels"
          title="Feels like"
          description={`${Math.round(
            Math.round(todaysTemp.main.feels_like) / 10
          )}`}
        />
      </div>
    </div>
  );
};
