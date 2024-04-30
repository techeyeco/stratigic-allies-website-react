import React from "react";

import { MdManageAccounts } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LiaIndustrySolid } from "react-icons/lia";
import { CiCoinInsert } from "react-icons/ci";

import pic1 from "../../assets/sponsores/Picture1.jpg";
import pic2 from "../../assets/sponsores/Picture2.png";
import pic3 from "../../assets/sponsores/Picture3.jpg";
import pic4 from "../../assets/sponsores/Picture4.png";

import img1 from "../../assets/training/devleop/1.jpg";
import img2 from "../../assets/training/devleop/2.jpg";
import img3 from "../../assets/training/devleop/3.png";

import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Management and Successful Managers",
    detail: "Introduce key management ideas and work your way to success.",
    icon: <MdManageAccounts size={30} />,
    week: "1",
    weekShort: "st",
    fade: "fade-right",
  },
  {
    title: "Planning & Business Plan",
    detail:
      "Discuss planning and business plans, as well as how to create effective business plans.",
    icon: <SlCalender size={30} />,
    week: "2",
    weekShort: "nd",
    fade: "fade-left",
  },
  {
    title: "Marketing and Branding",
    detail: "Understanding marketing and its importance in today's industry.",
    icon: <LiaIndustrySolid size={30} />,
    week: "3",
    weekShort: "rd",
    fade: "fade-right",
  },
  {
    title: "Success Secrets in Sales",
    detail: "Identify the keys of sales success and how to get there.",
    icon: <CiCoinInsert size={30} />,
    week: "4",
    weekShort: "th",
    fade: "fade-left",
  },
];

const sponsores = [pic1, pic2, pic3, pic4];
export default function DevelopYourBusiness() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="md:m-10 my-20 max-w-[1200px] mx-auto overflow-hidden"
      id="DevelopYourBusiness"
    >
      <p className="text-2xl lg:text-4xl font-bold mb-5 pb-5 border-b-4 border-primary w-max ">
        Develop Your Business
      </p>
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="lg:text-xl text-justify  ">
          Develop Your Business Training Course is a unique initiative that
          promotes firms, enterprises, and projects while also providing a
          chance for people who want to improve their abilities. This course
          will attempt to accomplish the following objectives based on weeks:
        </p>

        <div className="overflow-hidden rounded-lg ">
          <img
            src={img3}
            alt=""
            className="w-full hover:scale-105 duration-300 ease-in-out"
          />
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 my-10 md:my-20 gap-10 lg:gap-16 
      "
      >
        {data.map((item, index) => {
          return (
            <div key={index} data-aos={item.fade} data-aos-duration="1500">
              <div
                className="card bg-neutral/50 text-light-content backdrop-blur-2xl rounded-lg 
                        flex flex-col  justify-center items-center 
                        hover:bg-neutral duration-300 ease-in-out lg:hover:-translate-y-8 "
              >
                <div
                  className="bg-primary flex items-center justify-center m-[-30px] p-5 w-16 
                            h-16 text-3xl text-white rounded-full z-10"
                >
                  <div className="p-2 rounded-full z-10 ">
                    <p className="flex items-center justify-center">
                      {item.week}
                      <sup className="">{item.weekShort}</sup>
                    </p>
                  </div>
                </div>
                <div className="card-body items-center text-center flex flex-col items-center gap-10 p-10">
                  <p className="card-title flex items-center gap-4 text-2xl">
                    {item.title}
                  </p>
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
        <p className="lg:text-2xl text-justify ">
          The primary purpose of this program is to create long-term value for
          businesses and employers while also promoting growth. By learning
          about the four key components of every company's or business's
          success: management practices , planning, marketing, and sales.
        </p>
        <div className="h-60  overflow-hidden rounded-lg">
          <img
            src={img1}
            alt=""
            className="h-full w-full object-cover hover:scale-105 duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-primary w-max ">
          Sponsors
        </p>
        <p className="lg:text-xl text-justify ">
          Develop your business previously sponsored and supported by Erbil
          Chamber of Commerce and Industry, Erbil Polytechnic University, Plan
          organization, and SOSS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-10 my-5">
          {sponsores.map((pic, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                key={index}
                className="w-full h-48 overflow-hidden rounded-xl bg-light flex justify-center items-center"
              >
                <img
                  className="rounded-xl object-contain hover:scale-105 duration-300 ease-in-out"
                  src={pic}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
