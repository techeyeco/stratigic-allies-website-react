import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ToRoute() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  const data = [
    {
      title: "Kotler Awards | Iraq",
      route: "https://kotlerawards-iq.com/",
      translate: "translate-y-12 translate-x-20",
      fade: "zoom-out-right",
      duration: 750,
      delay: 750,
    },
    {
      title: "Strategic Allies",
      route: "/about",
      translate: "-translate-y-5",
      fade: "zoom-out-down",
      duration: 750,
    },
    {
      title: "Essentials of Modern Marketing ",
      route: "/modernMarketing",
      translate: "translate-y-12 -translate-x-20",
      fade: "zoom-out-left",
      duration: 750,
      delay: 150,
    },

    {
      title: "Business Development Center",
      route: "/businessDevelopment",
      translate: "translate-y-20 translate-x-20",
      fade: "zoom-out-right",
      duration: 750,
      delay: 600,
    },
    {
      title: "B2B Brand Management",
      route: "/B2B",
      // translate: "translate-y translate-x",
      // span: "col-span-3",
      fade: "zoom-out",
      duration: 1000,
      delay: 900,
    },

    {
      title: "Accounting Solutions",
      route: "/accountingSolutions",
      translate: "translate-y-20 -translate-x-20",
      // span: "col-span-3",
      fade: "zoom-out-left",
      duration: 750,
      delay: 300,
    },

    {
      title: "The CEO Talk",
      route: "/ceotalk",
      // translate: "translate-y-5 -translate-x-5",
      span: "col-span-3",
      fade: "zoom-out-up",
      duration: 750,
      delay: 450,
    },
  ];
  const dataMob = [
    {
      title: "Strategic Allies",
      route: "/about",
      fade: "zoom-out-up",
      duration: 750,
    },
    {
      title: "Essentials of Modern Marketing",
      route: "/modernMarketing",

      fade: "zoom-out-up",
      duration: 750,
    },

    {
      title: "Kotler Awards | Iraq",
      route: "https://kotlerawards-iq.com/",
      fade: "zoom-out-up",
      duration: 750,
    },

    {
      title: "The CEO Talk",
      route: "/ceotalk",
      span: "col-span-3",
      fade: "zoom-out-up",
      duration: 750,
    },
    {
      title: "Accounting Solutions",
      route: "/accountingSolutions",
      duration: 750,
      fade: "zoom-out-up",
    },
    {
      title: "Business Development Center",
      route: "/businessDevelopment",
      duration: 750,
      fade: "zoom-out-up",
    },
    {
      title: "B2B Brand Management",
      route: "/B2b",
      duration: 750,
      fade: "zoom-out-up",
    },
  ];
  return (
    <section className=" text-center m-10 max-w-[1600px] mx-auto">
      <p className="text-2xl lg:text-3xl font-semibold my-5 text-center w-max mx-auto overflow-hidden ">
        Explore With Us
      </p>

      <div
        data-aos-duration="1500"
        className="lg:grid grid-cols-1 lg:grid-cols-3 gap-5 m-5 lg:m-20 justify-items-center text-light hidden "
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
                className={`p-5 ${!route.route && "cursor-auto"}`}
                data-aos={route.fade}
                data-aos-delay={route.delay}
                data-aos-duration={route.duration}
              >
                <div
                  className={`border border-primary rounded-lg text-lg  w-72 md:w-96 lg:w-52 h-20  
                 flex flex-col justify-center items-center ${
                   !route.route
                     ? "bg-gray-500 border-transparent cursor-auto"
                     : "hover:bg-primary duration-300 ease-in-out"
                 }`}
                >
                  {route.title}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div
        data-aos-duration="1500"
        className="grid grid-cols-1 lg:grid-cols-3  m-5 lg:m-20 justify-items-center text-light lg:hidden"
      >
        {dataMob.map((route, index) => {
          return (
            <Link
              key={index}
              id="toroute"
              to={route.route}
              className={` overflow-hidden
              lg:${route.span} lg:${route.translate}`}
            >
              <div
                className={`p-5 ${!route.route && "cursor-auto"}`}
                data-aos={route.fade}
                data-aos-delay={route.delay}
                data-aos-duration={route.duration}
              >
                <div
                  className={`border border-primary rounded-lg text-lg  w-72 md:w-96 lg:w-52 h-20  
                 flex flex-col justify-center items-center ${
                   !route.route
                     ? "bg-gray-500 border-transparent cursor-auto"
                     : "hover:bg-primary duration-300 ease-in-out"
                 }`}
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
