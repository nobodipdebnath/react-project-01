import React, { useState, useEffect } from "react";
// Link এর পরিবর্তে NavLink ইম্পোর্ট করা হয়েছে
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faChevronDown,
  faHeart,
  faCartShopping,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { // Scrolling down
      setShowNavbar(false);
    } else { // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // অ্যাক্টিভ লিঙ্কের জন্য স্টাইল ক্লাস নির্ধারণ করার ফাংশন
  const getActiveLinkStyle = ({ isActive }) => {
    return isActive 
      ? "text-white font-semibold  px-3 py-2 border rounded-lg  bg-[#00B207]" // অ্যাক্টিভ থাকলে এই ক্লাসগুলো যুক্ত হবে
      : "text-[#666666] px-3 py-2 border rounded-lg duration-500 font-semibold border-transparent" ;         // স্বাভাবিক অবস্থায় এই ক্লাস থাকবে
  };

  // মোবাইল মেন্যুর অ্যাক্টিভ লিঙ্কের জন্য স্টাইল ক্লাস
  const getMobileActiveLinkStyle = ({ isActive }) => {
    return isActive
      ? "block w-full bg-green-200 text-[#00B207] font-bold" // অ্যাক্টিভ মেন্যুর জন্য ভিন্ন ব্যাকগ্রাউন্ড
      : "block w-full";
  };


  return (
    <>
      {/* ================================================== */}
      {/* 1. DESKTOP & SCROLLABLE HEADER (Hides on scroll) */}
      {/* ================================================== */}
      <header
        className={`hidden lg:block sticky top-0 z-40 bg-white shadow-md transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full '}`}
      >
        {/* Top bar */}
        <div className="bg-[#333333] text-[#B3B3B3]">
          <div className="flex justify-between items-center px-[5%] mx-auto py-4">
            <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Store Location: Thakurgaon, Rangpur, Bangladesh</p>
            </div>
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer"><p>Bangla</p><FontAwesomeIcon icon={faChevronDown} /></div>
              <div className="flex items-center gap-2 cursor-pointer"><p>Taka</p><FontAwesomeIcon icon={faChevronDown} /><div className="w-0.5 h-6 bg-[#B3B3B3]"></div></div>
              <div className="flex justify-center items-center gap-2">
                <Link to="/signin" className="font-medium text-[#B3B3B3] hover:text-white hover:underline">Sign In</Link>
                <p>/</p>
                <Link to="/signup" className="font-medium text-[#B3B3B3] hover:text-white hover:underline">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Desktop Navigation */}
        <div className="px-[5%] mx-auto bg-white">
          <div className="flex justify-between items-center py-6">
            <Link to="/"><img className="h-10 w-full cursor-pointer" src="/images/Logo.png" alt="Logo" /></Link>
            <div className="flex"><input className="px-4 py-[11px] w-[500px] border input-1 outline-none border-gray-300 bg-[#E6E6E6]" type="text" placeholder="Search" required /><button className="py-3 px-6 font-semibold border border-[#00B207] bg-[#00B207] text-white btn1 cursor-pointer">Search</button></div>
            <div className="flex justify-between items-center gap-6">
              <FontAwesomeIcon className="text-2xl text-[#1A1A1A] cursor-pointer" icon={faHeart} />
              <div className="w-1 h-8 bg-gray-500"></div>
              <FontAwesomeIcon className="text-2xl text-[#1A1A1A] cursor-pointer" icon={faCartShopping} />
              <div className="cursor-pointer p-2 "><h3 className="text-[11px] text-[#4D4D4D]">Shopping cart:</h3><p className="text-lg font-semibold text-[#1A1A1A]">৳ 5700</p></div>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            {/* NavLink ব্যবহার করে আপডেট করা হয়েছে */}
            <ul className="flex justify-between items-center gap-4 text-lg">
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/" className={getActiveLinkStyle} end>Home</NavLink></li>
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/shop" className={getActiveLinkStyle}>Shop</NavLink></li>
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/blog" className={getActiveLinkStyle}>Blog</NavLink></li>
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/about-us" className={getActiveLinkStyle}>About Us</NavLink></li>
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/contact-us" className={getActiveLinkStyle}>Contact Us</NavLink></li>
            </ul>
            <div className="flex items-center gap-2 cursor-pointer"><img src="/images/PhoneCall 1.png" alt="Phone" /><p className="text-[#1A1A1A] text-lg hover:text-[#00B207]"><a href="tel:+8801833597831">+8801833597831</a></p></div>
          </div>
        </div>
      </header>

      {/* ================================================== */}
      {/* 2. MOBILE HEADER (Always visible)                 */}
      {/* ================================================== */}
      <div className="lg:hidden sticky top-0 z-40 flex justify-between items-center px-[5%] py-4 bg-white shadow-md">
        <Link to="/"><img className="h-8" src="/images/Logo.png" alt="Logo" /></Link>
        <FontAwesomeIcon
          className="text-3xl cursor-pointer"
          icon={isMenuOpen ? faTimes : faBars}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* ================================================== */}
      {/* 3. MOBILE SIDE MENU (Opens from right)            */}
      {/* ================================================== */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-4/4 max-w-sm bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" onClick={() => setIsMenuOpen(false)}><img className="h-8" src="/images/Logo.png" alt="Logo" /></Link>
          <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
        </div>
        {/* মোবাইল মেন্যুতে NavLink ব্যবহার করে আপডেট করা হয়েছে */}
        <ul className="flex flex-col items-start gap-2 p-4 text-lg">
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/" className={getMobileActiveLinkStyle} end>Home</NavLink>
          </li>
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/shop" className={getMobileActiveLinkStyle}>Shop</NavLink>
          </li>
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/blog" className={getMobileActiveLinkStyle}>Blog</NavLink>
          </li>
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/about-us" className={getMobileActiveLinkStyle}>About Us</NavLink>
          </li>
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/contact-us" className={getMobileActiveLinkStyle}>Contact Us</NavLink>
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 w-full border-t p-4">
          <div className="flex justify-center items-center gap-2">
            <Link to="/signin" className="font-medium text-[#00B207] hover:underline" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
            <p>/</p>
            <Link to="/signup" className="font-medium text-[#00B207] hover:underline" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
