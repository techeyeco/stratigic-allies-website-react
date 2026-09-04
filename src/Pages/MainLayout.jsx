import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <main className="text-light">
      <Navbar />
      <section className=" h-max">
        <Outlet />
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className={`${
            !visible && "hidden"
          } fixed w-max z-10 bg-white bottom-0 right-0 m-10 lg:right-[40px] lg:m-20 p-2 rounded-full hover:bg-white/75 duration-300 ease`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-up fill-primary"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
            />
          </svg>
        </button>
      </section>
      <Contact />
    </main>
  );
}
