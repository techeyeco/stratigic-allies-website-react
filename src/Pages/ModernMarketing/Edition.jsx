import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import google from "../../assets/companies/google.png";
import lays from "../../assets/companies/lays.png";
import forbes from "../../assets/companies/forbes.png";
import lotto from "../../assets/companies/lotto.png";
import bnal from "../../assets/companies/bnal.png";
import kozminski from "../../assets/companies/kozminski.jpg";
import lambo from "../../assets/companies/lambo.png";
import enterpreneur from "../../assets/companies/enterpreneur.png";
import knauf from "../../assets/companies/knauf.png";
import wwf from "../../assets/companies/wwf.png";
import meta from "../../assets/companies/meta.png";
import cocacola from "../../assets/companies/cocacola.png";
import danone from "../../assets/companies/danone.png";
import shein from "../../assets/companies/shein.png";
import mwm from "../../assets/companies/mwm.png";
import mas from "../../assets/companies/mas.jpg";
import bright from "../../assets/companies/bright.png";
import zom from "../../assets/companies/zom.png";
import rudaw from "../../assets/companies/rudaw.png";

import Netherlands from "../../assets/countries/Netherlands.png";
import Poland from "../../assets/countries/Poland.png";
import Pakistan from "../../assets/countries/Pakistan.png";
import India from "../../assets/countries/India.png";
import Italy from "../../assets/countries/Italy.png";
import Bangladesh from "../../assets/countries/Bangladesh.png";
// !2023
import Iraq from "../../assets/countries/2024/Iraq.png";
import CentralAmerica from "../../assets/countries/2024/CentralAmerica.png";
import NORDIC from "../../assets/countries/2024/NORDIC Countries.jpg";
import Bolivia from "../../assets/countries/2024/Bolivia.png";
import Nigeria from "../../assets/countries/2024/Nigeria.png";
import Kazakhstan from "../../assets/countries/2024/Kazakhstan.png";
import Meghrabian from "../../assets/countries/2024/Meghrabian.png";
import SaudiArabia from "../../assets/countries/2024/Saudi Arabia.png";
import Armina from "../../assets/countries/2024/Armina.png";
import Syria from "../../assets/countries/2024/Syria.png";
import Myanmar from "../../assets/countries/2024/Myanmar.png";
import Georgian from "../../assets/countries/2024/Georgian.png";
import Bahrain from "../../assets/countries/2024/Bahrain.png";
import SriLanka from "../../assets/countries/2024/Sri Lanka.png";
import Brazil from "../../assets/countries/2024/Brazil.png";
import Maldives from "../../assets/countries/2024/Maldives.png";
import Germany from "../../assets/countries/2024/Germany.png";

const comp = [
  { name: "Netherlands", img: Netherlands },
  { name: "Poland", img: Poland },
  { name: "Pakistan", img: Pakistan },
  { name: "India", img: India },
  { name: "Italy", img: Italy },
  { name: "Bangladesh", img: Bangladesh },
  { name: "Iraq", img: Iraq },
  { name: "Central America", img: CentralAmerica },
  { name: "NORDIC", img: NORDIC },
  { name: "Bolivia", img: Bolivia },
  { name: "Nigeria", img: Nigeria },
  { name: "Kazakhstan", img: Kazakhstan },
  { name: "Meghrabian", img: Meghrabian },
  { name: "Saudi Arabia", img: SaudiArabia },
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
    <section className="max-w-[1200px] mx-auto mb-10 p-10">
      {" "}
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-2xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto "
      >
        Success Stories{" "}
      </p>
      <p
        className="text-xl lg:text-2xl text-center m-5"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        from successful and leading brands and corporations
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-10 ">
        {comp.map((contry, index) => {
          return (
            (index == 0 ||
              index == 1 ||
              index == 2 ||
              index == 3 ||
              index == 4) && (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-32 md:w-40 lg:w-48 h-40 bg-white overflow-hidden mx-auto"
              >
                <p className="bg-primary md:text-xl p-1">{contry.name}</p>
                <img
                  src={contry.img}
                  alt=""
                  className="w-full h-full p-5 object-contain saturate-0 hover:saturate-100 duration-300 ease-in-out "
                />
              </div>
            )
          );
        })}
        {moreComp &&
          comp.map((contry, index) => {
            return (
              !(
                index == 0 ||
                index == 1 ||
                index == 2 ||
                index == 3 ||
                index == 4
              ) && (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-32 md:w-40 lg:w-48 h-40 bg-white overflow-hidden mx-auto"
                >
                  <p className="bg-primary md:text-xl p-1">{contry.name}</p>
                  <img
                    src={contry.img}
                    alt=""
                    className="w-full h-full p-5 object-contain saturate-0 hover:saturate-100 duration-300 ease-in-out "
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
    </section>
  );
}
