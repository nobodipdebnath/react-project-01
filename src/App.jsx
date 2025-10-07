import React, { useState, useEffect } from "react";
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
//import CartPage from "./Pages/CartPage"; // CartPage এর জন্য একটি নতুন রাউট যোগ করা যেতে পারে
//import CheckoutPage from "./Pages/CheckoutPage"; // CheckoutPage এর জন্য একটি নতুন রাউট যোগ করা যেতে পারে

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");

  useEffect(() => {
    if (appliedCoupon) {
      handleApplyCoupon(appliedCoupon, true);
    }
  }, [cartItems]);


  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
    alert(`${productToAdd.title} has been added to the cart!`);
  };


  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(itemId);
    } else {
      setCartItems((currentItems) =>
        currentItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };


  const handleRemoveItem = (itemId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  };

 
  const handleApplyCoupon = (couponCode, isReapplying = false) => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    if (couponCode.toLowerCase() === 'rana') {
      const discountAmount = subtotal * 0.20; 
      setDiscount(discountAmount);
      setAppliedCoupon(couponCode); 
      if (!isReapplying) {
        alert("Coupon 'Rana' applied successfully! You got a 20% discount.");
      }
    }
    else if(couponCode.toLowerCase() === 'nobodip'){
      const discountAmount = subtotal * 0.66;
      setDiscount(discountAmount);
      setAppliedCoupon(couponCode);
      if(!isReapplying){
        alert("Coupon 'Nobodip' applied successfully! You got a 66% discount ")
      }
    }
    else {
      setDiscount(0);
      setAppliedCoupon(""); 
      if (!isReapplying) {
        alert("Invalid coupon code.");
      }
    }
  };

  return (
    <>
      <Header 
        cartItems={cartItems}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
        handleApplyCoupon={handleApplyCoupon}
        discount={discount}
      />

      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/shop/*" element={<ShopPage onAddToCart={handleAddToCart} />} />
          <Route path="/foryou2" element={<ForYou2 onAddToCart={handleAddToCart} />} />
          
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
