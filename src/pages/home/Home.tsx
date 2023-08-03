import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export const Home = () => {
  return (
    <div>
      <Parallax
        pages={2}
        style={{ top: "0", left: "0" }}
        className="block relative z-10"
      >
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="w-screen h-4/5 relative">
            <img
              src={require("../../assets/layer1.png")}
              alt=""
              className="absolute bottom-0"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="flex justify-center items-center w-screen h-4/5">
            <div className="flex flex-col justify-center items-center w-auto">
              <span className="text-3xl font-bold text-blue-700">
                WeatherMapper
              </span>
              <span className="text-lg">lorem ipsum</span>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="w-screen h-4/5 relative">
            <img
              src={require("../../assets/onmountain_layer.png")}
              alt=""
              className="absolute bottom-0"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div className="w-screen h-4/5 relative">
            <img
              src={require("../../assets/layer_mountain.png")}
              alt=""
              className="absolute bottom-0"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="w-screen h-4/5 relative">
            <img
              src={require("../../assets/layer_trees.png")}
              alt=""
              className="absolute bottom-0 right-0"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2}>
          <div className="h-screen text-lg bg-slate-400">
            <div className="w-96 pt-20">
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with deskto
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
