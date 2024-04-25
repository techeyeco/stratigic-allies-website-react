import React from "react";
import { CiCoinInsert } from "react-icons/ci";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function ourworks() {
  return (
    <section className="text-center p-10 max-w-[1200px] mx-auto">
      {" "}
      {/* 1 */}
      <div>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="50"
          className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
        >
          Peshang
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="50"
          className="lg:text-xl text-justify  "
        >
          Peshang is a practical development course that helps young people
          improve their talents by transforming ideas into real-world
          enterprises. Peshang is a 24 hour training course.
        </p>
      </div>
      {/* 3 */}
      <div>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="50"
          className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max "
        >
          Certificated Course
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="50"
          className="lg:text-xl text-justify  "
        >
          Certificate, Peshang. The course certificate has been recognized by
          both Erbil Polytechnic University (academic institution) and the Erbil
          Chamber of Commerce and Industry (private sector).
        </p>
      </div>
      {/* 5 */}
      <div>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="50"
          className="text-2xl lg:text-3xl font-bold mb-5 pb-5 border-b-4 border-primary w-max  "
        >
          Sponsorship.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="50"
          className="lg:text-xl text-justify  "
        >
          Peshang training has been funded by several foreign and local
          organizations, including the American Consulate in Erbil, Erbil
          Polytechnic University, IREX, Erbil Chamber of Commerce and Industry,
          Plan Organization, The Book Café, and Rebaz Foundation.
        </p>
      </div>
      <p className="md:text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto">
        What makes us Greate to work for
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className="card bg-neutral/50 text-light-content backdrop-blur-2xl rounded-lg 
                     flex flex-col justify-center items-center "
        >
          <div className="card-body  flex flex-col items-start gap-10 md:gap-20 p-14">
            <div className="flex flex-col gap-2">
              <CiCoinInsert size={50} />
              <p className="card-title gap-4 text-2xl font-bold">
                Successful Managers
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                ullam voluptatibus dolorem nobis, nesciunt aliquam molestiae
                facere. In temporibus, iusto ut dicta ex excepturi odit
                obcaecati facilis iure harum
              </p>
            </div>
          </div>
        </div>

        <div
          className="card bg-neutral/50 text-light-content backdrop-blur-2xl rounded-lg 
                     flex flex-col justify-center items-center row-span-2"
        >
          <div className="card-body  flex flex-col items-start gap-10 md:gap-20 p-14">
            <div className="flex flex-col gap-2">
              <CiCoinInsert size={50} />
              <p className="card-title gap-4 text-2xl font-bold">
                Successful Managers
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                ullam voluptatibus dolorem nobis, nesciunt aliquam molestiae
                facere. In temporibus, iusto ut dicta ex excepturi odit
                obcaecati facilis iure harum
              </p>
            </div>
            <div className="bg-primary flex flex-col w-full gap-5 p-5 rounded-lg">
              <p className="text-3xl font-bold">We are open to work</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                iste facilis inventore rerum a itaque. At consectetur aliquid
              </p>
              <HiOutlineArrowLongRight size={50} className="self-end" />
            </div>
          </div>
        </div>

        <div
          className="card bg-neutral/50 text-light-content backdrop-blur-2xl rounded-lg 
                     flex flex-col justify-center items-center "
        >
          <div className="card-body  flex flex-col items-start gap-10 md:gap-20 p-14">
            <div className="flex flex-col gap-2">
              <CiCoinInsert size={50} />
              <p className="card-title gap-4 text-2xl font-bold">
                Successful Managers
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                ullam voluptatibus dolorem nobis, nesciunt aliquam molestiae
                facere. In temporibus, iusto ut dicta ex excepturi odit
                obcaecati facilis iure harum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
