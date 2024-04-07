import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import BusinessTrainings from "./Components/BusinessTrainings";
import Product from "./Components/Product";

function App() {
  return (
    <main className="text-light max-w-[1200px] mx-auto">
      <Navbar />
      <AboutUs />
      <BusinessTrainings />
      <Product />
    </main>
  );
}

export default App;
