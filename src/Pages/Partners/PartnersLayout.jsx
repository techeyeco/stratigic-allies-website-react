import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function PartnersLayout() {
  return (
    <section className="flex flex-col gap-20 justify-center items-center  h-screen bg-animated">
      <div className="text-xl md:text-2xl lg:text-3xl">Coming soon</div>
      <Link
        to="../"
        className="text-xl md:text-2xl lg:text-3xl underline hover:no-underline"
      >
        Back To Home
      </Link>
      {/* <Outlet /> */}
    </section>
  );
}
