import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

export default function BusinessConsulting() {
  const [activeUs, setActiveUs] = React.useState({
    u1: false,
    u2: false,
    u3: false,
  });

  const busCon = [
    {
      id: "u1",
      dec: "Strategic Allies provides business development consulting programs that are tailored to the unique needs of businesses through the Develop Your Business Consulting Program for three months, six months, and one year.",

      icon: (
        <MdOutlineBusinessCenter
          className={`fill-${
            activeUs.u1 ? "[#7480FF]" : ""
          } duration-300 ease-in-out  size-[60px]`}
        />
      ),
      title: "Business Development",
      active: activeUs.u1,
    },
    {
      id: "u2",
      dec: "Develop Your Business is a business development program aimed to help and support businesses in developing and implementing solutions to business difficulties.",
      icon: (
        <MdOutlineSupportAgent
          className={`fill-${
            activeUs.u2 ? "[#7480FF]" : ""
          } duration-300 ease-in-out  size-[60px]`}
        />
      ),
      title: "Support Business",
      active: activeUs.u2,
    },
    {
      id: "u3",
      dec: "It also aims to help company owners, entrepreneurs, and young people improve their skills and competencies by turning their ideas into real-world enterprises.",
      icon: (
        <GiSkills
          className={`fill-${
            activeUs.u3 ? "[#7480FF]" : ""
          } duration-300 ease-in-out  size-[60px]`}
        />
      ),
      title: "Improve Skills",
      active: activeUs.u3,
    },
  ];

  function mouseEnterHandler(item) {
    setActiveUs({
      ...activeUs,
      [item.id]: !Boolean[item.active],
    });
  }
  function mouseLeaveHandler() {
    setActiveUs(false);
  }

  return (
    <section>
      {" "}
      <div className="ptext-center py-20 px-10" id="busTrain">
        <p className="text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto">
          Business Consulting
        </p>

        <div className="flex flex-col lg:flex-row flex-warp gap-10 py-10">
          {busCon.map((item, index) => {
            return (
              <div
                onMouseEnter={() => mouseEnterHandler(item)}
                onMouseLeave={() => mouseLeaveHandler(item)}
                key={index}
                data-aos-duration="1500"
                data-aos={item.fade}
                className={`w-full `}
              >
                <div
                  className="flex flex-col gap-2 w-full h-full items-center text-center border-2 p-5 
                            rounded-lg hover:border-primary hover:drop-shadow duration-200 ease-in-out"
                >
                  {item.icon}
                  <p className="text-2xl text-primary font-bold ">
                    {item.title}
                  </p>
                  <p>{item.dec}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
