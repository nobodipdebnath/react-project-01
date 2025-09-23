import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";
import Header from "./Components/About/Header";
import Footer from "./Components/About/Footer";
import ShopPage from "./Pages/ShopPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
