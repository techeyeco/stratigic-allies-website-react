import React from "react";
import img1 from "../../assets/photos slider/1.jpg";
import img2 from "../../assets/photos slider/2.jpg";
import img3 from "../../assets/photos slider/3.jpg";
import img4 from "../../assets/photos slider/4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

const images = [img1, img2, img4, img3];

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
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="w-full h-[250px] md:h-[500px] lg:h-[700px] object-cover"
                src={image}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
