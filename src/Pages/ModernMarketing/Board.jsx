import React from "react";
import img1 from "../../assets/Board/img1.png";
import img2 from "../../assets/Board/img2.png";
import img3 from "../../assets/Board/img3.png";
import img4 from "../../assets/Board/img4.png";
import img5 from "../../assets/Board/img5.png";
import img6 from "../../assets/Board/img6.png";
import img7 from "../../assets/Board/img7.png";
import img8 from "../../assets/Board/img8.png";
import img9 from "../../assets/Board/img9.png";
import img10 from "../../assets/Board/img10.png";
import img11 from "../../assets/Board/img11.png";
import img12 from "../../assets/Board/img12.png";
import img13 from "../../assets/Board/img13.png";
import img14 from "../../assets/Board/img14.png";
import img15 from "../../assets/Board/img15.png";
import img16 from "../../assets/Board/img16.png";
import img17 from "../../assets/Board/img17.png";
import img18 from "../../assets/Board/img18.png";
import img19 from "../../assets/Board/img19.png";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Board() {
  const [moreComp, setMoreComp] = React.useState(false);

  React.useEffect(() => {
    Aos.init();
  }, []);

  const board = [
    {
      name: "Professor Dr. Khalid Mirkhan",
      img: img1,
      info: [
        "Department of Accounting",
        "College of Administrative and Financial sciences",
        "Cihan University",
      ],
    },
    {
      name: "Professor Dr. Darman Sulaiman",
      img: img2,
      info: [
        "Head of Business Administration Department",
        "College of Administration and Economics",
        "Duhok University",
      ],
    },
    {
      name: "Professor Dr. Wasfi Kahwachi",
      img: img3,
      info: [
        "PhD in Statistics",
        "Dean of scientific research",
        "Tishk International University",
      ],
    },
    {
      name: "Professor Dr. Ahlam Ibrahim",
      img: img4,
      info: [
        "Department of Administration",
        "College of Administration and Economics",
        "Strategy Management and Organizational Behaviour",
        "Salaheddin university - Erbil",
      ],
    },
    {
      name: "Assistant Professor Dr. Rizgar Saed Hussein",
      img: img5,
      info: [
        "PhD in Marketing",
        "Vice President for Student Affairs",
        "Soran University",
      ],
    },
    {
      name: "Ms. Jessica Ashe, EdD, MBA",
      img: img6,
      info: [
        "Fulbright Specialist",
        "Publishes in peer-reviewed, marketing, and journalism fields",
      ],
    },
    {
      name: "Professor Dr. Mahabat Nuri",
      img: img7,
      info: [
        "Head of Department of Administration",
        "Specific Specialization: Marketing management",
        "College of Administration and Economics",
        "Salaheddin University - Erbil",
      ],
    },
    {
      name: "Mr. Rezhwan Mohammed",
      img: img8,
      info: [
        "Authorized Manager",
        "HMH Group of Companies",
        "Board Member at Iraq Creativity Board",
      ],
    },
    {
      name: "Assistant Prof Dr. Shirzad Mahdi",
      img: img9,
      info: [
        "Head of Business Management Department",
        "Erbil Technical Management College",
        "Erbil Polytechnic University",
      ],
    },
    {
      name: "Professor Dr. Kawa Mohammed Faraj",
      img: img10,
      info: [
        "PhD degree in Marketing Management",
        "College of Administration and Economics",
        "University of Sulaimani",
      ],
    },
    {
      name: "Assistant Professor Dr. Shivan Ahmed",
      img: img11,
      info: [
        "Department of Business Administration",
        "Faculty of Administration & Economics",
        "University of Duhok",
      ],
    },
    {
      name: "Professor Dr. Aree Mohammed Ali",
      img: img12,
      info: [
        "Business Administration Techniques Department",
        "Technical College of Administration",
        "Duhok Polytechnic university",
      ],
    },
    {
      name: "Professor Dr. Wala Jawdat Ali Jaf",
      img: img13,
      info: [
        "Department of Business Management",
        "Erbil Technical Management College",
        "Erbil Polytechnic University",
      ],
    },
    {
      name: "Assistant Prof Dr. Abdulkhaleq Nader Qader",
      img: img14,
      info: [
        "PhD in Business Administration",
        "Dean of Shaqlawa Technical College",
        "Erbil Polytechnic University",
      ],
    },
    {
      name: "Khozi Mustafa",
      img: img15,
      info: [
        "Master of Science in Business Administration",
        "PhD Candidate in Business Administration",
        "Erbil Polytechnic University",
      ],
    },
    {
      name: "Sanarya Adnan Anwer",
      img: img16,
      info: [
        "Master of Science in Business Administration",
        "PhD Candidate in Business Administration",
        "Erbil Polytechnic University",
      ],
    },
    {
      name: "Dr. Farman Tahsin",
      img: img17,
      info: [
        "PhD in Business Administration",
        "International Marketing and Language Department",
        "Erbil Technical College of Management",
        "Erbil Polytechnic University",
      ],
    },
    {
      name: "Andam Omar Anwar",
      img: img18,
      info: [
        "Founder and CEO of TECH EYES",
        "Master of Computer Engineering",
        "IT Consultant",
      ],
    },
    {
      name: "Zanear Jabbar Ssali",
      img: img19,
      info: [
        "Chair of the Kotler Impact Advisory Board Iraq",
        "PhD Candidate in Business Administration",
        "Erbil Technical College of Management",
        "Erbil Polytechnic University",
      ],
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto p-10">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-xl lg:text-5xl mb-5 pb-5 border-b-4 border-primary mx-auto"
      >
        Kotler Impact Advisory Board Iraq
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {board.map((person, index) => {
          return (
            (index == 0 ||
              index == 1 ||
              index == 2 ||
              index == 3 ||
              index == 4 ||
              index == 5) && (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col justify-start items-center bg-neutral/50 text-light-content backdrop-blur-2xl w-full "
              >
                <div className="relative w-full">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="object-cover w-full h-80"
                  />
                  <div className="absolute bg-primary w-max p-1 bottom-[10px] left-[10px] ">
                    <p className="">{person.name}</p>
                  </div>
                </div>
                <div className="p-3 bg-pr">
                  <ol className="px-10 list-disc text-start">
                    {person.info.map((info) => {
                      return (
                        <li key={index} className=" lg:text-lg mt-2">
                          {info}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            )
          );
        })}
      </div>
      {moreComp && (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {board.map((person, index) => {
            return (
              !(
                index == 0 ||
                index == 1 ||
                index == 2 ||
                index == 3 ||
                index == 4 ||
                index == 5
              ) && (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="flex flex-col justify-start items-center bg-neutral/50 text-light-content backdrop-blur-2xl w-full "
                >
                  <div className="relative w-full">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="object-cover w-full h-80"
                    />
                    <div className="absolute bg-primary w-max p-1 bottom-[10px] left-[10px] ">
                      <p className="">{person.name}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-pr">
                    <ol className="px-10 list-disc text-start">
                      {person.info.map((info) => {
                        return (
                          <li key={index} className="lg:text-lg mt-2">
                            {info}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}

      <div className="mt-10 ">
        <button
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="flex justify-center items-center gap-2 mx-auto"
          onClick={() => setMoreComp((prevState) => !prevState)}
        >
          <p className="md:text-lg lg:text-xl">
            Show {moreComp ? "Less" : "More"}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className={`bi bi-caret-down ${moreComp && "rotate-180"}`}
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
          </svg>
        </button>
      </div>
    </section>
  );
}
{
  /* <div
key={index}
className="flex flex-col justify-center items-center"
>
<div className="bg-white p-2 rounded-3xl mb-[-50px] z-10 hover:-translate-y-5 duration-200 ease-in-out">
  <img
    src={img1}
    alt=""
    className="rounded-2xl w-60 h-50 object-cover"
  />
</div>
<div className="bg-primary w-full rounded-2xl p-3 pt-16">
  <div className="text-lg md:text-xl lg:text-3xl">
    <p>Professor Dr. Khalid Mirkhan</p>
  </div>
  <ol className="px-10 list-disc text-start">
    <li className="lg:text-xl mt-2">Department of Accounting</li>
    <li className="lg:text-xl mt-2">
      College of Administrative and Financial sciences
    </li>
    <li className="lg:text-xl mt-2">Cihan University</li>
  </ol>
</div>
</div> */
}
