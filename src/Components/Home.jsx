import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center px-[5%]  mx-auto py-4 bg-[#333333] text-[#B3B3B3]">
          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <p>Eng</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="flex items-center gap-2">
              <p>USD</p>
              <FontAwesomeIcon icon={faChevronDown} />
              <div className="w-0.5 h-6 bg-[#B3B3B3]"></div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button className="hover:cursor-pointer">Sign In</button>
              <p>/</p>
              <button className="hover:cursor-pointer">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
      <header className="bg-[url('/images/')] hidden">
        <nav className="flex justify-between items-center container mx-auto my-3 py-3 px-6 bg-gray-100 rounded-4xl shadow-sm">
          <h1 className="text-4xl font-bold text-red-700 cursor-pointer">
            Logo
          </h1>
          <ul className="flex justify-between items-center gap-8">
            <li className="cursor-pointer hover:underline font-semibold text-lg text-gray-500 hover:text-red-400 duration-500 hover:scale-110">
              Home
            </li>
            <li className="cursor-pointer hover:underline font-semibold text-lg text-gray-500 hover:text-red-400 duration-500 hover:scale-110">
              About
            </li>
            <li className="cursor-pointer hover:underline font-semibold text-lg text-gray-500 hover:text-red-400 duration-500 hover:scale-110">
              Blog
            </li>
            <li className="cursor-pointer hover:underline font-semibold text-lg text-gray-500 hover:text-red-400 duration-500 hover:scale-110">
              Testimonial
            </li>
            <li className="cursor-pointer hover:underline font-semibold text-lg text-gray-500 hover:text-red-400 duration-500 hover:scale-110">
              Contact Us
            </li>
            <li className="py-2 px-5 font-semibold border border-gray-400 text-black hover:text-white bg-white hover:bg-amber-400 duration-700 rounded-lg cursor-pointer hover:rounded-3xl">
              Login
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Home;
