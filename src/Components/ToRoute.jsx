import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import sLogo from "../assets/logo/Vertical 01.png";

export default function ToRoute() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  const data = [
    {
      title: "Bussniess Consulting",
      // route: "/consulting",
      translate: "translate-y-5",
      fade: "zoom-out-right",
      duration: 1500,
      delay: 1500,
    },
    {
      title: "Strategic Allies",
      route: "/about",
      translate: "-translate-y-5",
      fade: "zoom-out-down",
      duration: 1500,
      delay: 300,
    },
    {
      title: "Essential of Modern Marketing",
      route: "/modernMarketing",
      translate: "translate-y-5",

      fade: "zoom-out-left",
      duration: 1500,
      delay: 500,
    },

    {
      title: "Our Partners",
      // route: "/partners",
      translate: "translate-y-10",
      fade: "zoom-out-right",
      duration: 1500,
      delay: 1200,
    },
    {
      title: "Gallery",
      // route: "/gallery",
      translate: "-translate-y-6",
      fade: "zoom-out",
      duration: 1000,
    },
    {
      title: "Course in the UK",
      // route: "/ukCourse",
      translate: "translate-y-10",
      fade: "zoom-out-left",
      duration: 1500,
      delay: 700,
    },
    {
      title: "Bussniess Training",
      // route: "/tranining",
      translate: "-translate-y-5",
      span: "col-span-3",
      fade: "zoom-out-up",
      duration: 1500,
      delay: 900,
    },
  ];
  return (
    <section className=" text-center m-10 max-w-[1200px] mx-auto">
      <div className="w-max mx-auto">
        <img
          className="h-40 w-full object-contain hover:scale-105 duration-300 ease-in-out p-3 pb-5 border-b-4 border-primary"
          src={sLogo}
          alt=""
        />
      </div>
      <p className="text-3xl lg:text-4xl font-semibold my-5 text-center w-max mx-auto overflow-hidden ">
        Explore With Us
      </p>

      <div
        data-aos-duration="1500"
        className="grid  grid-cols-1 lg:grid-cols-3 gap-5 m-5 lg:m-20 justify-items-center text-light"
      >
        {data.map((route, index) => {
          return (
            <Link
              key={index}
              id="toroute"
              to={route.route}
              className={` overflow-hidden
              lg:${route.span} lg:${route.translate}`}
            >
              <div
                className="p-5"
                data-aos={route.fade}
                data-aos-delay={route.delay}
                data-aos-duration={route.duration}
              >
                <div
                  className={`border border-primary rounded-2xl text-lg  w-72 md:w-96 lg:w-52 h-20  
                hover:bg-primary duration-300 ease-in-out flex flex-col justify-center items-center `}
                >
                  {route.title}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
