import React, { FC, ChangeEvent } from "react";
import { optionType } from "../types";

interface Props {
  search: string;
  options: [];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: optionType) => void;
  handleSubmit: () => void;
}

export const Search: FC<Props> = ({
  search,
  options,
  handleChange,
  handleClick,
  handleSubmit,
}) => {
  return (
    <div className="flex items-center justify-center bg-zinc-800 h-1/5 w-screen">
      <div className="flex flex-col h-4/5 w-screen md:max-w-[1000px]">
        <span className="text-3xl text-amber-300 text-center font-bold">
          Welcome,
        </span>
        <span className="text-2xl text-gray-300 text-center">
          search for the city you want and check the weather
        </span>
        <div className="flex items-center justify-center mt-10 md:mt-4">
          <input
            placeholder="Enter city name..."
            value={search}
            className="px-4 py-2 w-9/12 md:w-full border-solid p-2 rounded-l-md border-2"
            onChange={handleChange}
          ></input>
          <button
            className="px-4 py-2 border-2 rounded-r-md text-white hover:text-amber-300 hover:border-amber-300"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        <ul className="">
          {options.map((e: optionType, index: number) => (
            <li key={index}>
              <button
                className="w-2/5 md:w-1/5 bg-white px-4 py-2 hover:bg-amber-300"
                onClick={() => handleClick(e)}
              >
                {e.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
