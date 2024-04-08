import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import BusinessTrainings from "./Components/BusinessTrainings";
import Product from "./Components/Product";
import BusinessConsulting from "./Components/BusinessConsulting";
import Ourworks from "./Components/Ourworks";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";

function App() {
  return (
    <main className="text-light">
      <Navbar />
      <Hero />
      {/* <AboutUs /> */}
      <BusinessTrainings />
      <Product />
      <Ourworks />
      <BusinessConsulting />
      <Contact />
    </main>
  );
}

export default App;
