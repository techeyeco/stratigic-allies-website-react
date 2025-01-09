import React from "react";
import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";
import video4 from "../../assets/video/video4.mp4";
import video5 from "../../assets/video/video5.mp4";
import video6 from "../../assets/video/video6.mp4";
import video7 from "../../assets/video/video7.mp4";

import img1 from "../../assets/video/1.png";
import img2 from "../../assets/video/2.png";
import img3 from "../../assets/video/3.png";
import img4 from "../../assets/video/4.png";
import img5 from "../../assets/video/5.png";
import img6 from "../../assets/video/6.png";
import img7 from "../../assets/video/7.png";

export default function Videos() {
  const [activeVid, setActiveVid] = React.useState(video1);
  const videos = [
    {
      video: video1,
      thumb: img1,
    },
    {
      video: video2,
      thumb: img2,
    },
    {
      video: video3,
      thumb: img3,
    },
    {
      video: video4,
      thumb: img4,
    },
    {
      video: video5,
      thumb: img5,
    },
    {
      video: video6,
      thumb: img6,
    },
    {
      video: video7,
      thumb: img7,
    },
  ];

  return (
    <section>
      <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto mb-10 p-10 lg:px-20 gap-10">
        {activeVid == video1 && (
          <video
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full"
            controls
          >
            <source src={video1} type="video/mp4" />
          </video>
        )}
        {activeVid == video2 && (
          <video
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full"
            controls
          >
            <source src={video2} type="video/mp4" />
          </video>
        )}
        {activeVid == video3 && (
          <video
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full"
            controls
          >
            <source src={video3} type="video/mp4" />
          </video>
        )}
        {activeVid == video4 && (
          <video
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full"
            controls
          >
            <source src={video4} type="video/mp4" />
          </video>
        )}{" "}
        {activeVid == video5 && (
          <video
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full"
            controls
          >
            <source src={video5} type="video/mp4" />
          </video>
        )}
        {activeVid == video6 && (
          <video
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full"
            controls
          >
            <source src={video6} type="video/mp4" />
          </video>
        )}
        {activeVid == video7 && (
          <video
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full"
            controls
          >
            <source src={video7} type="video/mp4" />
          </video>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center">
          {videos?.map((video, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              className="cursor-pointer"
            >
              <img
                className="w-full h-50"
                onClick={() => setActiveVid(video?.video)}
                src={video?.thumb}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
