import React from "react";
import { CiCoinInsert } from "react-icons/ci";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function ourworks() {
  return (
    <section className="text-center py-20 px-10 max-w-[1200px] mx-auto">
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
