import { useState } from "react";
import "./App.css";
import AboutUs from "./Statigic Allies/AboutUs";
import BusinessTrainings from "./Components/BusinessTrainings";
import Product from "./Components/Product";
import BusinessConsulting from "./Components/BusinessConsulting";
import Ourworks from "./Components/Ourworks";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import MainLayout from "./Pages/MainLayout";
import {
  HashRouter as Router,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Router path="/" element={<MainLayout />}>
      <Route index element={<Hero />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="tranining" element={<BusinessTrainings />} />
      <Route path="products" element={<Product />} />
      <Route path="ourworks" element={<Ourworks />} />
      <Route path="consulting" element={<BusinessConsulting />} />
    </Router>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
