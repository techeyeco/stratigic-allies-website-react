import React from "react";

import mission from "../../assets/mission1.png";
import vision from "../../assets/vision1.png";
import sLogo from "../../assets/logo/Vertical 01.png";
import CEOcontact from "./CEOcontact";

import office2 from "../../assets/office two.jpg";

import handShakke from "../../assets/hanshake.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="text-center flex flex-col overflow-hidden" id="about">
      {/* About */}
      <div className="p-10 max-w-[1200px] mx-auto ">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="overflow-hidden mb-5"
        >
          <img
            className="h-40 w-full object-contain hover:scale-105 duration-300 ease-in-out p-3 pb-5 border-b-4 border-primary"
            src={sLogo}
            alt=""
          />
        </div>{" "}
        <p
          className="lg:text-xl text-justify lg:text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          Strategic Allies is a business development service provider based in
          Erbil, Iraq, with a strategic footing in the worldwide market via
          significant alliances in Canada and the United Kingdom. Through our
          local and international strategic collaborations, we want to become a
          pioneer in supporting corporate development and innovation in Iraq
          while also expanding our knowledge into the worldwide arena.
          <br />
          As a Strategic Allies Company, we are proud to be the exclusive
          partner of
          <a
            href="https://www.kotlerimpact.com/"
            target="_.blank"
            className="border-b-2 border-primary pb-1 hover:border-transparent"
          >
            {" "}
            Kotler Impact in Iraq
          </a>
          .
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 py-10 ">
          <div
            className="md:col-span-2 overflow-hidden "
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              className="h-96 w-full object-cover hover:scale-105 duration-300 ease-in-out"
              src={office2}
              alt=""
            />
          </div>
          <div
            className="overflow-hidden "
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              className="h-96 w-full object-cover hover:scale-105 duration-300 ease-in-out"
              src={handShakke}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* mission, vision */}
      <div className="bg-gradient-to-r from-primary/80 to-primary ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-24 p-10 ">
          {/* Mission */}
          <div
            className="md:col-span-3 flex flex-col md:flex-row justify-between items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="basis-1/2">
              <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-light w-max ">
                Mission
              </p>
              <p className="lg:text-xl text-justify ">
                Our mission is to empower businesses in Iraq and beyond to
                achieve sustainable growth and competitive advantage through
                innovative strategies, market insights, and continuous support
                by offering business consultancy programs, professional
                development training courses, and networking opportunities.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                className="h-48 w-full object-contain mt-5"
                src={mission}
                alt=""
              />
            </div>
          </div>
          {/* Vision */}
          <div
            className="md:col-span-3 flex flex-col-reverse md:flex-row justify-between items-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="overflow-hidden h-full w-max">
              <img
                className="h-60 w-full object-contain mt-5"
                src={vision}
                alt=""
              />
            </div>{" "}
            <div className="basis-1/2">
              <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-light w-max ">
                Vision
              </p>
              <p className="lg:text-xl text-justify ">
                Driving business success in Iraq and beyond, through strategic
                global partnerships, sustainability, and competitive advantages.
              </p>
            </div>
          </div>
        </div>
        {/* Commitment Excellence */}
        <div className="p-10 max-w-[1200px] mx-auto ">
          <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-light w-max mx-auto">
            Commitment Excellence
          </p>
          <p className="lg:text-xl text-center">
            To ensure our clients' success, we are committed to providing the
            highest level of service, guided by our fundamental principles of
            honesty, creativity, and excellence.
          </p>
        </div>
      </div>
      <CEOcontact />
    </section>
  );
}
