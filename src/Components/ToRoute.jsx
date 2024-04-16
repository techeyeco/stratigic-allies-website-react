import React from "react";
import { Link } from "react-router-dom";

export default function toRoute() {
  const data = [
    {
      title: "Bussniess Consulting",
      route: "/consulting",
      translate: "translate-y-5",
    },
    {
      title: "Strategic Allies",
      route: "/about",
      translate: "-translate-y-5",
    },
    {
      title: "Bussniess Training",
      route: "/tranining",
      translate: "translate-y-5",
    },
    {
      title: "Strategic Partners",
      route: "/strategicPartners",
      translate: "translate-y-10",
    },
    {
      title: "Gallery",
      route: "/gallery",
      translate: "-translate-y-6",
    },
    {
      title: "Course in the UK",
      route: "/ukCourse",
      translate: "translate-y-10",
    },
    {
      title: "Modern Marketing",
      route: "/essentialsMarketing",
      translate: "-translate-y-5",
      span: "col-span-3",
    },
  ];
  return (
    <section className=" text-center p-10 max-w-[1200px] mx-auto">
      <p className="text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary text-center w-max mx-auto">
        Explore With Us
      </p>
      <p className="lg:text-xl text-justify lg:text-center ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, culpa!
        Expedita assumenda architecto nam molestiae omnis quod vitae neque,
        tempore optio dolore ad laboriosam similique dignissimos asperiores
        blanditiis magni eligendi!
      </p>

      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 p-5 lg:p-20 justify-items-center  text-light">
        {data.map((route, index) => {
          return (
            <Link
              key={index}
              to={route.route}
              className={`border border-primary rounded-2xl text-lg p-5 w-72 md:w-96 lg:w-52 h-20  lg:${route.translate} lg:${route.span} 
                        flex flex-col justify-center items-center hover:bg-primary duration-200 ease-in-out`}
            >
              {route.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
