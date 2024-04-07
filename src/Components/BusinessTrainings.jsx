import React from "react";
import { MdManageAccounts } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LiaIndustrySolid } from "react-icons/lia";
import { CiCoinInsert } from "react-icons/ci";

const data = [
  {
    title: "Management and Successful Managers",
    detail: "Introduce key management ideas and work your way to success.",
    icon: <MdManageAccounts size={30} />,
    week: "1",
    weekShort: "st",
  },
  {
    title: "Planning & Business Plan",
    detail:
      "Discuss planning and business plans, as well as how to create effective business plans.",
    icon: <SlCalender size={30} />,
    week: "2",
    weekShort: "nd",
  },
  {
    title: "Marketing and Branding",
    detail: "Understanding marketing and its importance in today's industry.",
    icon: <LiaIndustrySolid size={30} />,
    week: "3",
    weekShort: "rd",
  },
  {
    title: "Success Secrets in Sales",
    detail: "Identify the keys of sales success and how to get there.",
    icon: <CiCoinInsert size={30} />,
    week: "4",
    weekShort: "th",
  },
];

export default function Service() {
  return (
    <section className="text-center py-20 px-10" id="service">
      <p className="text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto">
        Business Trainings{" "}
      </p>
      <p className="lg:text-xl text-justify lg:text-center ">
        Develop Your Business Training Course is a unique initiative that
        promotes firms, enterprises, and projects while also providing a chance
        for people who want to improve their abilities. This course will attempt
        to accomplish the following objectives based on weeks:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-10 lg:gap-16">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="card bg-gray-700/50 text-light-content backdrop-blur-2xl rounded-lg 
                        flex flex-col  justify-center items-center
                        hover:bg-gray-600/80 duration-200 ease-in-out lg:hover:-translate-y-8 "
            >
              <div
                className="bg-primary flex items-center justify-center m-[-30px] p-5 w-16 
                            h-16 text-3xl text-white rounded-full z-10"
              >
                <div className="p-2 rounded-full z-10 ">
                  <p className="ordinal">
                    {item.week}
                    <sup className="">{item.weekShort}</sup>
                  </p>
                </div>
              </div>
              <div className="card-body items-center text-center flex flex-col items-center gap-3 p-10">
                <h2 className="card-title flex items-center gap-4">
                  {item.title} {item.icon}
                </h2>
                <p>{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="lg:text-xl text-justify lg:text-center">
        The primary purpose of this program is to create long-term value for
        businesses and employers while also promoting growth. By learning about
        the four key components of every company's or business's success:
        management practices , planning, marketing, and sales.
      </p>
    </section>
  );
}
