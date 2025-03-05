import React from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { SiDavinciresolve } from "react-icons/si";
import manaeger from "../../assets/accounting sloutions/manager.png";

import { RiGuideLine } from "react-icons/ri";
import { MdMenuBook } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";

import { images1, images2, images3, images4, images5 } from "./images";
import video from "../../assets/accounting sloutions/video v2.mp4";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

const data = [
  {
    title: "Accounting & Bookkeeping",
    col: "col-span-4 lg:col-span-2",
    sub: [
      "- Financial reporting & analysis",
      "- Tax compliance & filing",
      "- Payroll management & automation",
    ],
  },
  {
    title: "Accounting Software Solutions",
    col: "col-span-4 lg:col-span-2",
    sub: [
      "- Training for in-house finance teams",
      "- Automation & optimization of accounting processes",
    ],
  },
  {
    title: "Auditing & Compliance",
    col: "col-span-4 lg:col-span-2",
    sub: [
      "- Internal audits & financial risk assessment",
      "- Fraud detection & prevention",
      "- Regulatory compliance & reporting",
    ],
  },
  {
    title: "Accounting Department Evaluation & Consulting",
    col: "col-span-4 lg:col-span-2",
    sub: [
      "- Process optimization & workflow enhancement",
      "- Compliance assessment & risk management",
      "- Financial health & performance evaluation",
    ],
  },
  {
    title: "Training & Development",
    col: "col-span-4",
    sub: [
      "- Public & private courses in accounting, auditing, taxation, and financial management",
      "- Online & in-class training sessions",
      "- Certification will be provided upon successful completion of the courses.",
    ],
  },

  {
    title: "Accounting & Auditing Talent Solutions",
    col: "col-span-4",
    sub: [
      "At Strategic Allies, we not only provide top-tier accounting and auditing training but also assist companies in building high-performing financial teams. Our services include Talent Acquisition Support – Helping businesses find and onboard qualified accounting and auditing professionals who meet industry standards.",
    ],
  },
];

const whyUs = [
  {
    title: "Expert Guidance",
    text: "Led by finance and accounting professionals",
    top: "top-[5rem] md:top-[6rem]",
    icon: <RiGuideLine />,
  },
  {
    title: "Tailored Solutions",
    text: "Custom services for businesses of all sizes",
    top: "top-[9rem] md:top-[12rem]",
    icon: <SiDavinciresolve />,
  },
  {
    title: "Flexible Learning",
    text: "Online & in-class training options",
    top: "top-[13rem] md:top-[18rem]",
    icon: <MdMenuBook />,
  },
  {
    title: "Technology-Driven",
    text: "Utilizing modern accounting systems & automation tools",
    top: "top-[16rem] md:top-[24rem]",
    icon: <GrTechnology />,
  },
];
export default function AccountingSolutions() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="text-center py-10 flex flex-col gap-5 md:gap-10">
      <div className="max-w-[1200px] mx-auto overflow-hidden">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Accounting Solutions
        </p>
        <p
          className="lg:text-lg text-center m-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          At Strategic Allies, we provide expert accounting, auditing,
          consulting, and training services to help businesses enhance financial
          efficiency, compliance, and growth.
        </p>
        <video
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full"
          controls
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="max-w-[1200px] mx-auto p-5 overflow-hidden">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Our Services
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-stretch gap-5">
          {data.map((item, index) => {
            let delaySub = 0;

            return (
              <div
                key={index}
                className={`border-t-2 border-primary rounded-lg overflow-hidden relative text-primary h-full ${item.col}`}
              >
                <p className="bg-light w-6 h-6 rounded-e rounded-t-none absolute font-semibold ">
                  {index + 1}
                </p>
                <p className="lg:text-lg p-4 text-light bg-primary">
                  {item.title}
                </p>

                <div className="h-full bg-light text-xs lg:text-base text-start">
                  {item.sub.map((subItem, indexSub) => {
                    delaySub += 100;

                    return (
                      <p
                        key={indexSub}
                        className="p-2 px-3 border-t border-primary "
                        data-aos={"fade-up"}
                        data-aos-duration={1000}
                        data-aos-delay={delaySub}
                      >
                        {subItem}{" "}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="max-w-[1200px] p-5 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          slidesPerView={2.5}
          centeredSlides={true}
          spaceBetween={24}
          modules={[Pagination, Autoplay, Keyboard]}
          className="mySwiper"
        >
          {images1.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-[250px] md:h-[300px] object-cover"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="max-w-[1200px] p-5 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true, // Moves slides in reverse
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          slidesPerView={2.5}
          centeredSlides={true}
          spaceBetween={24}
          modules={[Pagination, Autoplay, Keyboard]}
          className="mySwiper"
        >
          {images2.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-[250px] md:h-[300px] object-cover"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <div className="flex flex-col gap-5 md:gap-10 py-10 relative">
        <div className="">
          <div className="max-w-[1400px] mx-auto p-5 py-10 flex flex-col items-center gap-20">
            <div className="sticky top-5">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-lg lg:text-3xl font-bold mb-10 pb-5 border-b-4 border-primary w-max mx-auto "
              >
                Why Choose Strategic Allies?{" "}
              </p>
            </div>

            {whyUs.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`text-light md:font-semibold text-sm md:text-2xl rounded-lg bg-primary  flex justify-between items-center sticky p-1 md:p-5 w-full ${item.top}`}
                >
                  <p className="text-start">
                    <span className="hidden md:inline">{index + 1}. </span>{" "}
                    {item.title} <span className="font-light	">{item.text}</span>
                  </p>
                  <div className="text-4xl hidden md:block">{item?.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:gap-10   max-w-[1200px] mx-auto p-10 mb-5 md:mb-10">
        <div className="flex flex-col gap-5 items-center">
          <div className="bg-white rounded-lg w-80 ">
            <img src={manaeger} alt="" className="rounded-lg" />
          </div>
          <p className="text-sm">
            Head of Accounting Solutions at Strategic Allies{" "}
          </p>
        </div>
        <div className="col-span-2 text-center md:text-start">
          <div className="">
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="text-lg md:text-xl lg:text-xl pb-3 mb-4 border-b-4 border-primary w-max mx-auto md:mx-0 font-bold"
            >
              Mr. Saman Abdulla{" "}
            </p>

            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex flex-col mt-5 gap-2 rounded-lg text-sm lg:text-md"
            >
              <div className=" border-2 border-primary p-2 rounded-xl lg:w-max">
                +964 774 055 25 25{" "}
              </div>
              <div className=" border-2 border-primary p-2 rounded-xl lg:w-max">
                +964 750 305 48 64{" "}
              </div>
              <div className=" border-2 border-primary p-2 rounded-xl lg:w-max">
                info@strategic-allies.com{" "}
              </div>
              <div className=" border-2 border-primary p-2 rounded-xl lg:w-max">
                Iraq, Erbil, 60m, Appellate Court St. HMH Building
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-[1200px] p-5 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          slidesPerView={2.5}
          centeredSlides={true}
          spaceBetween={24}
          modules={[Pagination, Autoplay, Keyboard]}
          className="mySwiper"
        >
          {images3.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-[250px] md:h-[300px] object-cover"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="max-w-[1200px] p-5 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true, // Moves slides in reverse
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          slidesPerView={2.5}
          centeredSlides={true}
          spaceBetween={24}
          modules={[Pagination, Autoplay, Keyboard]}
          className="mySwiper"
        >
          {images4.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-[250px] md:h-[300px] object-cover"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="max-w-[1200px] p-5 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          slidesPerView={2.5}
          centeredSlides={true}
          spaceBetween={24}
          modules={[Pagination, Autoplay, Keyboard]}
          className="mySwiper"
        >
          {images5.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-[250px] md:h-[300px] object-cover"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </section>
  );
}
