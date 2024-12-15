import React from "react";
import ToRoute from "./ToRoute";
import sLogo from "../assets/logo/Vertical 01.png";

export default function Hero() {
  return (
    <section className="text-start max-w-[1200px] mx-auto my-20">
      <div className="p-10 flex flex-col justify-start items-start gap-8 herobg z-10 ">
        <div className="w-max  md:mr-auto md:ml-0 z-10">
          <img
            className="h-24 md:h-28 w-max object-contain hover:scale-105 duration-300 ease-in-out "
            src={sLogo}
            alt=""
          />
        </div>
        <div className="text-7xl font-bold z-10">
          <p>Sustain </p>
          <p>Your </p>
          <p>Success </p>
        </div>
        <p className="z-10"></p>
      </div>
      <ToRoute />
    </section>
  );
}
