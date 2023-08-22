import React from "react";
import Feels from "./icons/Feels";
import Pressure from "./icons/Pressure";
import Visibility from "./icons/Visibility";
import Wind from "./icons/Wind";

type Props = {
  icon: "feels" | "pressure" | "visibility" | "wind";
  title: string;
  description: string;
};

const icons = {
  feels: Feels,
  pressure: Pressure,
  visibility: Visibility,
  wind: Wind,
};

export const WeatherTile = ({
  icon,
  title,
  description,
}: Props): JSX.Element => {
  const Icon = icons[icon];

  return (
    <div className="flex flex-col text-xl w-2/5 items-center justify-center mt-8 bg-slate-500 rounded">
      <div className="flex items-center">
        <Icon />
        <span className="ml-1">{title}</span>
      </div>
      <span className="mt-2">{description}</span>
    </div>
  );
};
