import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const second = [
  {
    title: "Recognize the significance of sales in business's success.",
    fade: "fade-up",
    duration: 1500,
    delay: 200,
  },
  {
    title: "Discover how to succeed as a sales professional.",
    fade: "fade-up",
    duration: 1500,
    delay: 400,
  },
  {
    title: "Identifying consumer types and effective selling strategies.",
    fade: "fade-up",
    duration: 1500,
    delay: 600,
  },
  {
    title: "Discover how to build trust with consumers.",
    fade: "fade-up",
    duration: 1500,
    delay: 800,
  },
  {
    title: "Learn how to plan and execute professional presentations.",
    fade: "fade-up",
    duration: 1500,
    delay: 1000,
  },
  {
    title: "Learn how to cope with challenging customers.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
  {
    title: "Recognizing the value of negotiating abilities in sales.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
  {
    title: "Improve communication abilities in customer service.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
  {
    title:
      "Recognize ways for maintaining professionalism in customer service.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
];

export default function SCS() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto md:m-10 my-20 overflow-hidden">
      <div className="flex flex-col justify-center items-start gap-10 md:gap-20">
        {/* 1 */}
        <div className="">
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
          >
            SCS{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="lg:text-xl text-justify  "
          >
            SCS is a professional and practical development training course,
            designed to help and support sales staff, sales supervisors, sales
            managers, entrepreneurs, as well as managers getting involved with
            sales and marketing responsibilities; in order to enhance their
            sales and customer service competences and also introduce invaluable
            concepts and practices in these areas.
          </p>
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
            className="lg:text-xl text-justify  pb-5"
          >
            This course will assist you:
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
      </div>
    </section>
  );
}
