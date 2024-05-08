import React from "react";
import { Link } from "react-router-dom";

export default function Gallary() {
  return (
    <section className="flex flex-col gap-20 justify-center items-center  h-screen bg-animated">
      <div className="text-2xl md:text-3xl lg:text-4xl">Coming soon</div>
      <Link
        to="../"
        className="text-2xl md:text-3xl lg:text-4xl underline hover:no-underline"
      >
        Back To Home
      </Link>
      {/* <Outlet /> */}
    </section>
  );
}
