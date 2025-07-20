// import { Outlet, useLocation } from "react-router";

// import DYB from "../../assets/training/DVB.png";
// import BSS from "../../assets/training/BSS.png";
// import management from "../../assets/training/management.png";
// import peshang from "../../assets/training/peshang.jpg";
// import { Link } from "react-router-dom";

// export default function TrainingLayout() {
//   const types = [
//     {
//       title: "Develope Your Business",
//       img: DYB,
//       route: "",
//     },
//     {
//       title: "Peshang Business Course",
//       img: peshang,
//       route: "peshang",
//     },
//     {
//       title: "Management Training Course",
//       img: management,
//       route: "management",
//     },
//     {
//       title: "Sales and Customer Services (SCS)",
//       img: BSS,
//       route: "SCS",
//     },
//     {
//       title: "Business Seminar Series",
//       img: BSS,
//       route: "bss",
//     },
//   ];

//   const { pathname } = useLocation();
//   console.log(pathname);
//   return (
//     <section className="overflow-hidden">
//       <div className="max-w-[1200px] mx-auto p-10 my-10">
//         {" "}
//         <p className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto">
//           Business Trainings{" "}
//         </p>
//         <p className="lg:text-xl text-justify lg:text-center ">
//           Develop Your Business Training Course is a unique initiative that
//           promotes firms, enterprises, and projects while also providing a
//           chance for people who want to improve their abilities. This course
//           will attempt to accomplish the following objectives based on weeks:
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center my-5">
//           {types.map((route, index) => {
//             return (
//               <Link
//                 to={route.route}
//                 key={index}
//                 className={`h-40 lg:h-48 overflow-hidden  rounded-xl bg-light flex justify-center items-center ${
//                   pathname == `/tranining${route.route && `/${route.route}`}`
//                     ? "pb-5 border-b-4 border-primary"
//                     : "hover:pb-5 hover:border-b-4 hover:border-primary/50 duration-300 ease-in-out "
//                 }`}
//               >
//                 <img
//                   className="rounded-xl w-48 lg:w-60 object-cover hover:scale-105 duration-300 ease-in-out"
//                   src={route.img}
//                   alt=""
//                 />
//               </Link>
//             );
//           })}
//         </div>
//         <Outlet />
//       </div>

//       {/* <div className="w-screen">
//         <svg
//           id="wave"
//           className="wave1"
//           viewBox="0 0 1440 490"
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
//               <stop stopColor="rgba(42, 50, 62, 1)" offset="0%"></stop>
//               <stop
//                 stopColor="rgba(23.056, 101.41, 218.941, 1)"
//                 offset="100%"
//               ></stop>
//             </linearGradient>
//           </defs>
//           <path
//             className="wave2"
//             fill="url(#sw-gradient-0)"
//             d="M0,245L17.1,277.7C34.3,310,69,376,103,351.2C137.1,327,171,212,206,179.7C240,147,274,196,309,179.7C342.9,163,377,82,411,89.8C445.7,98,480,196,514,269.5C548.6,343,583,392,617,359.3C651.4,327,686,212,720,204.2C754.3,196,789,294,823,285.8C857.1,278,891,163,926,155.2C960,147,994,245,1029,245C1062.9,245,1097,147,1131,98C1165.7,49,1200,49,1234,65.3C1268.6,82,1303,114,1337,130.7C1371.4,147,1406,147,1440,179.7C1474.3,212,1509,278,1543,326.7C1577.1,376,1611,408,1646,400.2C1680,392,1714,343,1749,302.2C1782.9,261,1817,229,1851,204.2C1885.7,180,1920,163,1954,204.2C1988.6,245,2023,343,2057,392C2091.4,441,2126,441,2160,424.7C2194.3,408,2229,376,2263,375.7C2297.1,376,2331,408,2366,367.5C2400,327,2434,212,2451,155.2L2468.6,98L2468.6,490L2451.4,490C2434.3,490,2400,490,2366,490C2331.4,490,2297,490,2263,490C2228.6,490,2194,490,2160,490C2125.7,490,2091,490,2057,490C2022.9,490,1989,490,1954,490C1920,490,1886,490,1851,490C1817.1,490,1783,490,1749,490C1714.3,490,1680,490,1646,490C1611.4,490,1577,490,1543,490C1508.6,490,1474,490,1440,490C1405.7,490,1371,490,1337,490C1302.9,490,1269,490,1234,490C1200,490,1166,490,1131,490C1097.1,490,1063,490,1029,490C994.3,490,960,490,926,490C891.4,490,857,490,823,490C788.6,490,754,490,720,490C685.7,490,651,490,617,490C582.9,490,549,490,514,490C480,490,446,490,411,490C377.1,490,343,490,309,490C274.3,490,240,490,206,490C171.4,490,137,490,103,490C68.6,490,34,490,17,490L0,490Z"
//           ></path>
//           <defs>
//             <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
//               <stop
//                 stopColor="rgba(61.034, 94.177, 155.191, 1)"
//                 offset="0%"
//               ></stop>
//               <stop stopColor="rgba(52, 123, 255, 1)" offset="100%"></stop>
//             </linearGradient>
//           </defs>
//           <path
//             className="wave3"
//             fill="url(#sw-gradient-1)"
//             d="M0,441L17.1,392C34.3,343,69,245,103,196C137.1,147,171,147,206,163.3C240,180,274,212,309,261.3C342.9,310,377,376,411,375.7C445.7,376,480,310,514,310.3C548.6,310,583,376,617,408.3C651.4,441,686,441,720,383.8C754.3,327,789,212,823,204.2C857.1,196,891,294,926,326.7C960,359,994,327,1029,326.7C1062.9,327,1097,359,1131,310.3C1165.7,261,1200,131,1234,98C1268.6,65,1303,131,1337,171.5C1371.4,212,1406,229,1440,269.5C1474.3,310,1509,376,1543,359.3C1577.1,343,1611,245,1646,228.7C1680,212,1714,278,1749,269.5C1782.9,261,1817,180,1851,187.8C1885.7,196,1920,294,1954,277.7C1988.6,261,2023,131,2057,89.8C2091.4,49,2126,98,2160,163.3C2194.3,229,2229,310,2263,318.5C2297.1,327,2331,261,2366,261.3C2400,261,2434,327,2451,359.3L2468.6,392L2468.6,490L2451.4,490C2434.3,490,2400,490,2366,490C2331.4,490,2297,490,2263,490C2228.6,490,2194,490,2160,490C2125.7,490,2091,490,2057,490C2022.9,490,1989,490,1954,490C1920,490,1886,490,1851,490C1817.1,490,1783,490,1749,490C1714.3,490,1680,490,1646,490C1611.4,490,1577,490,1543,490C1508.6,490,1474,490,1440,490C1405.7,490,1371,490,1337,490C1302.9,490,1269,490,1234,490C1200,490,1166,490,1131,490C1097.1,490,1063,490,1029,490C994.3,490,960,490,926,490C891.4,490,857,490,823,490C788.6,490,754,490,720,490C685.7,490,651,490,617,490C582.9,490,549,490,514,490C480,490,446,490,411,490C377.1,490,343,490,309,490C274.3,490,240,490,206,490C171.4,490,137,490,103,490C68.6,490,34,490,17,490L0,490Z"
//           ></path>
//         </svg>
//       </div> */}
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Gallary() {
  return (
    <section className="flex flex-col gap-20 justify-center items-center  h-screen bg-animated">
      <div className="text-xl md:text-2xl lg:text-3xl">Coming soon</div>
      <Link
        to="../"
        className="text-xl md:text-2xl lg:text-3xl underline hover:no-underline"
      >
        Back To Home
      </Link>
      {/* <Outlet /> */}
    </section>
  );
}
