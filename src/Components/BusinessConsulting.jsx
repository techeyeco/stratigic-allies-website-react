// import React from "react";
// import { MdOutlineBusinessCenter } from "react-icons/md";
// import { MdOutlineSupportAgent } from "react-icons/md";
// import { GiSkills } from "react-icons/gi";
// import dbc from "../assets/dbc.png";
// import Aos from "aos";
// import "aos/dist/aos.css";

// export default function BusinessConsulting() {
//   const [activeUs, setActiveUs] = React.useState({
//     u1: false,
//     u2: false,
//     u3: false,
//   });

//   const busCon = [
//     {
//       id: "u1",
//       dec: "Strategic Allies provides business development consulting programs that are tailored to the unique needs of businesses through the Develop Your Business Consulting Program for three months, six months, and one year.",

//       icon: (
//         <MdOutlineBusinessCenter
//           className={`fill-${
//             activeUs.u1 ? "[#347BFF]" : ""
//           } duration-300 ease-in-out  size-[60px]`}
//         />
//       ),
//       title: "Business Development",
//       active: activeUs.u1,
//       fade: "fade-right",
//     },
//     {
//       id: "u2",
//       dec: "Develop Your Business is a business development program aimed to help and support businesses in developing and implementing solutions to business difficulties.",
//       icon: (
//         <MdOutlineSupportAgent
//           className={`fill-${
//             activeUs.u2 ? "[#347BFF]" : ""
//           } duration-300 ease-in-out  size-[60px]`}
//         />
//       ),
//       title: "Support Business",
//       active: activeUs.u2,
//       fade: "fade-up",
//     },
//     {
//       id: "u3",
//       dec: "It also aims to help company owners, entrepreneurs, and young people improve their skills and competencies by turning their ideas into real-world enterprises.",
//       icon: (
//         <GiSkills
//           className={`fill-${
//             activeUs.u3 ? "[#347BFF]" : ""
//           } duration-300 ease-in-out  size-[60px]`}
//         />
//       ),
//       title: "Improve Skills",
//       active: activeUs.u3,
//       fade: "fade-left",
//     },
//   ];

//   function mouseEnterHandler(item) {
//     setActiveUs({
//       ...activeUs,
//       [item.id]: !Boolean[item.active],
//     });
//   }
//   function mouseLeaveHandler() {
//     setActiveUs(false);
//   }

//   React.useEffect(() => {
//     Aos.init();
//   }, []);
//   return (
//     <section className="text-center p-10 max-w-[1200px] mx-auto" id="busTrain">
//       <p
//         data-aos="fade-down"
//         data-aos-duration="1000"
//         className="text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto"
//       >
//         Business Consulting
//       </p>

//       <div className="flex flex-col lg:flex-row flex-warp gap-10 my-10 px-10">
//         {busCon.map((item, index) => {
//           return (
//             <div
//               onMouseEnter={() => mouseEnterHandler(item)}
//               onMouseLeave={() => mouseLeaveHandler(item)}
//               key={index}
//               data-aos={item.fade}
//               data-aos-duration="1000"
//               className={`w-full `}
//             >
//               <div
//                 className="flex flex-col gap-2 w-full h-full items-center text-center border-2 p-5
//                             rounded-lg hover:border-primary hover:drop-shadow duration-300 ease-in-out"
//               >
//                 {item.icon}
//                 <p className="text-2xl text-primary font-bold ">{item.title}</p>
//                 <p>{item.dec}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="flex justify-center ">
//         <img
//           src={dbc}
//           alt=""
//           className="rounded-xl h-96 object-cover hover:rounded-3xl duration-300 ease-in-out"
//         />
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Gallary() {
  return (
    <section className="flex flex-col gap-20 justify-center items-center  h-screen bg-animated">
      <div className="text-2xl md:text-3xl lg:text-4xl">Coming soon</div>
      <Link
        to="../"
        className="text-2xl md:text-3xl lg:text-4xl underline hover:no-underline"
      >
        Back To Home
      </Link>
      {/* <Outlet /> */}
    </section>
  );
}
