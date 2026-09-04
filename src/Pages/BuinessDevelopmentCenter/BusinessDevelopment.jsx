import React from "react";

import sLogo from "../../assets/logo/Vertical 01.png";
import title from "../../assets/buinessDevelopmentCenter/title.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function BuinessDevelopment() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  const data = [
    {
      title: "Leadership Courses",
      route: "leadershipCourses",
      duration: 1500,
    },
    {
      title: "Management & Planning",
      //   route: "/about",
    },
    {
      title: "Sales and Customer Service",
      //   route: "/modernMarketing",
    },

    {
      title: "Fundamentals of Marketing",
      //   route: "/businessDevelopment",
    },

    {
      title: "Advanced Sales Leadership",
      //   route: "/businessDevelopment",
    },
    {
      title: "Human Resources Management",
      //   route: "/businessDevelopment",
    },
  ];

  return (
    <section
      className="text-center flex flex-col overflow-hidden max-w-[1600px] mx-auto p-5 md:p-10 gap-5 md:gap-10"
      id="about"
    >
      <div className="">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="overflow-hidden mb-5"
        >
          <img
            className="h-52 w-full object-contain hover:scale-105 duration-300 ease-in-out p-1 border-b-4 border-primary"
            src={title}
            alt=""
          />
        </div>{" "}
        <p
          className="lg:text-2xl text-justify lg:text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          The Business Development Center is your hub for growth, innovation,
          and transformation.
        </p>
      </div>
      <div
        data-aos-duration="1500"
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10 justify-items-center text-light"
      >
        {data.map((route, index) => {
          return (
            <Link key={index} to={route.route} className="w-full">
              <div
                className={`${!route.route && "cursor-auto"}`}
                data-aos={"1500"}
                data-aos-duration={"fade-up"}
              >
                <div
                  className={`border border-primary rounded-lg text-lg w-full h-14  
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
