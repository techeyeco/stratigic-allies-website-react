import React from "react";
import CEO from "../../assets/CEO1.png";
import book from "../../assets/CEO Book final.png";

import English from "../../assets/countries/for book CEO/English.png";
import Portugal from "../../assets/countries/for book CEO/Portugal.png";
import Italian from "../../assets/countries/for book CEO/Italian.png";
import French from "../../assets/countries/for book CEO/French.png";
import Spanish from "../../assets/countries/for book CEO/Spanish.png";
import Germany from "../../assets/countries/for book CEO/Germany.png";

import Aos from "aos";
import "aos/dist/aos.css";
export default function CEOcontact() {
  const data = [
    {
      title: "Founder and CEO of Strategic Allies Company",
      fade: "fade-left",
      duration: 1500,
      delay: 200,
    },
    {
      title: "Chair of Kotler Impact Advisory board Iraq",
      fade: "fade-left",
      duration: 1500,
      delay: 400,
    },
    {
      title: "Iraq Creativity Ambassador of WCIW/D",
      fade: "fade-left",
      duration: 1500,
      delay: 600,
    },
    {
      title: "PhD Candidate in Business Administration at EPU",
      fade: "fade-left",
      duration: 1500,
      delay: 800,
    },
    {
      title:
        "MSc in International Business Management at Sheffield Hallam University",
      fade: "fade-left",
      duration: 1500,
      delay: 1000,
    },
    {
      title: "Lecturer at Erbil Technical Management College at EPU",
      fade: "fade-left",
      duration: 1500,
      delay: 1200,
    },
  ];
  const research = [
    {
      title:
        "Development obstacles of the Private sector in the Kurdistan Region of Iraq (The experience from SMEs in Erbil)",
      code: "JOURNAL OF CRITICAL REVIEWS, ISSN- 2394-5125 VOL 7, ISSUE 17, 2020",
    },
    {
      title:
        "The role of universities and research centers in private sector developments of the Kurdistan Region of Iraq (The experience from SMEs in Erbil)",
      code: "JOURNAL OF CRITICAL REVIEWS, ISSN- 2394-5125 VOL 7, ISSUE 17, 2020",
    },
    {
      title:
        "Understanding High-Performance Work Team (HPWT) Models: Going Beyond Employee Productivity as Related to (EPU) Identity, Eurasian Journal of Management & Social Sciences",
      code: "ISSN 2708, July 2021",
    },
  ];
  const editions = [
    {
      img: English,
      link: "https://www.amazon.com/Foreign-Direct-Investment-experience-Kurdistan/dp/6206182428/ref=sr_1_6?dib=eyJ2IjoiMSJ9.IhK6srgD7LIV7aBn3TZag52E7__qQ2P02hD6XUtS_QVuuODy9WljX9RJdSiT5YTF3r_DeaeH3sPZNo4rsAx38-AP6F8yfJGh-XGjBQPyg7g.dt6LG7zvztuahzcnhS26xPDBPni8s9_ctlHrpWMbvIU&dib_tag=se&qid=1716888562&refinements=p_27%3AZanear+Jabbar+Ssali&s=books&sr=1-6&text=Zanear+Jabbar+Ssali",
    },
    {
      img: Portugal,
      link: "https://www.amazon.com/Investimento-direto-estrangeiro-experi%C3%AAncia-Portuguese/dp/6206248364/ref=sr_1_1?dib=eyJ2IjoiMSJ9.IhK6srgD7LIV7aBn3TZag52E7__qQ2P02hD6XUtS_QVuuODy9WljX9RJdSiT5YTF3r_DeaeH3sPZNo4rsAx38-AP6F8yfJGh-XGjBQPyg7g.dt6LG7zvztuahzcnhS26xPDBPni8s9_ctlHrpWMbvIU&dib_tag=se&qid=1716888562&refinements=p_27%3AZanear+Jabbar+Ssali&s=books&sr=1-1&text=Zanear+Jabbar+Ssali",
    },
    {
      img: Italian,
      link: "https://www.amazon.com/Investimenti-diretti-esteri-Lesperienza-Kurdistan/dp/6206248356/ref=sr_1_2?dib=eyJ2IjoiMSJ9.IhK6srgD7LIV7aBn3TZag52E7__qQ2P02hD6XUtS_QVuuODy9WljX9RJdSiT5YTF3r_DeaeH3sPZNo4rsAx38-AP6F8yfJGh-XGjBQPyg7g.dt6LG7zvztuahzcnhS26xPDBPni8s9_ctlHrpWMbvIU&dib_tag=se&qid=1716888562&refinements=p_27%3AZanear+Jabbar+Ssali&s=books&sr=1-2&text=Zanear+Jabbar+Ssali",
    },
    {
      img: French,
      link: "https://www.amazon.com/Investissement-direct-%C3%A9tranger-Lexp%C3%A9rience-Kurdistan/dp/6206248348/ref=sr_1_3?dib=eyJ2IjoiMSJ9.IhK6srgD7LIV7aBn3TZag52E7__qQ2P02hD6XUtS_QVuuODy9WljX9RJdSiT5YTF3r_DeaeH3sPZNo4rsAx38-AP6F8yfJGh-XGjBQPyg7g.dt6LG7zvztuahzcnhS26xPDBPni8s9_ctlHrpWMbvIU&dib_tag=se&qid=1716888562&refinements=p_27%3AZanear+Jabbar+Ssali&s=books&sr=1-3&text=Zanear+Jabbar+Ssali",
    },
    {
      img: Spanish,
      link: "https://www.amazon.com/Inversi%C3%B3n-extranjera-directa-experiencia-Kurdist%C3%A1n/dp/620624833X/ref=sr_1_4?dib=eyJ2IjoiMSJ9.IhK6srgD7LIV7aBn3TZag52E7__qQ2P02hD6XUtS_QVuuODy9WljX9RJdSiT5YTF3r_DeaeH3sPZNo4rsAx38-AP6F8yfJGh-XGjBQPyg7g.dt6LG7zvztuahzcnhS26xPDBPni8s9_ctlHrpWMbvIU&dib_tag=se&qid=1716888562&refinements=p_27%3AZanear+Jabbar+Ssali&s=books&sr=1-4&text=Zanear+Jabbar+Ssali",
    },
    {
      img: Germany,
      link: "https://www.amazon.com/Ausl%C3%A4ndische-Direktinvestitionen-Erfahrungen-Region-Kurdistan/dp/6206248321/ref=sr_1_5?dib=eyJ2IjoiMSJ9.IhK6srgD7LIV7aBn3TZag52E7__qQ2P02hD6XUtS_QVuuODy9WljX9RJdSiT5YTF3r_DeaeH3sPZNo4rsAx38-AP6F8yfJGh-XGjBQPyg7g.dt6LG7zvztuahzcnhS26xPDBPni8s9_ctlHrpWMbvIU&dib_tag=se&qid=1716888562&refinements=p_27%3AZanear+Jabbar+Ssali&s=books&sr=1-5&text=Zanear+Jabbar+Ssali",
    },
  ];
  const socialMediaItemsKBL = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/zanear-jabbar/",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-linkedin fill-white hover:scale-110 duration-200 ease-in-out"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
        </svg>
      ),
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/business.consultant.99",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className={`bi bi-facebook fill-white hover:scale-110 duration-200 ease-in-out`}
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
      ),
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/zanear_jabbar/",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className={`bi bi-instagram fill-white hover:scale-110 duration-200 ease-in-out`}
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>
      ),
    },
  ];
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:gap-10 justify-center items-center  max-w-[1200px] mx-auto p-10 mb-5 md:mb-10">
        <div className="flex-col gap-5 hidden lg:flex">
          <div className="bg-white rounded-lg">
            <img src={CEO} alt="" className="w-60 lg:w-96 rounded-lg" />
          </div>
          <div className="flex items-center justify-around">
            {socialMediaItemsKBL.map((social, index) => {
              return (
                <div key={index} className="">
                  <a href={`${social.url}`} rel="noreferrer" target="_blank">
                    {social.img}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-2 text-center md:text-start">
          <div className="">
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="text-lg md:text-xl lg:text-2xl pb-3 mb-4 border-b-4 border-primary w-max mx-auto md:mx-0 font-bold"
            >
              Zanear Jabbar Ssali
            </p>
            {data.map((items, index) => {
              return (
                <p
                  key={index}
                  className="lg:text-xl mt-2"
                  data-aos={items.fade}
                  data-aos-duration={items.duration}
                  data-aos-delay={items.delay}
                >
                  - {items.title}
                </p>
              );
            })}
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1400"
              className="flex flex-wrap mt-5 gap-2 justify-center lg:justify-start items-center rounded-lg text-sm lg:text-md"
            >
              <div className="border-2 border-primary p-2 rounded-xl w-max">
                +964 750 4618 463
              </div>
              <div className="border-2 border-primary p-2 rounded-xl w-max">
                zanear.ssali@epu.edu.iq
              </div>
              <div className="border-2 border-primary p-2 rounded-xl w-max">
                zanear.ssali@strategic-allies.com
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:hidden">
          <div className="flex items-center justify-center bg-white rounded-lg ">
            <img src={CEO} alt="" className="rounded-lg" />
          </div>
          <div className="flex items-center justify-around">
            {socialMediaItemsKBL.map((social, index) => {
              return (
                <div key={index} className="">
                  <a href={`${social.url}`} rel="noreferrer" target="_blank">
                    {social.img}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto p-10 mb-5 md:mb-10">
        {" "}
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:text-xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Research Publications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 my-14 md:my-20">
          {research.map((serve, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <div className="w-full h-48 md:h-60 lg:h-52 rounded-lg duration-300 easa-in-out hover:shadow-lg ">
                  <div
                    className="flex flex-col items-center shadow-md bg-white h-full rounded text-black
                              relative after:bg-primary after:scale-y-0 after:hover:scale-y-100 after:p-20 after:absolute
                              after:h-full after:w-full after:bottom-[0] after:origin-bottom after:rounded after:left-[0] after:duration-300
                              after:ease-in-out after:z-0 hover:text-white delay-100	duration-100"
                  >
                    <div
                      className="bg-primary flex items-center justify-center my-[-30px] p-5 w-14 h-14
                               text-2xl text-white rounded-full border border-4 border-neutral z-10"
                    >
                      <div className="z-10">{index + 1}</div>
                    </div>
                    <div className=" p-5 my-5 flex flex-col gap-5">
                      <p className="text-justify text-sm lg:text-md font-semibold z-10">
                        {serve.title}
                      </p>
                      <p className="text-justify text-sm lg:text-md font-semibold z-10">
                        {serve.code}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:text-xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Foreign Direct Investment
        </p>
        <p
          className="lg:text-xl text-justify lg:text-center w-max mx-auto "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          The Experience of the Kurdistan Region of Iraq{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
          <div className="bg-light p-20 overflow-hidden ">
            <div
              className="max-w-[600px] mx-auto lg:mx-0 lg:ml-auto flex flex-col justify-center items-center gap-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={book}
                alt=""
                className="w-96 mx-auto hover:scale-110 duration-200 ease-in-out"
              />
              <div className="">
                <p
                  className="lg:text-xl text-justify lg:text-center w-max mx-auto mb-5 p-2 bg-primary rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  The Book's Editions
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-5">
                  {editions.map((edition, index) => {
                    return (
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        href={edition.link}
                        target="_blank"
                        key={index}
                        className="border-b-2 border-primary mx-auto pb-[1.2px] hover:border-white duration-100 ease-in-out"
                      >
                        <img
                          className="w-20 md:w-28 rounded"
                          src={edition.img}
                          alt=""
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-sm md:text-lg max-w-[600px] mx-auto lg:mx-0 lg:mr-auto p-10 lg:p-20 text-justify"
            >
              <p>
                Over the last few decades, FDI in is remarkably considered as an
                effective forms of international business activities globally
                and becoming more important in terms of the economic development
                in developing countries. Almost all developing countries
                interested in attracting MNEs to access to different sources
                through their long- term activities, in order to support the
                economic development. Thus, the policy makers have tried to
                issue friendly investment laws and policies to make an
                appropriate climate for foreign investor's direct activities.
                <br />
                <br />
                Since 1991, the Kurds in Iraq have decided to establish an
                autonomous region in northern Iraq after decades of military and
                political efforts to self-rule. In 2005 the Iraqi Constitution,
                officially recognized Kurdistan as a federal region, which run
                by the Kurdistan Regional Government (KRG). The population of
                Kurdistan is estimated at over 6 million, which includes up to
                20% of the population of Iraq.
                <br />
                <br />
                From 2003, Kurdistan has become more considerable area in terms
                of different economic activities. The region is recognized as a
                new and unexploited area with massive economic opportunities for
                local and foreign investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
