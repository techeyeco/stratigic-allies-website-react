import React from "react";
import BusinessTrainings from "./DevelopYourBusiness ";
import { Outlet } from "react-router";

import DYB from "../../assets/training/DVB.png";
import BSS from "../../assets/training/BSS.png";
import management from "../../assets/training/management.png";
import peshang from "../../assets/training/peshang.jpg";
import { Link } from "react-router-dom";

export default function TrainingLayout() {
  const types = [
    {
      title: "Develope Your Business",
      img: DYB,
      route: "develop",
    },
    {
      title: "Peshang Business Course",
      img: peshang,
      route: "peshang",
    },
    {
      title: "Management Training Course",
      img: management,
      route: "management",
    },
    {
      title: "Sales and Customer Services (SCS)",
      img: BSS,
      route: "SCS",
    },
    {
      title: "Business Seminar Series",
      img: BSS,
      route: "bss",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto p-10">
      <div>
        {" "}
        <p className="text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto">
          Business Trainings{" "}
        </p>
        <p className="lg:text-xl text-justify lg:text-center ">
          Develop Your Business Training Course is a unique initiative that
          promotes firms, enterprises, and projects while also providing a
          chance for people who want to improve their abilities. This course
          will attempt to accomplish the following objectives based on weeks:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center my-5">
          {types.map((route, index) => {
            return (
              <Link
                to={route.route}
                key={index}
                className="h-40 lg:h-48 overflow-hidden  rounded-xl bg-light flex justify-center items-center"
              >
                <img
                  className="rounded-xl w-48 lg:w-60 object-cover hover:scale-105 duration-200 ease-in-out"
                  src={route.img}
                  alt=""
                />
              </Link>
            );
          })}
        </div>
      </div>

      <Outlet />
    </section>
  );
}
