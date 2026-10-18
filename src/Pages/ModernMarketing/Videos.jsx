import React from "react";
const video1 = "https://www.youtube.com/embed/VDm8r9w2hjc?si=ZJXLg3sIRQDXyTPa";
const video2 = "https://www.youtube.com/embed/u0S44JFB9LI";
const video3 = "https://www.youtube.com/embed/k9HNLrqq0KU?si=YM1g8iA2gN5-bQfU";
const video4 = "https://www.youtube.com/embed/7zEr8ittsvg?si=eZpfpO-dAhG30xFd";
const video5 = "https://www.youtube.com/embed/2EvMVkgOq2I?si=hXWC0mppKrcqxgQc";
const video6 = "https://www.youtube.com/embed/osVoONlveJU?si=bqXN5USz7sUDLxfa";
const video7 = "https://www.youtube.com/embed/OD8xfI-mbjY?si=V6s1JBpBgXtF9u8-";
const video8 = "https://www.youtube.com/embed/ErrjgW0vQew?si=T2UETAzJiB3faxE-";
const video9 = "https://www.youtube.com/embed/AavgyNLF2Xs?si=puwpfd-RsL96XAYY";

import img1 from "../../assets/video/1.png";
import img2 from "../../assets/video/2.png";
import img3 from "../../assets/video/3.png";
import img4 from "../../assets/video/4.png";
import img5 from "../../assets/video/5.png";
import img6 from "../../assets/video/6.png";
import img7 from "../../assets/video/7.png";
import img8 from "../../assets/video/8.png";
import img9 from "../../assets/video/9.png";

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
    {
      video: video8,
      thumb: img8,
    },
    {
      video: video9,
      thumb: img9,
    },
  ];

  return (
    <section>
      <div className="flex flex-col justify-center items-center max-w-[1600px] mx-auto mb-10 p-10 lg:px-20 gap-10">
        <iframe
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full aspect-video"
          src={activeVid}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

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
