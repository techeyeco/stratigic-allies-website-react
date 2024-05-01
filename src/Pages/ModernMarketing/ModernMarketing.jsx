import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ModernMarketing() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="text-center my-10  mx-auto">
      <p
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto"
      >
        Essentials of Modern Marketing
      </p>
      <p
        className="text-xl lg:text-2xl text-center"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        Essentials of Modern Marketing book (EOMM) – Iraq edition
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center my-5">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="bg-primary text-lg md:text-xl lg:text-2xl p-16 lg:p-20 text-justify"
        >
          EOMM is one of the projects that Kotler Impact and Strategic Allies
          are collaborating on. It is the first marketing book in the world that
          focuses on market-specific success stories from a variety of nations
          all over the globe.
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="text-lg md:text-xl lg:text-2xl p-16 lg:p-20 text-justify"
        >
          For the first time, the Iraqi edition of 'Essentials of Modern
          Marketing' will be published in 2024. Now, there is an opportunity for
          leading and fruitful corporations and businesses in Iraq and the
          Kurdistan region to join and share their success stories in this
          outstanding work via Strategic Allies Company as an exclusive partner
          of Kotler Impact in Iraq.
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE46ssWvix-2bDxazIViCj7RsPBygzoHj6eKXUxGy1KsPqTg/viewform?vc=0&c=0&w=1&flr=0&pli=1"
          className="p-5 px-10 border-2 border-primary text-xl rounded-lg text-center hover:bg-primary hover:shadow-2xl hover:shadow-primary/50 duration-300 ease-in-out "
        >
          Share Your Success Story
        </a>
      </div>
    </section>
  );
}
