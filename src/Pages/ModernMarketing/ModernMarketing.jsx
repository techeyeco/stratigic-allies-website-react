import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PK from "../../assets/PK.png";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

import Success from "./Success";
import Board from "./Board";
import Edition from "./Edition";

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

export default function ModernMarketing() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  const [activeTap, setAtiveTap] = React.useState("");
  const routes = [
    {
      title: "Share Your Success",
      route: "",
    },
    {
      title: "EOMM Editions",
      route: "Edition",
    },
    {
      title: "Kotler Impace Board",
      route: "Board",
    },
  ];

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
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Essentials of Modern Marketing
        </p>
        <p
          className="text-xl lg:text-2xl text-center m-5"
          data-aos="fade-up"
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
        <div className="grid grid-cols-3 justify-center items-center bg-white">
          {routes.map((route, index) => {
            return (
              <button
                key={index}
                onClick={() => setAtiveTap(route.route)}
                className={` md:text-xl lg:text-2xl border-2 ${
                  activeTap == route.route
                    ? "bg-primary border-primary text-white"
                    : "text-neutral"
                }`}
              >
                {route.title}
              </button>
            );
          })}
        </div>
      </div>

      {activeTap == "Board" ? (
        <Board />
      ) : activeTap == "Edition" ? (
        <Edition />
      ) : (
        <Success />
      )}

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
