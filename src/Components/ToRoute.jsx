import React from "react";
import { Link } from "react-router-dom";

export default function toRoute() {
  const data = [
    {
      title: "About Us",
      route: "/about",
    },
    {
      title: "Bussniess Consulting",
      route: "/consulting",
    },
    {
      title: "Bussniess Training",
      route: "/tranining",
    },
    {
      title: "Product",
      route: "/products",
    },
    {
      title: "Our Work",
      route: "/ourworks",
    },
  ];
  return (
    <section className="py-20 text-center">
      <p className="text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary text-center w-max mx-auto">
        Explore With Us
      </p>
      <p className="lg:text-xl text-justify lg:text-center ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, culpa!
        Expedita assumenda architecto nam molestiae omnis quod vitae neque,
        tempore optio dolore ad laboriosam similique dignissimos asperiores
        blanditiis magni eligendi!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 p-10  justify-center items-center ">
        {data.map((route, index) => {
          return (
            <Link
              key={index}
              to={route.route}
              className="border border-primary rounded-full text-lg p-5 w-52"
            >
              {route.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
