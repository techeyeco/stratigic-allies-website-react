import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// --- Replace these with your real asset paths ---
import bookCover from "../../assets/B2B/bookcover.png";
import kotlerImpactLogo from "../../assets/kotlerlogo-white.png";
import strategicAllies from "../../assets/logo/Vertical 01.png";
import phoenixTower from "../../assets/B2B/phoneix-tower.jpg";

import authorKotler from "../../assets/PK.png";
import authorZanear from "../../assets/CEO1.png";
import drWaldemar from "../../assets/B2B/drWaldemar.png";

import siemens from "../../assets/B2B/siemens.png";
import lenovo from "../../assets/B2B/lenovo.png";
import qatarAirways from "../../assets/B2B/qatar-airways.png";
import nestle from "../../assets/B2B/nestle.png";
import aljazeera from "../../assets/B2B/aljazeera.png";
import ibm from "../../assets/B2B/ibm.png";
import samsung from "../../assets/B2B/samsung.png";
import fedex from "../../assets/B2B/fedex.png";
import tataSteel from "../../assets/B2B/tata-steel.png";
import google from "../../assets/B2B/google.png";

import board1 from "../../assets/board/img5.png";
import board2 from "../../assets/board/img16.png";
import board3 from "../../assets/board/img3.png";
import board4 from "../../assets/board/img19.png";
import board5 from "../../assets/board/img22.jpg";

export default function B2BBrandManagement() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  const authors = [
    {
      name: "Prof. Philip Kotler",
      title: "Father of Modern Marketing",
      img: authorKotler,
    },
    {
      name: "Dr. Waldemar Pfoertsch",
      title: "B2B Branding Expert",
      img: drWaldemar,
    },
    {
      name: "Zanear Jabbar Ssali",
      title: "CEO, Strategic Allies",
      img: authorZanear,
    },
  ];

  const journey = [
    {
      step: "01",
      title: "Nomination",
      details:
        "Your company is nominated as a featured case study for the Iraq Edition.",
    },
    {
      step: "02",
      title: "Interview",
      details:
        "Leadership sits down with the author team for an in-depth interview.",
    },
    {
      step: "03",
      title: "Case Study Development",
      details:
        "Your story is professionally written, then reviewed and approved by your team.",
    },
    {
      step: "04",
      title: "Publication",
      details:
        "Your case study is featured in B2B Brand Management, Iraq Edition 2027.",
    },
    {
      step: "05",
      title: "Global Distribution",
      details:
        "Published and distributed worldwide across Amazon and major platforms.",
    },
  ];

  const values = [
    {
      title: "Global Exposure & Legacy",
      details:
        "Your success story will be permanently documented, published, and distributed worldwide across major global platforms, including Amazon and local distribution channels.",
    },
    {
      title: "Elite Brand Positioning",
      details:
        "Align your company alongside global industry titans previously featured in this publication series, including Siemens, Lenovo, Qatar Airways, Samsung, FedEx, IBM, and Tata Steel.",
    },
    {
      title: "Regional Market Leadership",
      details:
        "Strengthen your position as an authoritative market leader in Iraq and the broader Middle East, demonstrating benchmark excellence to stakeholders, investors, and B2B partners.",
    },
  ];

  const globalLogos = [
    siemens,
    lenovo,
    qatarAirways,
    nestle,
    aljazeera,
    ibm,
    samsung,
    fedex,
    tataSteel,
    google,
  ];

  const board = [
    {
      name: "Assistant Professor Dr. Rizgar Saed Hussein",
      role: "Vice President for Student Affairs",
      university: "Soran University",
      img: board1,
    },
    {
      name: "Sanarya Adnan Anwer",
      university: "University of Kurdistan Hawler",
      role: "PhD Candidate in Business Administration",
      img: board2,
    },
    {
      name: "Prof. Dr. Wasfi Kahwachi",
      university: "Tishk International University",
      role: "Dean of scientific research",
      img: board3,
    },
    {
      name: "Zanear Jabbar Ssali",
      university: "Erbil Polytechnic University",
      role: "Chair, Kotler Impact Advisory Board Iraq",
      img: board4,
    },
    {
      name: "Mr. Rezhwan Mohammed",
      university: "Cihan University Duhok",
      role: "Business Administration Department",
      img: board5,
    },
  ];

  return (
    <section className="text-center overflow-hidden">
      <div className="relative bg-gradient-to-b from-primary to-secondary text-light overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-10 md:p-20">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-left flex flex-col gap-6"
          >
            <p className="uppercase tracking-widest text-sm text-white/90">
              Official Partnership &middot; Iraq Edition 2027
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              B2B Brand
              <br />
              Management
            </h1>
            <p className="text-lg text-white/80 max-w-xl text-justify">
              A landmark case-studies collection by Philip Kotler, Waldemar
              Pfoertsch, and Zanear Jabbar Ssali, bringing Iraq&apos;s leading
              brands onto the global stage through Strategic Allies&apos;
              exclusive partnership with Kotler Impact.
            </p>
            <div className="flex items-center gap-8 mt-4 ">
              <img
                src={kotlerImpactLogo}
                alt="Kotler Impact"
                className="h-12 object-contain "
              />
              <img
                src={strategicAllies}
                alt="Strategic Allies"
                className="h-12 object-contain"
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex justify-center"
          >
            <img
              src={bookCover}
              alt="B2B Brand Management book cover"
              className="w-64 md:w-80 drop-shadow-2xl hover:scale-105 duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* AUTHORS — three-up cards, different from the single-portrait layout used in ModernMarketing */}
      <div className="max-w-[1600px] mx-auto p-10 md:p-16">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-10"
        >
          Authored By
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
              className="flex flex-col items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary hover:shadow-xl duration-300 ease-in-out"
            >
              <div className="w-32 md:w-40 h-32 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md ">
                <img
                  src={author.img}
                  alt={author.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-lg font-semibold">{author.name}</p>
              <p className="text-sm">{author.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* JOURNEY — numbered horizontal process flow (new pattern, not used in the other pages) */}
      <div className="bg-light py-8">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-xl lg:text-3xl font-bold mb-3"
          >
            The Path to Global Recognition
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-neutral/80 mb-14 max-w-2xl mx-auto"
          >
            How your company&apos;s story becomes part of the collection — from
            nomination to worldwide publication.
          </p>
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-neutral/20 -z-0" />
            {journey.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 120}
                className="relative z-10 flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {item.step}
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-neutral/80 text-justify">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STRATEGIC VALUES — icon-style cards instead of a checklist */}
      <div className="max-w-[1600px] mx-auto p-10 md:p-16">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-10"
        >
          Strategic Values
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {values.map((value, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <div className="text-left p-5 rounded-2xl border-2 border-primary/75 hover:border-primary duration-300 ease-in-out">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <p className="font-semibold text-lg mb-2">{value.title}</p>
                <p className="text-sm text-light/80 hover:text-light duration-300 ease-in-out text-justify">
                  {value.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GLOBAL SUCCESS STORIES — logo grid with show more, restyled as soft cards */}
      <GlobalLogos logos={globalLogos} />

      {/* ADVISORY BOARD — circular avatar cards instead of full rectangular photos */}
      <AdvisoryBoard board={board} />

      {/* GALLERY */}
      {/* <section className="max-w-[1600px] p-5 md:p-10 mx-auto">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-10"
        >
          Gallery
        </p>
        <Swiper
          pagination={{ dynamicBullets: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          loop={true}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={24}
          modules={[Pagination, Autoplay, Keyboard]}
          className="mySwiper"
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-[250px] md:h-[500px] object-cover rounded-xl"
                src={image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}

      {/* VENUE / CONTACT — dark closing card */}
      <div className="relative">
        <img
          src={phoenixTower}
          alt="Phoenix Tower, Erbil"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80 flex flex-col items-center justify-center text-light gap-4 p-5">
          <img
            src={strategicAllies}
            alt="Strategic Allies"
            className="h-12 object-contain"
          />
          <p className="text-2xl md:text-3xl font-bold">Sustain Your Success</p>
          <p className="text-white/80">
            1210 Phoenix Tower, Waziran, Erbil, Kurdistan Region, Iraq
          </p>
          <p className="text-white/80">www.strategic-allies.com</p>
        </div>
      </div>
    </section>
  );
}

function GlobalLogos({ logos }) {
  return (
    <div className="bg-light py-8">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-3 text-primary"
        >
          Success Stories, Globally
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-neutral/80 mb-10"
        >
          From successful and leading brands and corporations already featured
          in the collection.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(index % 5) * 100}
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg duration-300 ease-in-out p-6 flex items-center justify-center">
                <img src={logo} alt="" className="w-full h-16 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdvisoryBoard({ board }) {
  return (
    <div className="max-w-[1600px] mx-auto p-10 md:p-16">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-xl lg:text-3xl font-bold mb-10"
      >
        Kotler Impact Advisory Board Iraq
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {board.map((person, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 150}
            // w-full on mobile, and calculated width for 3 columns on desktop (accounting for the gap)
            className="flex flex-col items-center gap-3 text-center w-full md:w-[calc(33.333%-1.35rem)]"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-28 h-28 rounded-full object-cover object-top saturate-0 border-4 border-light shadow-md"
            />
            <p className="font-semibold">{person.name}</p>
            <div>
              <span className="text-xs text-light/80">{person.role}</span>
              &nbsp;.&nbsp;
              <span className="text-xs text-light/80">{person.university}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
