import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PK from "../../assets/PK.png";

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

const infoPK = [
  {
    title:
      "Philip Kotler is an American marketing Author, Consultant, and Professor",
    fade: "fade-left",
    duration: 1000,
    delay: 200,
  },
  {
    title: "He is author of 90 books",
    fade: "fade-left",
    duration: 1100,
    delay: 400,
  },
  {
    title:
      "Professor of International Marketing at the J.L. Kellogg School of Management For over 50 years.",
    fade: "fade-left",
    duration: 1200,
    delay: 600,
  },
  {
    title:
      "He has been a consultant to IBM, General Electric, AT&T, Bank of America, Merck, Motorola, Ford, and others.",
    fade: "fade-left",
    duration: 1300,
    delay: 800,
  },
  {
    title:
      "He has lectured in Italy, Sweden, China, Japan, India, Indonesia, Australia, Mexico, Brazil, Chile, and many other countries.",
    fade: "fade-left",
    duration: 1400,
    delay: 1000,
  },
  {
    title:
      "Kotler’s book Marketing Management is the most widely used textbook in marketing around the world.",
    fade: "fade-left",
    duration: 1500,
    delay: 1200,
  },
  {
    title: "He is known around the world as the “father of modern marketing.”",
    fade: "fade-left",
    duration: 1600,
    delay: 1400,
  },
];
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
  mwm,
  mas,
  bright,
  zom,
  rudaw,
];
export default function ModernMarketing() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="text-center py-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto mb-10 p-10">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Prof. Philip Kotler
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 mt-20">
          <div
            data-aos={"fade-right"}
            data-aos-duration={1500}
            className="w-80 lg:w-96 bg-gradient-to-b from-primary border-4 border-white rounded-b-full mx-auto"
          >
            <img src={PK} alt="" className="mt-[-50px] rounded-full " />
          </div>
          <ul className="lg:col-span-2 text-justify mx-8">
            {infoPK.map((items, index) => {
              return (
                <li
                  key={index}
                  className="lg:text-xl mt-4 list-decimal "
                  data-aos={items.fade}
                  data-aos-duration={items.duration}
                  // data-aos-delay={items.delay}
                >
                  {items.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Essentials of Modern Marketing
        </p>
        <p
          className="text-xl lg:text-2xl text-center m-5"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          Essentials of Modern Marketing book (EOMM) – Iraq edition
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center my-5">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            className="bg-primary text-lg md:text-xl lg:text-2xl p-16 lg:p-20 text-justify"
          >
            <p>
              EOMM is one of the projects that Kotler Impact and Strategic
              Allies are collaborating on. It is the first marketing book in the
              world that focuses on market-specific success stories from a
              variety of nations all over the globe. It is identified as the
              Marketing Management book for the 21st century and beyond. It’s
              the world’s first marketing book around market-specific success
              stories.
            </p>
            <p></p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            className="text-lg md:text-xl lg:text-2xl p-16 lg:p-20 text-justify"
          >
            For the first time, the Iraqi edition of 'Essentials of Modern
            Marketing' will be published in 2024. Now, there is an opportunity
            for leading and fruitful corporations and businesses in Iraq and the
            Kurdistan region to join and share their success stories in this
            outstanding work via Strategic Allies Company as an exclusive
            partner of Kotler Impact in Iraq.
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-10 p-10">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Success Stories{" "}
        </p>
        <p
          className="text-xl lg:text-2xl text-center m-5"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          from successful and leading brands and corporations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 ">
          {comp.map((item, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                key={index}
                className="w-80 h-40 bg-white overflow-hidden mx-auto"
              >
                <img
                  src={item}
                  alt=""
                  className="w-full h-full p-5 object-contain saturate-0 hover:saturate-100 duration-300 ease-in-out hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center mb-10 p-10">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE46ssWvix-2bDxazIViCj7RsPBygzoHj6eKXUxGy1KsPqTg/viewform?vc=0&c=0&w=1&flr=0&pli=1"
          className="p-5 px-10 border-2 border-primary text-xl rounded-lg text-center hover:bg-primary hover:shadow-2xl hover:shadow-primary/50 duration-300 ease-in-out "
        >
          Share Your Success Story
        </a>
      </div>
    </section>
  );
}
