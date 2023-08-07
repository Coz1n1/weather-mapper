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
        className="h-1/2 absolute bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% aspect-square rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"
        id="blob"
      ></div>
      <div className="absolute h-96 aspect-square bg-none border-solid border-2 border-emerald-600 top-10 left-20"></div>
      <div className="absolute h-80 aspect-square rounded-full bg-indigo-500 top-24 left-2/3 border-0"></div>
      {/* <div className="h-screen w-screen absolute z-2 backdrop-blur-3xl"></div> */}
      <div className="flex items-center justify-center h-screen relative w-screen">
        <div className="flex flex-col items-center justify-center h-full absolute w-full">
          <div className="flex justify-start w-3/5">
            <span className="text-white text-9xl font-bold z-10">
              WeatherMapper.
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-white text-9xl font-bold z-10">
              Check Everything
            </span>
            <button
              className="text-3xl h-20 w-48 bg-emerald-500 rounded-full animate-bounce"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
          <div className="flex justify-end w-3/5">
            <span className=" text-white text-9xl font-bold z-10">With Us</span>
          </div>
        </div>
        <div className="h-3/5 bg-white w-2/5 rounded-3xl relative">
          <img
            src={require("../../assets/layer1.jpg")}
            alt=""
            className="absolute rounded-3xl h-full"
          />
        </div>
      </div>
    </div>
  );
};
