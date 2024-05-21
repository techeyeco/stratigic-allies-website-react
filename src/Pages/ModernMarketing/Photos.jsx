import React from "react";
import img1 from "../../assets/photos slider/1.jpg";
import img2 from "../../assets/photos slider/2.jpg";
import img3 from "../../assets/photos slider/3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

export default function Photos() {
  return (
    <section className="max-w-[1200px] mx-auto">
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
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={24}
        modules={[Pagination, Autoplay, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[250px] md:h-[500px] lg:h-[700px] object-cover"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[250px] md:h-[500px] lg:h-[700px] object-cover"
            src={img2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[250px] md:h-[500px] lg:h-[700px] object-cover"
            src={img3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
