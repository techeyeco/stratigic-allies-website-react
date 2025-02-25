import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Netherlands from "../../assets/countries/Netherlands.png";
import Poland from "../../assets/countries/Poland.png";
import Italy from "../../assets/countries/Italy.png";
import Jordan from "../../assets/countries/Jordan.png";
import Bangladesh from "../../assets/countries/Bangladesh.png";
import Bolivia from "../../assets/countries/Bolivia.png";
import India from "../../assets/countries/India.png";
import Pakistan from "../../assets/countries/Pakistan.png";
// !2023
import Iraq from "../../assets/countries/2024/Iraq.png";
import CentralAmerica from "../../assets/countries/2024/CentralAmerica.png";
import NORDIC from "../../assets/countries/2024/NORDIC Countries.jpg";
import Nigeria from "../../assets/countries/2024/Nigeria.png";
import Kazakhstan from "../../assets/countries/2024/Kazakhstan.png";
import Meghrabian from "../../assets/countries/2024/Meghrabian.png";
import Armina from "../../assets/countries/2024/Armina.png";
import Syria from "../../assets/countries/2024/Syria.png";
import Myanmar from "../../assets/countries/2024/Myanmar.png";
import Georgian from "../../assets/countries/2024/Georgian.png";
import Bahrain from "../../assets/countries/2024/Bahrain.png";
import SriLanka from "../../assets/countries/2024/Sri Lanka.png";
import Brazil from "../../assets/countries/2024/Brazil.png";
import Maldives from "../../assets/countries/2024/Maldives.png";
import Germany from "../../assets/countries/2024/Germany.png";

const countries = [
  { name: "Netherlands", img: Netherlands },
  { name: "Poland", img: Poland },
  { name: "Italy", img: Italy },
  { name: "Jordan", img: Jordan },
  { name: "Bangladesh", img: Bangladesh },
  { name: "Bolivia", img: Bolivia },
  { name: "India", img: India },
  { name: "Pakistan", img: Pakistan },
  // ?publishing
  { name: "Iraq", img: Iraq },
  { name: "Central America", img: CentralAmerica },
  { name: "NORDIC", img: NORDIC },
  { name: "Nigeria", img: Nigeria },
  { name: "Kazakhstan", img: Kazakhstan },
  { name: "Meghrabian", img: Meghrabian },
  { name: "Armina", img: Armina },
  { name: "Syria", img: Syria },
  { name: "Myanmar", img: Myanmar },
  { name: "Georgian", img: Georgian },
  { name: "Bahrain", img: Bahrain },
  { name: "Sri Lanka", img: SriLanka },
  { name: "Brazil", img: Brazil },
  { name: "Maldives", img: Maldives },
  { name: "Germany", img: Germany },
];
export default function Edition() {
  const [moreComp, setMoreComp] = React.useState(false);
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto mb-10 p-5 lg:p-10">
      <div className="mb-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Success Stories
        </p>
        <p
          className="text-xl lg:text-xl text-center m-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          The Book has been published in several countries{" "}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-10 ">
          {countries.map((contry, index) => {
            return (
              (index == 0 ||
                index == 1 ||
                index == 2 ||
                index == 3 ||
                index == 4 ||
                index == 5 ||
                index == 6 ||
                index == 7) && (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-32 md:w-56 lg:w-60 md:h-40 bg-white overflow-hidden mx-auto"
                >
                  <p className="bg-primary md:text-xl p-1">{contry?.name}</p>
                  <img
                    src={contry?.img}
                    alt=""
                    className="w-full h-full p-5 object-contain"
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className="mb-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
        >
          Publishing Countries in 2024
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-10">
          {countries.map((contry, index) => {
            return (
              (index == 8 || index == 9 || index == 10 || index == 11) && (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-32 md:w-56 lg:w-60 md:h-40 bg-white overflow-hidden mx-auto"
                >
                  <p className="bg-primary md:text-xl p-1">{contry?.name}</p>
                  <img
                    src={contry?.img}
                    alt=""
                    className="w-full h-full p-5 object-contain "
                  />
                </div>
              )
            );
          })}
          {moreComp &&
            countries.map((contry, index) => {
              return (
                !(
                  index == 0 ||
                  index == 1 ||
                  index == 2 ||
                  index == 3 ||
                  index == 4 ||
                  index == 5 ||
                  index == 6 ||
                  index == 7 ||
                  index == 8 ||
                  index == 9 ||
                  index == 10 ||
                  index == 11
                ) && (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-32 md:w-56 lg:w-60 md:h-40 bg-white overflow-hidden mx-auto"
                  >
                    <p className="bg-primary md:text-xl p-1">{contry?.name}</p>
                    <img
                      src={contry?.img}
                      alt=""
                      className="w-full h-full p-5 object-contain "
                    />
                  </div>
                )
              );
            })}
        </div>
        <div className="mt-10 ">
          <button
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            className="flex justify-center items-center gap-2 mx-auto"
            onClick={() => setMoreComp((prevState) => !prevState)}
          >
            <p className="md:text-lg lg:text-xl">
              Show {moreComp ? "Less" : "More"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className={`bi bi-caret-down ${moreComp && "rotate-180"}`}
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
