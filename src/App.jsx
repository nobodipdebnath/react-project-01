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
import ForYou2 from "./Components/Shop/ForYou2";
import SignIn from "./Components/Sign-In/SignIn";
import SignUp from "./Components/Sing-Up/SignUp";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/foryou2" element={<ForYou2/>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
