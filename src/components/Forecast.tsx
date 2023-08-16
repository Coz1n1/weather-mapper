import React, { FC } from "react";
import { cityForecastType } from "../types";

interface Props {
  data: cityForecastType | null;
}

export const Forecast: FC<Props> = ({ data }) => {
  return <div>{data?.name}</div>;
};
