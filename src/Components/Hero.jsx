import React from "react";

export default function Hero() {
  return (
    <section className="text-start py-20 px-10 max-w-[1200px] mx-auto flex flex-col justify-start items-start gap-8 herobg z-10 ">
      <div className="text-7xl font-bold z-10">
        <p>Reliable </p>
        <p>Cloud </p>
        <p>Computing </p>
        <p>Solutions</p>
      </div>
      <p className="z-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
        <br /> nemo? voluptates inventore optio?
      </p>
      <button className="btn btn-neutral px-16 text-light z-10">
        Get Started
      </button>
    </section>
  );
}
