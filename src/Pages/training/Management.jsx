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
    title: "An introduction to management, managers, and levels of management.",
    fade: "fade-up",
    duration: 1500,
    delay: 400,
  },
  {
    title: "What a manager must do to be successful.",
    fade: "fade-up",
    duration: 1500,
    delay: 600,
  },
  {
    title:
      "What distinguishes ordinary managers, effective managers, and effective managers.",
    fade: "fade-up",
    duration: 1500,
    delay: 800,
  },
  {
    title: "Understanding of the plan and the value of having one",
    fade: "fade-up",
    duration: 1500,
    delay: 1000,
  },
  {
    title: "practical steps in planning process.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
];

export default function Management() {
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
            className="text-xl lg:text-2xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
          >
            Managment Trining
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="lg:text-xl text-justify  "
          >
            The course (Management and Planning) is both academic and practical,
            with an emphasis on management and key management and planning
            concepts. This course is beneficial for individuals in a management
            or leadership position in an organization.
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="lg:text-xl text-justify  md:pt-10"
          >
            The management and planning training course discusses a variety of
            activities and responsibilities that will assist new managers in
            developing, as well as providing chances for assessment and review
            of those who are presently accountable in this area.
          </p>
        </div>
        {/* 2 */}
        <div className="md:text-start">
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="text-xl lg:text-2xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
          >
            Course Objectives{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="lg:text-xl text-justify pb-5"
          >
            The primary purpose of the management and planning training course
            is to assist all people who work or want to work in the area of
            management in taking more effective steps toward accomplishing their
            objectives. This course will expose participants to the following
            topics:
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
