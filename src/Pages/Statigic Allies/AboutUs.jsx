import React from "react";

import mission from "../../assets/mission.png";
import sLogo from "../../assets/logo/Vertical 01.png";
import CEOcontact from "./CEOcontact";
import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Development",
    detail:
      "Lorem ipsum dolor sit amet lorem in lore mollis et netus et malesuada ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-code-slash"
        viewBox="0 0 16 16"
      >
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
      </svg>
    ),
  },
  {
    title: "Development",
    detail:
      "Lorem ipsum dolor sit amet lorem in lore mollis et netus et malesuada ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-code-slash"
        viewBox="0 0 16 16"
      >
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
      </svg>
    ),
  },
  {
    title: "Development",
    detail:
      "Lorem ipsum dolor sit amet lorem in lore mollis et netus et malesuada ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-code-slash"
        viewBox="0 0 16 16"
      >
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
      </svg>
    ),
  },
  {
    title: "Development",
    detail:
      "Lorem ipsum dolor sit amet lorem in lore mollis et netus et malesuada ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-code-slash"
        viewBox="0 0 16 16"
      >
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
      </svg>
    ),
  },
  {
    title: "Development",
    detail:
      "Lorem ipsum dolor sit amet lorem in lore mollis et netus et malesuada ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-code-slash"
        viewBox="0 0 16 16"
      >
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
      </svg>
    ),
  },
  {
    title: "Development",
    detail:
      "Lorem ipsum dolor sit amet lorem in lore mollis et netus et malesuada ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-code-slash"
        viewBox="0 0 16 16"
      >
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="text-center flex flex-col " id="about">
      {/* About */}
      <div className="p-10  max-w-[1200px] mx-auto ">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="overflow-hidden mb-5"
        >
          <img
            className="h-40 w-full object-contain hover:scale-105 duration-300 ease-in-out p-3 pb-5 border-b-4 border-primary"
            src={sLogo}
            alt=""
          />
        </div>{" "}
        <p
          className="lg:text-xl text-justify lg:text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          Strategic Allies is a premier business development service provider
          headquartered in Erbil, Iraq, with a strategic foothold in the global
          market through key partnerships in the Canada and United Kingdom.
          Established in January 2024, we strive to become a leader in fostering
          business growth and innovation within Iraq and extending our expertise
          to the international arena through our local and international
          strategic partnerships.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 py-10 ">
          <div
            className="md:col-span-2 overflow-hidden "
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              className="h-96 w-full object-cover hover:scale-105 duration-300 ease-in-out"
              src="https://th.bing.com/th/id/R.ea6a6c06c73b8c515f167ac59a3065ce?rik=t6RwMoyD7j%2bcrA&riu=http%3a%2f%2fwww.holleysolar.cn%2fuploads%2fimg1%2f20200604%2f5ed84f97821a0.jpg&ehk=KcGlp9mpvTqZMBZSiL0GMdkdDIGOG3HbTioTUET4qxU%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <div
            className="overflow-hidden "
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              className="h-96 w-full object-cover hover:scale-105 duration-300 ease-in-out"
              src="https://th.bing.com/th/id/R.ea6a6c06c73b8c515f167ac59a3065ce?rik=t6RwMoyD7j%2bcrA&riu=http%3a%2f%2fwww.holleysolar.cn%2fuploads%2fimg1%2f20200604%2f5ed84f97821a0.jpg&ehk=KcGlp9mpvTqZMBZSiL0GMdkdDIGOG3HbTioTUET4qxU%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* mission, vision */}
      <div className="bg-gradient-to-r from-primary/80 to-primary ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-24 p-10 ">
          {/* Mission */}
          <div
            className="md:col-span-3 flex flex-col md:flex-row justify-between items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="basis-1/2">
              <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-light w-max ">
                Mission
              </p>
              <p className="lg:text-xl text-justify ">
                Our mission is to empower businesses in Iraq and beyond to
                achieve sustainable growth and competitive advantage through
                innovative strategies, market insights, and continuous support
                by offering business consultancy programs, professional
                development training courses, and networking opportunities.
              </p>
            </div>
            <div className="overflow-hidden h-full w-max">
              <img
                className="h-48 w-full object-contain mt-5"
                src={mission}
                alt=""
              />
            </div>
          </div>
          {/* Vision */}
          <div
            className="md:col-span-3 flex flex-col-reverse md:flex-row justify-between items-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="overflow-hidden h-full w-max">
              <img
                className="h-48 w-full object-contain rotate-180 mt-5"
                src={mission}
                alt=""
              />
            </div>{" "}
            <div className="basis-1/2">
              <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-light w-max ">
                Vision
              </p>
              <p className="lg:text-xl text-justify ">
                Driving business success in Iraq and beyond, through strategic
                global partnerships, sustainability, and competitive advantages.
              </p>
            </div>
          </div>
        </div>
        {/* Commitment Excellence */}
        <div className="p-10 max-w-[1200px] mx-auto ">
          <p className="text-2xl lg:text-3xl font-bold mb-3 pb-3 border-b-4 border-light w-max mx-auto">
            Commitment Excellence
          </p>
          <p className="lg:text-xl text-center">
            To ensure our clients' success, we are committed to providing the
            highest level of service, guided by our fundamental principles of
            honesty, creativity, and excellence.
          </p>
        </div>
      </div>
      <CEOcontact />
    </section>
  );
}
