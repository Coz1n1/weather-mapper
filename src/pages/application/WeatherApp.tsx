import React, { useState, ChangeEvent, useEffect } from "react";
import { optionType, cityForecastType } from "../../types";
import Axios from "axios";
import { Search } from "../../components/Search";
import { Forecast } from "../../components/Forecast";

export const WeatherApp = () => {
  const [search, setSearch] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const [forecast, setForecast] = useState<cityForecastType | null>(null);

  const getOptions = (value: string) => {
    Axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    ).then((res) => {
      const result = res.data;
      setOptions(result);
    });
  };

  const getForecast = (e: optionType) => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${e.lat}&lon=${e.lon}&appid=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      const cityForecast = {
        ...res.data.city,
        list: res.data.list,
      };
      console.log(cityForecast);
      setForecast(cityForecast);
    });
  };
  const handleSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearch(value);
    if (value === "") return;
    getOptions(value);
  };

  const handleClick = (e: optionType) => {
    console.log(e.name + " " + e.lon);
    setCity(e);
  };

  useEffect(() => {
    if (city) {
      setSearch(city.name);
      setOptions([]);
    }
  }, [city]);

  return (
    <div className="h-screen overflow-x-hidden">
      <Search
        search={search}
        options={options}
        handleChange={handleChange}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
      />
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <div className="bg-zinc-800 h-4/5"></div>
      )}
    </div>
  );
};
