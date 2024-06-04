import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="text-light">
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Contact />
    </main>
  );
}
