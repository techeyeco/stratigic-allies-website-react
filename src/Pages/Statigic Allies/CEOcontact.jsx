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
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:gap-10 justify-center items-center  max-w-[1200px] mx-auto p-10 mb-5 md:mb-10">
        <div className="hidden lg:block bg-white rounded-lg">
          <img src={CEO} alt="" className="w-60 lg:w-96 rounded-lg" />
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
        <div className="flex items-center justify-center lg:hidden bg-white rounded-lg ">
          <img src={CEO} alt="" className="rounded-lg" />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto p-10 mb-5 md:mb-10">
        {" "}
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:text-xl lg:text-2xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Research Publications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-16 my-14 md:my-20">
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
                      className="bg-primary flex items-center justify-center my-[-40px] p-5 w-16
                            h-16 text-3xl text-white rounded-full border border-4 border-neutral z-10"
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
