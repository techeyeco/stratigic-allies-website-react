import React from "react";
import logonav from "../assets/logo/logonav.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const data = [
    {
      title: "Strategic Allies",
      route: "/about",
      translate: "-translate-y-5",
      fade: "zoom-out-down",
      duration: 1500,
      delay: 300,
    },
    // {
    //   title: "Bussniess Consulting",
    //   route: "/consulting",
    //   translate: "translate-y-5",
    //   fade: "zoom-out-right",
    //   duration: 1500,
    //   delay: 1500,
    // },

    // {
    //   title: "Bussniess Training",
    //   route: "/tranining",
    //   translate: "translate-y-5",
    //   fade: "zoom-out-left",
    //   duration: 1500,
    //   delay: 500,
    // },
    {
      title: "Essentials of Modern Marketing",
      route: "/modernMarketing",
      translate: "-translate-y-5",
      span: "col-span-3",
      fade: "zoom-out-up",
      duration: 1500,
      delay: 900,
    },
    {
      title: "Kotler Awards | Iraq",
      route: "https://kotlerawards-iq.com/",
      translate: "translate-y-5",
      fade: "zoom-out-up",
      duration: 1500,
    },
    {
      title: "The CEO Talk",
      route: "/ceotalk",
      translate: "translate-y-10",
      fade: "zoom-out-right",
      duration: 1500,
      delay: 1200,
    },
    {
      title: "Accounting Solutions",
      route: "/accountingSolutions",
      translate: "translate-y-10",
      fade: "zoom-out-right",
      duration: 1500,
      delay: 1200,
    },
    // {
    //   title: "Gallery",
    //   route: "/gallery",
    //   translate: "-translate-y-6",
    //   fade: "zoom-out",
    //   duration: 1000,
    // },
    // {
    //   title: "Course in the UK",
    //   route: "/ukCourse",
    //   translate: "translate-y-10",
    //   fade: "zoom-out-left",
    //   duration: 1500,
    //   delay: 700,
    // },
  ];
  console.log(pathname);
  return (
    (pathname === "/about" ||
      pathname === "/modernMarketing" ||
      pathname === "/accountingSolutions" ||
      pathname === "/ceotalk") && (
      <nav className="navbar bg-base-100 max-w-[1200px] mx-auto ">
        <div className="navbar-start">
          {pathname != "/" && (
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 bg-neutral "
              >
                {data.map((item, index) => {
                  return (
                    <li
                      className={`${
                        pathname === item.route
                          ? "bg-primary text-light"
                          : "hover:bg-primary/50 "
                      } rounded-lg duration-300`}
                      key={index}
                    >
                      <Link to={item.route}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <Link
            to="/"
            className="btn btn-ghost text-xl py-8 flex flex-col items-center"
          >
            <img src={logonav} alt="" className="w-40 md:w-60 " />
          </Link>
          {pathname != "/" && (
            <ul className="menu menu-horizontal px-2 flex-nowrap hidden lg:flex flex-nowarp flex-row lg:items-center gap-5">
              {data.map((item, index) => {
                return (
                  <li
                    className={`${
                      pathname === item.route
                        ? "bg-primary text-light"
                        : "hover:bg-primary/50 "
                    } rounded-lg duration-300`}
                    key={index}
                  >
                    <Link className="" to={item.route}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {/* <div className="navbar-end flex items-center gap-5">
        <button
          className={`${lang === "KU" ? "font-bold" : ""}`}
          onClick={() => langHandler("KU")}
        >
          KU
        </button>
        <button
          className={`${lang === "EN" ? "font-bold" : ""}`}
          onClick={() => langHandler("EN")}
        >
          EN
        </button>
        <a className="btn btn-outline rounded-xl px-9">Login</a>
      </div> */}
      </nav>
    )
  );
}
