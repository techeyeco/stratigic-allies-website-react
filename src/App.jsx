import { useState } from "react";
import "./App.css";
import AboutUs from "./Pages/Statigic Allies/AboutUs";
import Product from "./Components/Product";
import BusinessConsulting from "./Components/BusinessConsulting";
import Ourworks from "./Components/Ourworks";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import MainLayout from "./Pages/MainLayout";

import TrainingLayout from "./Pages/training/TrainingLayout";
import DevelopYourBusiness from "./Pages/training/DevelopYourBusiness ";
import Management from "./Pages/training/Management";
import Peshang from "./Pages/training/Peshang";
import BSS from "./Pages/training/BSS";
import SCS from "./Pages/training/SCS";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PartnersLayout from "./Pages/Partners/PartnersLayout";
import International from "./Pages/Partners/International";
import Stratigic from "./Pages/Partners/Stratigic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Hero />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="tranining" element={<TrainingLayout />}>
        <Route index element={<DevelopYourBusiness />} />
        <Route path="management" element={<Management />} />
        <Route path="peshang" element={<Peshang />} />
        <Route path="BSS" element={<BSS />} />
        <Route path="SCS" element={<SCS />} />
      </Route>
      <Route path="/partners" element={<PartnersLayout />}>
        <Route index element={<International />} />
        <Route path="products" element={<Stratigic />} />
      </Route>

      <Route path="products" element={<Product />} />
      <Route path="ourworks" element={<Ourworks />} />
      <Route path="consulting" element={<BusinessConsulting />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
