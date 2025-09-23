import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
  faCartShopping,
  faHouse,
  faHeart,
  faArrowRight,
  faChevronRight,faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* Header Section Start */}
      <header>
        <div className="flex md:flex-row gap-10 md:gap-0 justify-between items-center px-[5%]  mx-auto py-4 bg-[#333333] text-[#B3B3B3]">
          <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Store Location: Thakurgaon,Rangpur, <br className="lg:hidden" />Bangladesh</p>
          </div>
          {/* Mobile ber */}
          <div className="lg:hidden">
            <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faBars} />
          </div>
          {/* Mobile ber */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer">
                <p>Bangla</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <p>Taka</p>
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
        </div>
        <nav className="px-[5%] mx-auto hidden lg:block">
          <div className="flex justify-between items-center py-6">
            <div>
              <Link to="/"><img
                className="h-10 w-full cursor-pointer"
                src="/images/Logo.png"
                alt=""
              /></Link>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <input
                className="px-4 py-[11px] lg:w-[500px] w-full border input-1 outline-none border-gray-300 bg-[#E6E6E6] "
                type="text"
                placeholder="Search"
                required
              />
              <button className="py-3 px-6 font-semibold border- border-[#00B207] bg-[#00B207] text-white btn1 cursor-pointer">
                Search
              </button>
            </div>
            <div className="flex justify-between items-center gap-6">
              <FontAwesomeIcon
                className="text-2xl text-[#1A1A1A] cursor-pointer"
                icon={faHeart}
              />
              <div className="w-1 h-8 bg-gray-500"></div>
              <div>
                <FontAwesomeIcon
                  className="text-2xl text-[#1A1A1A] cursor-pointer"
                  icon={faCartShopping}
                />
              </div>
              <div className="cursor-pointer p-2 border border-white hover:border hover:rounded-md hover:border-gray-300 hover:bg-gray-100 duration-500">
                <h3 className="text-[11px] text-[#4D4D4D]">Shopping cart:</h3>
                <p className="text-lg font-semibold text-[#1A1A1A]">৳ 5700</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <ul className="flex justify-between items-center gap-6 text-[#666666] text-lg ">
              <li className="hover:text-[#00B207] cursor-pointer"><Link to='/'>Home</Link></li>
              <li className="hover:text-[#00B207] cursor-pointer"><Link to='/shop'>Shop</Link></li>
              <li className="hover:text-[#00B207] cursor-pointer"><Link to='/blog'>Blog</Link></li>
              <li className="hover:text-[#00B207] cursor-pointer"><Link to='/about-us'>About Us</Link></li>
              <li className="hover:text-[#00B207] cursor-pointer">
                <Link to='/contact-us'>Contact Us</Link>
              </li>
            </ul>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/images/PhoneCall 1.png" alt="" />
              <p className="text-[#1A1A1A] text-lg hover:text-[#00B207]">
                <a href="tel:+8801833597831">+8801833597831</a>
              </p>
            </div>
          </div>
        </nav>
        <div className=" bg-[url('/images/background.jpg')] bg-cover">
          <div className="flex items-center gap-2 py-12 px-[5%] ">
            <FontAwesomeIcon
              className="text-gray-400 text-xl cursor-pointer"
              icon={faHouse}
            />
            <FontAwesomeIcon
              className="text-gray-400 text-xl"
              icon={faChevronRight}
            />
            <p className="text-[#00B207] text-lg cursor-pointer ">......</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
