import React from "react";
import person from "../assets/person.png";
export default function CEOcontact() {
  const data = [
    "Founder and CEO of Strategic Allies Company",
    "Chair of Kotler Impact Advisory board Iraq",
    "Iraq Creativity Ambassador of WCIW/D",
    "PhD Candidate in Business Administration at EPU",
    "MSc in International Business Management at Sheffield Hallam University",
    "Lecturer at Erbil Technical Management College at EPU",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10  justify-center items-center p-10 pb-0 max-w-[1200px] mx-auto ">
      <div className="hidden md:block">
        <img src={person} alt="" className="w-60 lg:w-96 saturate-0" />
      </div>
      <div className="col-span-2 text-center md:text-start">
        <div className="">
          <p className="text-lg md:text-xl lg:text-2xl pb-3 mb-4 border-b-4 border-primary w-max mx-auto md:mx-0 font-bold">
            Zanear Jabbar Ssali
          </p>
          {data.map((items, index) => {
            return (
              <p key={index} className=" lg:text-xl mt-2 ">
                - {items}
              </p>
            );
          })}
          <div className="flex flex-wrap mt-5 gap-2 justify-center lg:justify-start items-center rounded-lg text-sm  lg:text-md">
            <div className="border-2 border-primary p-2 rounded-xl w-max">
              +964 750 4618 463
            </div>
            <div className="border-2 border-primary p-2 rounded-xl w-max">
              zanear.ssali@epu.edu.iq
            </div>
            <div className="border-2 border-primary p-2 rounded-xl w-max">
              zanear.ssali@strategic-allies.com
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden mx-auto">
        <img src={person} alt="" className="w-40 saturate-0" />
      </div>
    </div>
  );
}
