import React from "react";
import CEO from "../../assets/CEO1.png";

import Aos from "aos";
import "aos/dist/aos.css";
export default function CEOcontact() {
  const data = [
    {
      title: "Founder and CEO of Strategic Allies Company",
      fade: "fade-left",
      duration: 1500,
      delay: 200,
    },
    {
      title: "Chair of Kotler Impact Advisory board Iraq",
      fade: "fade-left",
      duration: 1500,
      delay: 400,
    },
    {
      title: "Iraq Creativity Ambassador of WCIW/D",
      fade: "fade-left",
      duration: 1500,
      delay: 600,
    },
    {
      title: "PhD Candidate in Business Administration at EPU",
      fade: "fade-left",
      duration: 1500,
      delay: 800,
    },
    {
      title:
        "MSc in International Business Management at Sheffield Hallam University",
      fade: "fade-left",
      duration: 1500,
      delay: 1000,
    },
    {
      title: "Lecturer at Erbil Technical Management College at EPU",
      fade: "fade-left",
      duration: 1500,
      delay: 1200,
    },
  ];
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10  justify-center items-center p-10 mb-20 max-w-[1200px] mx-auto overflow-hidden">
      <div className="hidden lg:block bg-white rounded-lg">
        <img src={CEO} alt="" className="w-60 lg:w-96 rounded-lg" />
      </div>
      <div className="col-span-2 text-center md:text-start">
        <div className="">
          <p
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="text-lg md:text-xl lg:text-2xl pb-3 mb-4 border-b-4 border-primary w-max mx-auto md:mx-0 font-bold"
          >
            Zanear Jabbar Ssali
          </p>
          {data.map((items, index) => {
            return (
              <p
                key={index}
                className="lg:text-xl mt-2"
                data-aos={items.fade}
                data-aos-duration={items.duration}
                data-aos-delay={items.delay}
              >
                - {items.title}
              </p>
            );
          })}
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="1400"
            className="flex flex-wrap mt-5 gap-2 justify-center lg:justify-start items-center rounded-lg text-sm  lg:text-md"
          >
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
      <div className=" lg:hidden bg-white rounded-lg flex justify-center">
        <img src={CEO} alt="" className="w-full rounded-lg" />
      </div>
    </div>
  );
}
