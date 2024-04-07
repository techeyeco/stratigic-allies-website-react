import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import BusinessTrainings from "./Components/BusinessTrainings";
import Product from "./Components/Product";
import BusinessConsulting from "./Components/BusinessConsulting";

function App() {
  return (
    <main className=" max-w-[1200px] mx-auto">
      <Navbar />
      <AboutUs />
      <BusinessTrainings />
      <Product />
      <BusinessConsulting />
    </main>
  );
}

export default App;
