import React from "react";

import ceoTalkLogo from "../../assets/CEOTalk/ceoTalk logo.png";
import goals from "../../assets/CEOTalk/goals.png";
import outcome from "../../assets/CEOTalk/outcome.png";
import Aos from "aos";
export default function CEOTalk() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  const goalsText = [
    {
      title: "Recognize Executive Contributions",
      details:
        "Provide senior management teams a platform to be recognized for their invaluable contributions and to share their wisdom with the next generation of professionals.",
      duration: 1000,
    },
    {
      title: "Inspire Emerging Leaders",
      details:
        "Equip the next generation of business leaders with firsthand knowledge and insights from seasoned executives.",
      duration: 1100,
    },
    {
      title: "Facilitate Knowledge Sharing",
      details:
        "Create an open environment where executives share their strategic approaches, experiences, and challenges, fostering a culture of continuous learning.",
      duration: 1200,
    },
    {
      title: "Foster Networking",
      details:
        "Connect young professionals with high-level business executives, providing opportunities to build valuable networks that will help them in their careers.",
      duration: 1300,
    },
    {
      title: "Enhance Leadership Skills",
      details:
        "Empower young participants with key leadership tools and strategies that they can apply in their professional journeys.",
      duration: 1400,
    },
  ];
  const outcomeText = [
    {
      title: "Strategic Mindset",
      details:
        " Participants will develop a sharper understanding of the strategies and decision-making processes that drive successful businesses.",
      duration: 1000,
    },
    {
      title: "Real-World Learning",
      details:
        "Participants will gain actionable insights into what it takes to succeed in today’s complex business world, directly from those who have achieved top-level success.",
      duration: 1100,
    },
    {
      title: "Career Inspiration",
      details:
        "Young attendees will leave motivated and equipped to pursue their professional aspirations with a clearer vision of how to achieve leadership roles.",
      duration: 1200,
    },
    {
      title: "Professional Networking",
      details:
        "Attendees will build strong connections with top business executives, opening doors for mentorship and future collaborations.",
      duration: 1300,
    },
  ];

  const agendas = [
    {
      time: "5:30 PM - 5:45 PM",
      title: "Registration and Networking",
      duration: 1000,
    },
    { time: "5:45 PM - 5:50 PM", title: "Organizer Speech", duration: 1100 },
    {
      time: "5:50 PM - 6:50 PM",
      title: "Panel Speech and Discussion",
      duration: 1200,
    },
    { time: "6:50 PM - 7:10 PM", title: "Coffee Break", duration: 1300 },
    {
      time: "7:10 PM – 8:00 PM",
      title: "Q&A Session and Networking",
      duration: 1400,
    },
  ];
  return (
    <section
      className="text-center flex flex-col gap-5 md:gap-10 overflow-hidden"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto p-5 md:p-10">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="overflow-hidden mb-5 border-b-4 border-primary grid grid-cols-1 md:grid-cols-3 items-center p-5 gap-10"
        >
          <div className="bg-light rounded-xl overflow-hidden">
            <img
              className="h-36 w-full object-contain hover:scale-105 duration-300 ease-in-out"
              src={ceoTalkLogo}
              alt=""
            />
          </div>
          <p className="text-lg md:col-span-2 text-justify">
            The CEO Talk Masterclass by Strategic Allies is a groundbreaking
            initiative designed to bridge the gap between business leaders and
            the younger generation of aspiring professionals. In today’s rapidly
            evolving business environment, it is crucial to create opportunities
            for emerging talents to learn directly from the top management of
            successful corporations.
          </p>
        </div>
        <p
          className="lg:text-xl text-justify lg:text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          By bringing together Chairmen, General Managers, Board Members, CEOs,
          and C-level executives, this program offers a rare platform where
          future leaders can engage with those who have navigated the highest
          levels of corporate leadership.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto p-5 md:p-10">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Importance of the Program
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 text-justify">
          <p className="text-lg">
            This masterclass is more than a typical networking event. It is a
            unique opportunity to realize the critical role that senior
            management teams play in driving business success. The event offers
            a professional space for these executives to be recognized for their
            contributions and to impart their wisdom to the next generation of
            leaders.
          </p>
          <p className="text-lg">
            Moreover, it provides a rare chance for young professionals and
            students to be inspired by the real-world experiences, strategies,
            and visionary leadership of top executives. These leaders bring
            invaluable insights that cannot be found in textbooks or online
            courses, providing guidance on how to lead effectively, overcome
            challenges, and build sustainable growth.
          </p>
          <p className="text-lg lg:col-span-3">
            For the younger generation, this exposure to high-level corporate
            thinking is critical for shaping their leadership skills and mindset
            for the future
          </p>
        </div>
      </div>
      <div className="">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Program Goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between my-5">
          <div className="bg-light">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="max-w-[600px] ml-auto p-10"
            >
              <img
                src={goals}
                alt=""
                className=" mx-auto hover:scale-110 duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="bg-primary">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="max-w-[600px] mr-auto p-10"
            >
              <ul className="list-decimal">
                {goalsText.map((goal, index) => {
                  return (
                    <li
                      data-aos="fade-left"
                      data-aos-duration={goal.duration}
                      key={index}
                      className="py-2"
                    >
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
      </div>
      <div className="">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Expected Outcomes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between my-5">
          <div className="bg-primary">
            <div className="max-w-[600px] ml-auto p-10">
              <ul className="list-decimal">
                {outcomeText.map((goal, index) => {
                  return (
                    <li
                      data-aos="fade-right"
                      data-aos-duration={goal.duration}
                      key={index}
                      className="py-2"
                    >
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
          <div className="bg-light">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="max-w-[600px] mr-auto p-10"
            >
              <img
                src={outcome}
                alt=""
                className=" mx-auto hover:scale-110 duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Event Details
        </p>
        <div className="bg-light p-5 md:p-10">
          <div className="max-w-[1400px] mx-auto text-lg md:text-2xl  text-black flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 font-semibold text-start">
              <p>
                <span className="text-primary">Event Name:</span> CEO Talk
              </p>
              <p>
                <span className="text-primary">Organizer:</span> Strategic
                Allies Company
              </p>
              <p>
                <span className="text-primary">Event Format:</span> Panel
                Discussion
              </p>
              <p className="md:col-span-2">
                <span className="text-primary ">Host:</span> : Zanear Jabbar –
                University Lecturer and CEO of Strategic Allies
              </p>
              <p>
                <span className="text-primary">Venue:</span> Divan Hotel, Erbil
              </p>
            </div>
            <p className="text-justify">
              The CEO Talk will be conducted in a{" "}
              <span className="font-bold">panel format</span>, featuring 2-3
              esteemed CEOs or senior managers from powerful and successful
              companies.{" "}
            </p>
            <p className="text-justify">
              These leaders will share their experiences, strategies, and
              leadership insights, providing attendees with a rare opportunity
              to learn directly from the best in the business world. Their
              expertise will serve as a source of inspiration, offering
              practical advice on navigating business challenges and leading
              with impact.
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 font-semibold">
              <p>
                <span className="text-primary">Venue:</span> Divan Hotel, Erbil
              </p>
              <p>
                <span className="text-primary">Date:</span> 11.1. 2025
              </p>
              <p>
                <span className="text-primary">Time:</span> 5:30 PM – 8:00 PM
              </p>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className=" max-w-[1400px] mx-auto">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Agenda
        </p>
        <div>
          <ul className="list-disc">
            {agendas.map((agenda, index) => {
              return (
                <li
                  data-aos="fade-left"
                  data-aos-duration={agenda.duration}
                  key={index}
                  className="text-3xl text-start my-8"
                >
                  <span className="font-semibold">{agenda.time}:</span>{" "}
                  {agenda.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
      <div className="">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Key Highlights{" "}
        </p>
        <div className="bg-light p-5 md:p-10 text-justify">
          <div className="max-w-[1000px] mx-auto text-lg md:text-2xl text-black flex flex-col gap-5 md:gap-10">
            <p>
              <span className="font-bold text-primary">
                Exclusive Audience:
              </span>{" "}
              Limited to 50-100 participants.
            </p>
            <p>
              <span className="font-bold text-primary">Language: </span> Kurdish
            </p>
            <p className="">
              <span className="font-bold text-primary">Contents:</span> This
              program offers invaluable learning experiences from real business
              leaders, exploring how they started their journeys, overcame
              challenges, and achieved success. Key topics include vision,
              leadership, innovation, strategy, and empowerment, providing
              attendees with unique insights into the foundational steps and
              strate gies that drive impactful leadership.
            </p>
            <p className="">
              Be part of the exclusive{" "}
              <span className="font-bold text-primary">CEO Talk program</span>,
              designed to inspire and empower future leaders. Tickets are
              available now - register to secure yours and reserve
              your spot today!
            </p>
            <a
              href="https://forms.gle/ER5WPqCLsv3kZUQW6"
              target="_blank"
              className="w-full bg-primary  p-2 rounded-lg text-light font-semibold hover:shadow-lg duration-300 text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
