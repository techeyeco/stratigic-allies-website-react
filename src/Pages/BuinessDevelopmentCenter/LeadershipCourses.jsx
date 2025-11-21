import React from "react";

import courselogo from "../../assets/buinessDevelopmentCenter/title.jpg";
import goals from "../../assets/CEOTalk/goals.png";
import abdulsalam from "../../assets/buinessDevelopmentCenter/abdulsalam.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CEOTalk() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  const data = [
    {
      title:
        "CEO of Rwanga Foundation (2014–2024) – 10 years leading one of the region’s most influential NGOs.",
      fade: "fade-left",
      duration: 800,
    },
    {
      title:
        "Senior Program Manager, National Democratic Institute (NDI), Iraq – 7 years of leadership experience inside and outside Iraq.",
      fade: "fade-left",
      duration: 900,
    },
    {
      title:
        "Board Member, University of Kurdistan-Hewlêr (UKH) – Serving since 2019.",
      fade: "fade-left",
      duration: 1000,
    },
    {
      title:
        "Member, Education Reform Task Force in Kurdistan – Established by the President of the Region and KRG Prime Minister (since 2021).",
      fade: "fade-left",
      duration: 1100,
    },
    {
      title:
        "Certified Accreditor & Trainer – TRANSFORM Master Trainers Program with ILO & UNICEF (since 2022).",
      fade: "fade-left",
      duration: 1200,
    },
    {
      title:
        "Advisor in the Kurdistan Regional Government – Senior advisory roles to the Deputy Prime Minister and the President of the Kurdistan Region.",
      fade: "fade-left",
      duration: 1300,
    },
    {
      title:
        "Consultant and Trainer (2005–Present) – Providing leadership, management, and governance training for international and local NGOs, companies, and political parties.",
      fade: "fade-left",
      duration: 1400,
    },
    {
      title:
        "Co-Founder & Director General, Kurdistan Students Developing Organization – 10 years of leadership as General Secretary and Director.",
      fade: "fade-left",
      duration: 1500,
    },
  ];
  const goalsText = [
    {
      title: "Discover their leadership style",
      details:
        "identify strengths, advantages, and disadvantages, and learn how to avoid common pitfalls.",
      duration: 1000,
    },
    {
      title: "Communicate with impact",
      details:
        "make people listen without shouting, practice active listening, and use storytelling effectively.",
      duration: 1100,
    },
    {
      title: "Build trust and loyalty",
      details:
        "establish credibility, strengthen team spirit, and foster institutional commitment.",
      duration: 1600,
    },
    {
      title: "Lead with confidence",
      details:
        "make better decisions, delegate effectively, and manage conflicts with emotional intelligence.",
      duration: 1300,
    },
    {
      title: "Inspire others",
      details:
        "influence without authority, create psychologically safe teams, and lead meaningful change.",
      duration: 1400,
    },
  ];
  const beneficialsText = [
    {
      title: "Team Leaders",
      details: "who want to strengthen their influence and people skills.",
      duration: 1000,
    },
    {
      title: "Managers & Executives",
      details: "seeking to build trust, loyalty, and high-performing teams.",
      duration: 1100,
    },
    {
      title: "Entrepreneurs & Founders",
      details: "who need to inspire others and lead change effectively.",
      duration: 1600,
    },
    {
      title: "Family-Business Successors ",
      details: "preparing to take on greater leadership roles.",
      duration: 1300,
    },
    {
      title: "High-Potential Professionals",
      details: "looking to develop a leadership brand and career advantage.",
      duration: 1400,
    },
  ];
  const contentText = [
    {
      title: "Lead Yourself & Build Trust",
      details:
        "Opening & Contract, and Why leadership matters in Iraq/Kurdistan; setting expectations & outcomes.",
      duration: 1000,
    },
    {
      title: "Discover Your Leadership Style",
      details:
        "Identify your natural leadership style, and understand its advantages & disadvantages.",
      duration: 1100,
    },
    {
      title: "Know Yourself",
      details: "Strengths & values mapping, and Leadership brand statement.",
      duration: 1200,
    },
    {
      title: "Trust & Communication",
      details:
        "How to make people listen without shouting, and Active listening drills & framing messages.",
      duration: 1300,
    },
    {
      title: "Lead Others & Drive Results",
      details:
        "Building Loyalty & High-Performing Teams, how to establish a sense of loyalty to your team & institution, and Roles, norms & psychological safety.",
      duration: 1400,
    },
    {
      title: "Influence Without Authority",
      details:
        "Ethical power types & stakeholder mapping, Leading Change, Execution & Integrity, and Ethical leadership & integrity in practice.",
      duration: 1500,
    },
    {
      title: "Closing",
      details: "Feedback & certification.",
      duration: 1600,
    },
  ];
  const features = [
    {
      details: "40% practical simulations & exercises",
      duration: 1000,
    },
    {
      details: "30% peer coaching & group discussions",
      duration: 1100,
    },
    {
      details: "20% frameworks & tools",
      duration: 1200,
    },
    {
      details: "10% local case reflections",
      duration: 1300,
    },
  ];

  return (
    <section
      className="text-center flex flex-col gap-5  overflow-hidden"
      id="about"
    >
      <div className="max-w-[1600px] mx-auto p-5 md:p-10">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="overflow-hidden mb-5 border-b-4 border-primary grid grid-cols-1 md:grid-cols-3 items-center p-5 gap-10"
        >
          <div className="bg-light rounded-lg overflow-hidden">
            <img
              className="h-46 p-2  w-full object-contain hover:scale-105 duration-300 ease-in-out"
              src={courselogo}
              alt=""
            />
          </div>
          <p className="text-lg md:col-span-2 text-justify">
            This exclusive 2-day leadership program empowers current and
            aspiring leaders to uncover the qualities that make them truly
            inspiring. Through hands-on exercises, real-world case studies, and
            guided reflection, participants will gain deep insight into their
            personal leadership style, master the art of communicating with
            influence, and learn proven ways to build trust and loyalty within
            their teams and organizations.
          </p>
        </div>
        <p
          className="lg:text-xl text-justify lg:text-center"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          By bringing together Chairmen, General Managers, Board Members, CEOs,
          and C-level executives, this program offers a rare platform where
          future leaders can engage with those who have navigated the highest
          levels of corporate leadership.
        </p>
      </div>
      <div className="">
        <p className="text-xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto ">
          Course Objectives{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between mt-5">
          <div className="bg-light">
            <div className="max-w-[600px] ml-auto p-10">
              <img
                src={goals}
                alt=""
                className=" mx-auto hover:scale-110 duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="bg-primary">
            <div className="max-w-[600px] mr-auto p-10">
              <ul className="list-decimal">
                {goalsText.map((goal, index) => {
                  return (
                    <li key={index} className="py-2">
                      <p className="text-justify">
                        <span className="font-semibold">{goal.title}</span>:{" "}
                        {goal.details}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary pt-10 border-t-4 border-white ">
          <p className="text-xl lg:text-3xl font-bold  pb-5 border-b-4 border-white w-max mx-auto ">
            This program is beneficial for{" "}
          </p>

          <div className="max-w-[1200px] mx-auto py-5">
            {beneficialsText.map((goal, index) => {
              return (
                <p
                  data-aos="fade-up"
                  data-aos-duration={goal.duration}
                  className="text-center py-1"
                  key={index}
                >
                  <span className="font-semibold">{goal.title}</span>:{" "}
                  {goal.details}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto p-5 md:p-10">
        <p className="text-xl lg:text-3xl font-bold text-light  pb-5 border-b-4 border-primary w-max mx-auto ">
          Program Content{" "}
        </p>

        <div className="py-5">
          {contentText.map((goal, index) => {
            return (
              <p
                data-aos="fade-up"
                data-aos-duration={goal.duration}
                className="text-center text-white text-xs md:text-base py-1 my-5 px-5 bg-primary rounded-lg "
                key={index}
              >
                <span className="font-semibold">{goal.title}</span>:{" "}
                {goal.details}
              </p>
            );
          })}
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto p-5">
        <p className="text-xl lg:text-3xl font-bold text-light  pb-5 border-b-4 border-primary w-max mx-auto ">
          Key Features{" "}
        </p>

        <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {features.map((goal, index) => {
            return (
              <p
                data-aos="fade-up"
                data-aos-duration={goal.duration}
                className="text-center text-white text-sm md:text-lg py-1 px-10 bg-primary rounded-lg flex items-center gap-5 w-full"
                key={index}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-check-lg bg-white rounded-full text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                </span>
                {goal.details}
              </p>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:gap-10 justify-center items-center  max-w-[1600px] mx-auto p-10 mb-5 md:mb-10">
        <div className="flex-col gap-5 hidden lg:flex">
          <img src={abdulsalam} alt="" className="w-60 lg:w-96 rounded-lg" />
        </div>
        <div className="col-span-2 text-start">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="50"
            className=""
          >
            <p className="text-lg md:text-xl lg:text-xl pb-3 mb-4 border-b-4 border-primary w-max mx-auto md:mx-0 font-bold">
              AbdulSalam Medeni{" "}
            </p>
            <p className="text-justify font-semibold lg:text-lg">
              Mr. AbdulSalam is a highly respected leadership and management
              development expert with extensive experience in leadership,
              training executives, entrepreneurs, and young professionals across
              Iraq and MENA Region. Over 20 years of professional experience in
              leadership, organizational development, and capacity building. Mr.
              Abdulsalam has worked in deferent Roles at top institutions and
              organizations, including:
            </p>
            <ul className="list-disc mx-4">
              {data.map((items, index) => {
                return (
                  <li
                    key={index}
                    className="text-sm lg:text-base mt-2"
                    data-aos={items.fade}
                    data-aos-duration={items.duration}
                    data-aos-delay={items.delay}
                  >
                    {items.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:hidden">
          <div className="flex items-center justify-center bg-white rounded-lg ">
            <img src={abdulsalam} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>

      <div className="">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Registration & Details{" "}
        </p>
        <div className="bg-light p-5 md:p-10">
          <div className="max-w-[1600px] mx-auto text-base   text-black flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 text-start">
              <p className="">
                <span className="text-primary font-semibold">Location:</span>{" "}
                Business Development Center by Strategic Allies Phoenix Tower,
                Erbil, Kurdistan Region, Iraq
              </p>
              <p>
                <span className="text-primary font-semibold">Dates:</span>{" "}
                Sunday–Monday, September 28–29, 2025
              </p>
              <p>
                <span className="text-primary font-semibold">Timing:</span> 4:00
                PM – 7:00 PM (Evening sessions)
              </p>
              <p>
                <span className="text-primary font-semibold">Group Size:</span>{" "}
                Limited to 14–16 participants to maximize interaction and
                personal feedback.
              </p>

              <p>
                {/* <span className="text-primary">Venue:</span> Divan Hotel, Erbil */}
              </p>
            </div>
            <div className="text-justify">
              <p className="font-semibold">Program Language </p>
              <ul className="list-disc mx-4">
                <li>Primary Language: English</li>
                <li>Supported Languages: Kurdish & Arabic (on request) </li>
                <li>
                  Trainers will provide explanations and clarifications in
                  Kurdish and Arabic to support participants who are less
                  familiar with English.
                </li>
              </ul>
            </div>
            <div className="text-justify">
              <p className="font-semibold">The Course incudes:</p>
              <ul className="list-disc mx-4">
                <li>Full 2-day training program (6 hours total)</li>
                <li>Training materials & handouts </li>
                <li>Certificate of Participation</li>
                <li>Refreshments during breaks </li>
                <li>Networking opportunities</li>
              </ul>
            </div>
            <div className="text-justify">
              <p className="font-semibold">Registration & Inquiries:</p>
              <ul className="list-disc mx-4">
                <li className="my-2">
                  <a
                    target="_blank"
                    className="border-b border-primary hover:border-transparent "
                    href="https://wa.me/+9647740552525"
                  >
                    +964 774 055 2525{" "}
                  </a>
                </li>
                <li className="my-2">
                  <a
                    target="_blank"
                    className="border-b border-primary hover:border-transparent "
                    href="https://wa.me/+9647503054864"
                  >
                    +964 750 305 4864{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
