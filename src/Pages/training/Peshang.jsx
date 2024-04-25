import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const second = [
  {
    title: "How successful people think.",
    fade: "fade-up",
    duration: 1500,
    delay: 200,
  },
  {
    title: "Learn the qualities of successful entrepreneurs.",
    fade: "fade-up",
    duration: 1500,
    delay: 400,
  },
  {
    title: "Learn how to generate ideas for businesses.",
    fade: "fade-up",
    duration: 1500,
    delay: 600,
  },
  {
    title: "Learn the procedures for creating your own company.",
    fade: "fade-up",
    duration: 1500,
    delay: 800,
  },
  {
    title:
      "Learn how to give professional and successful project presentations.",
    fade: "fade-up",
    duration: 1500,
    delay: 1000,
  },
  {
    title: "Gain understanding of the planning function and business strategy.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
  {
    title: "Improve teamwork skills.",
    fade: "fade-up",
    duration: 1500,
    delay: 1400,
  },
];
const third = [
  {
    title:
      "By the conclusion of week one, participants will be divided into groups of 4-5.",
    fade: "fade-up",
    duration: 1500,
    delay: 200,
  },
  {
    title:
      "Groups should create a business concept to construct a successful business.",
    fade: "fade-up",
    duration: 1500,
    delay: 400,
  },
  {
    title: "Groups will receive guidelines and information in the coming days.",
    fade: "fade-up",
    duration: 1500,
    delay: 600,
  },
  {
    title: "On Day 5, groups showcase their work.",
    fade: "fade-up",
    duration: 1500,
    delay: 800,
  },
];
import { CiCoinInsert } from "react-icons/ci";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Peshang() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto md:p-10 py-20 overflow-hidden">
      <div className="flex flex-col justify-center items-start gap-10 md:gap-20">
        {/* 1 */}
        <div>
          <p className="md:text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto">
            What makes us Greate to work for
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="card bg-neutral/50 text-light-content backdrop-blur-2xl rounded-lg 
                     flex flex-col justify-center items-center "
            >
              <div className="card-body flex flex-col items-start gap-3 p-14">
                <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-primary w-max ">
                  Peshang
                </p>
                <p className="lg:text-xl text-justify  ">
                  Peshang is a practical development course that helps young
                  people improve their talents by transforming ideas into
                  real-world enterprises. Peshang is a 24 hour training course.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="card bg-neutral/50 text-light-content backdrop-blur-2xl rounded-lg 
                     flex flex-col justify-center items-center row-span-2"
            >
              <div className="card-body  flex flex-col items-start gap-10 md:gap-20 p-14">
                <div className="flex flex-col gap-2">
                  <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-primary w-max ">
                    Sponsorship
                  </p>
                  <p className="lg:text-xl text-justify  ">
                    Peshang training has been funded by several foreign and
                    local organizations, including the American Consulate in
                    Erbil, Erbil Polytechnic University, IREX, Erbil Chamber of
                    Commerce and Industry, Plan Organization, The Book Café, and
                    Rebaz Foundation.
                  </p>
                </div>
                <div className="bg-primary flex flex-col w-full gap-5 p-5 rounded-lg">
                  <p className="text-3xl font-bold">We are open to work</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    iste facilis inventore rerum a itaque. At consectetur
                    aliquid
                  </p>
                  <HiOutlineArrowLongRight size={50} className="self-end" />
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="card bg-neutral/50 text-light-content backdrop-blur-2xl rounded-lg 
                     flex flex-col justify-center items-center "
            >
              <div className="card-body flex flex-col items-start gap-3 p-14">
                <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-primary w-max ">
                  Certificated Course
                </p>
                <p className="lg:text-xl text-justify  ">
                  Certificate, Peshang. The course certificate has been
                  recognized by both Erbil Polytechnic University (academic
                  institution) and the Erbil Chamber of Commerce and Industry
                  (private sector).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="md:text-start">
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
          >
            Course Objectives{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="lg:text-xl text-justify  "
          >
            After completing this course, participants should have learned the
            following:
          </p>
          <ol className="px-10 list-decimal">
            {second.map((items, index) => {
              return (
                <li
                  key={index}
                  className="lg:text-xl mt-2"
                  data-aos={items.fade}
                  data-aos-duration={items.duration}
                >
                  {items.title}
                </li>
              );
            })}
          </ol>
        </div>

        {/* 4 */}
        <div className="md:text-start">
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
          >
            Course Organization{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="lg:text-xl text-justify  "
          >
            This course focuses on both practical and professional aspects of
            entrepreneurship. Candidates will participate in various activities,
            including small group activities, group discussions, and watching
            relevant video clips. The main activity is the group project.
          </p>
          <ul className="px-10 list-disc	">
            {third.map((items, index) => {
              return (
                <li
                  key={index}
                  className="lg:text-xl mt-2"
                  data-aos={items.fade}
                  data-aos-duration={items.duration}
                >
                  {items.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
