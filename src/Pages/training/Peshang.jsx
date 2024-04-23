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

export default function Peshang() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="max-w-[1400px] mx-auto p-10 overflow-hidden">
      <div className="flex flex-col justify-center items-start gap-10 md:gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center py-10">
          {/* 1 */}
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
            >
              Peshang
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="lg:text-xl text-justify  "
            >
              Peshang is a practical development course that helps young people
              improve their talents by transforming ideas into real-world
              enterprises. Peshang is a 24 hour training course.
            </p>
          </div>
          {/* 3 */}
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
            >
              Certificated Course
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="lg:text-xl text-justify  "
            >
              Certificate, Peshang. The course certificate has been recognized
              by both Erbil Polytechnic University (academic institution) and
              the Erbil Chamber of Commerce and Industry (private sector).
            </p>
          </div>

          {/* 5 */}
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max  "
            >
              Sponsorship.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="lg:text-xl text-justify  "
            >
              Peshang training has been funded by several foreign and local
              organizations, including the American Consulate in Erbil, Erbil
              Polytechnic University, IREX, Erbil Chamber of Commerce and
              Industry, Plan Organization, The Book Café, and Rebaz Foundation.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div>
          <div className="md:text-start">
            <div className="">
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
                After completing this course, participants should have learned
                the following:
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
        </div>

        {/* 4 */}
        <div>
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
              entrepreneurship. Candidates will participate in various
              activities, including small group activities, group discussions,
              and watching relevant video clips. The main activity is the group
              project.
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
      </div>
    </section>
  );
}
