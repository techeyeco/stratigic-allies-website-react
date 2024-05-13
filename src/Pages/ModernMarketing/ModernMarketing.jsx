import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PK from "../../assets/PK.png";

import Success from "./Success";
import Board from "./Board";
import Edition from "./Edition";

import book from "../../assets/EOMM Book2.png";
import kotlerLogo from "../../assets/kotlerlogo.png";
import strategicAllies from "../../assets/logo/Horizontal 02.png";

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
      title: "Kotler Impact Board Iraq",
      route: "Board",
    },
  ];

  return (
    <section className="text-center py-10 overflow-hidden">
      <div className="mb-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-bookColor w-max mx-auto "
        >
          Essentails of Modern Marketing
        </p>
        <p
          className="text-xl lg:text-2xl text-center m-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          The World’s first Marketing Book Around Market-specific Success Storie{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-light p-20 overflow-hidden">
            <div
              className="max-w-[1000px] mx-auto "
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <img
                src={book}
                alt=""
                className="w-96 mx-auto hover:scale-110 duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="bg-bookColor ">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="max-w-[1000px] mx-auto text-lg md:text-xl lg:text-3xl xl:text-4xl p-10 lg:p-20 text-justify"
            >
              <p>
                For the first time, the Iraqi edition of 'Essentials of Modern
                Marketing' will be published in 2024. Now, there is an
                opportunity for leading and fruitful corporations and businesses
                in Iraq and the Kurdistan region to join and share their success
                stories in this outstanding work via Strategic Allies Company as
                an exclusive partner of Kotler Impact in Iraq.
              </p>
            </div>
          </div>
        </div>
      </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between my-5">
          <div className="bg-primary">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="max-w-[1000px] mx-auto text-lg md:text-xl lg:text-3xl xl:text-3xl p-16 lg:p-20 text-justify"
            >
              <p>
                EOMM is one of the projects that Kotler Impact and Strategic
                Allies are collaborating on. It is the first marketing book in
                the world that focuses on market-specific success stories from a
                variety of nations all over the globe. It is identified as the
                Marketing Management book for the 21st century and beyond. It’s
                the world’s first marketing book around market-specific success
                stories.
              </p>
            </div>
          </div>
          <div className="bg-light">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="flex flex-col xl:flex-row items-center justify-center gap-20 max-w-[1000px] mx-auto h-full p-10"
            >
              <img
                src={kotlerLogo}
                alt=""
                className="w-80 mx-auto hover:scale-110 duration-200 ease-in-out"
              />
              <img
                src={strategicAllies}
                alt=""
                className="w-80 mx-auto hover:scale-110 duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mb-10 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-2">
          {routes.map((route, index) => {
            return (
              <button
                key={index}
                onClick={() => setAtiveTap(route.route)}
                className={` md:text-xl lg:text-2xl ${
                  activeTap == route.route
                    ? "bg-primary text-white"
                    : "bg-white text-neutral"
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

      <div className="flex flex-col items-center justify-center mb-10 p-10 max-w-[1200px] mx-auto">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Share Your Success
        </p>
        <p
          className="text-xl lg:text-2xl text-center m-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          Now, there is an opportunity for leading and fruitful corporations and
          businesses in Iraq and the Kurdistan to share their success stories in
          this outstanding work.{" "}
        </p>
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
