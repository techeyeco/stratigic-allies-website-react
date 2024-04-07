import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import BusinessTrainings from "./Components/BusinessTrainings";
import Product from "./Components/Product";
import BusinessConsulting from "./Components/BusinessConsulting";
import Ourworks from "./Components/Ourworks";
import Contact from "./Components/Contact";

function App() {
  return (
    <main className="text-light ">
      <Navbar />
      <AboutUs />
      <Product />
      <Ourworks />
      <BusinessTrainings />
      <BusinessConsulting />
      <Contact />
    </main>
  );
}

export default App;
