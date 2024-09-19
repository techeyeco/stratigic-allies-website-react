import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import google from "../../assets/companies/google.png";
import lays from "../../assets/companies/lays.png";
import forbes from "../../assets/companies/forbes.png";
import lotto from "../../assets/companies/lotto.png";
import bnal from "../../assets/companies/bnal.png";
import kozminski from "../../assets/companies/kozminski.jpg";
import lambo from "../../assets/companies/lambo.png";
import enterpreneur from "../../assets/companies/enterpreneur.png";
import knauf from "../../assets/companies/knauf.png";
import wwf from "../../assets/companies/wwf.png";
import meta from "../../assets/companies/meta.png";
import cocacola from "../../assets/companies/cocacola.png";
import danone from "../../assets/companies/danone.png";
import shein from "../../assets/companies/shein.png";
import mwm from "../../assets/companies/mwm.png";
import mas from "../../assets/companies/mas.jpg";
import bright from "../../assets/companies/bright.png";
import zom from "../../assets/companies/zom.png";
import rudaw from "../../assets/companies/rudaw.png";
import rwanga from "../../assets/companies/rwanga.png";
import moonline from "../../assets/companies/moonline.jpg";
import boulevard from "../../assets/companies/BOULEVARD LOGO.png";

const comp = [
  google,
  lays,
  forbes,
  lotto,
  bnal,
  kozminski,
  lambo,
  enterpreneur,
  knauf,
  wwf,
  meta,
  cocacola,
  danone,
  shein,
];
const compIraq = [bright, mwm, zom, rudaw, rwanga, boulevard, moonline];
export default function Success() {
  const [moreComp, setMoreComp] = React.useState(false);
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto mb-10 p-10">
      {" "}
      <div className="mb-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Success Stories
        </p>
        <p
          className="text-xl lg:text-2xl text-center m-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          from successful and leading brands and corporations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 ">
          {comp.map((item, index) => {
            return (
              (index == 0 || index == 1 || index == 2) && (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-80 h-40 bg-white overflow-hidden mx-auto"
                >
                  <img
                    src={item}
                    alt=""
                    className="w-full h-full p-5 object-contain  duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              )
            );
          })}
          {moreComp &&
            comp.map((item, index) => {
              return (
                !(index == 0 || index == 1 || index == 2) && (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-80 h-40 bg-white overflow-hidden mx-auto"
                  >
                    <img
                      src={item}
                      alt=""
                      className="w-full h-full p-5 object-contain  duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                )
              );
            })}
        </div>
        <div className="mt-10 ">
          <button
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            className="flex justify-center items-center gap-2 mx-auto"
            onClick={() => setMoreComp((prevState) => !prevState)}
          >
            <p className="md:text-lg lg:text-xl">
              Show {moreComp ? "Less" : "More"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className={`bi bi-caret-down ${moreComp && "rotate-180"}`}
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mb-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Success Stories{" "}
        </p>
        <p
          className="text-xl lg:text-2xl text-center m-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          Leading companies and organizations operating in Iraq have approved
          their success stories for inclusion in the EOMM Iraq Edition.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 ">
          {compIraq.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-80 h-40 bg-white overflow-hidden mx-auto"
              >
                <img
                  src={item}
                  alt=""
                  className="w-full h-full p-5 object-contain  duration-300 ease-in-out hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
