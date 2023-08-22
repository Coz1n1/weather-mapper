import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const blob: any = document.getElementById("blob");

    document.body.onpointermove = (e) => {
      const { clientX, clientY } = e;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 6000, fill: "forwards" }
      );
    };
  }, []);

  const handleClick = () => {
    navigate("/weatherapp");
  };

  return (
    <div className="bg-zinc-800">
      <div
        className="h-1/2 absolute bg-gradient-to-bl from-slate-200 via-orange-100 to-yellow-600 aspect-square rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"
        id="blob"
      ></div>
      <div className="flex items-center justify-center h-screen relative w-screen">
        <div className="flex flex-col items-center justify-center h-full absolute w-full">
          <div className="flex justify-start w-2/5 lg:w-3/5">
            <span className="text-white text-4xl md:text-6xl lg:text-8xl font-bold z-10">
              WeatherMapper.
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-white text-4xl md:text-6xl lg:text-8xl font-bold z-10">
              Check Everything
            </span>
            <button
              className="text-xl md:text-3xl h-10 md:h-20 w-30 lg:w-48 bg-emerald-500 rounded-full animate-bounce z-10"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
          <div className="flex justify-end w-3/5">
            <span className=" text-white text-4xl md:text-6xl lg:text-8xl font-bold z-10">
              With Us
            </span>
          </div>
        </div>
        <div className="h-3/5 bg-white w-4/5 md:w-3/5 lg:w-2/5 rounded-3xl relative">
          <img
            src={require("../../assets/layer1.jpg")}
            alt=""
            className="absolute rounded-3xl object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};
