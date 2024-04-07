import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import BusinessTrainings from "./Components/BusinessTrainings";
import Product from "./Components/Product";
import BusinessConsulting from "./Components/BusinessConsulting";
import Ourworks from "./Components/Ourworks";

function App() {
  return (
    <main className="text-light max-w-[1200px] mx-auto">
      <Navbar />
      <AboutUs />
      <Product />
      <Ourworks />
      <BusinessTrainings />
      <BusinessConsulting />
    </main>
  );
}

export default App;
