export type optionType = {
  name: string;
  lon: number;
  lat: number;
};

export type cityForecastType = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  list: [
    {
      clouds: {
        all: number;
      };
      dt: number;
      main: {
        feels_like: number;
        pressure: number;
        temp: number;
      };
      visibility: number;
      weather: [
        {
          description: string;
          icon: string;
          main: string;
        }
      ];
      wind: {
        gust: number;
        speed: number;
      };
    }
  ];
};
