import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const second = [
  {
    title: "Recognize the significance of sales in business's success.",
    fade: "fade-up",
    duration: 1500,
    delay: 200,
  },
  {
    title: "Discover how to succeed as a sales professional.",
    fade: "fade-up",
    duration: 1500,
    delay: 400,
  },
  {
    title: "Identifying consumer types and effective selling strategies.",
    fade: "fade-up",
    duration: 1500,
    delay: 600,
  },
  {
    title: "Discover how to build trust with consumers.",
    fade: "fade-up",
    duration: 1500,
    delay: 800,
  },
  {
    title: "Learn how to plan and execute professional presentations.",
    fade: "fade-up",
    duration: 1500,
    delay: 1000,
  },
  {
    title: "Learn how to cope with challenging customers.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
  {
    title: "Recognizing the value of negotiating abilities in sales.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
  {
    title: "Improve communication abilities in customer service.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
  {
    title:
      "Recognize ways for maintaining professionalism in customer service.",
    fade: "fade-up",
    duration: 1500,
    delay: 1200,
  },
];

export default function BSS() {
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
            className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
          >
            BSS{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="lg:text-xl text-justify"
          >
            The Business Seminar Series “BSS” is a business program that focuses
            on the topics and concepts in business developments related themes
            in a basic level. The main aim of BSS is to introduce essential
            business concepts in a brief to a number of individuals that
            interested in improvements, and to identify potential prospects who
            interested in this field in order to provide them with more advance
            service in this filed. The program is exclusively owned by the
            Business Development Consultant and Trainer “Zanear Jabbar Ssali”.
          </p>
        </div>
      </div>
    </section>
  );
}
