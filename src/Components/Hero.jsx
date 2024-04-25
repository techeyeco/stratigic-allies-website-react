import React from "react";
import ToRoute from "./ToRoute";
export default function Hero() {
  return (
    <section className="text-start max-w-[1200px] mx-auto">
      <div className="p-10 flex flex-col justify-start items-start gap-8 herobg z-10 ">
        <div className="text-7xl font-bold z-10">
          <p>Sustain </p>
          <p>Your </p>
          <p>Success </p>
        </div>
        <p className="z-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
          <br /> nemo? voluptates inventore optio?
        </p>
        <button className="btn btn-neutral px-16 text-light z-10">
          Get Started
        </button>
      </div>
      <ToRoute />
    </section>
  );
}
