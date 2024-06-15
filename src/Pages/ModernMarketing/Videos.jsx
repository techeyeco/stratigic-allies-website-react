import React from "react";
import video1 from "../../assets/video/WhatsApp Video 2024-05-14 at 16.23.40_f34723d2.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";
import video4 from "../../assets/video/video4.mp4";
import video5 from "../../assets/video/video5.mp4";

export default function Videos() {
  const [activeVid, setActiveVid] = React.useState(video1);
  const videos = [
    {
      video: video1,
    },
    {
      video: video2,
    },
    {
      video: video3,
    },
    {
      video: video4,
    },
    {
      video: video5,
    },
  ];

  return (
    <section>
      <div className="flex flex-col justify-center items-center max-w-[1400px] mx-auto mb-10 p-10 lg:px-20 gap-10">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center">
          {videos?.map((video, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              className="cursor-pointer"
            >
              <video
                className="w-full h-auto"
                onClick={() => setActiveVid(video?.video)}
              >
                <source src={video?.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
