import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faStar,
  faStarHalfStroke,
  faChevronDown,
  faChevronRight,
  faEllipsis,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
function ForYou() {
  return (
    <div>
      <section className="px-[10%] bg-gray-100">
        <div>
          <p className="text-center text-4xl py-10">Just For You</p>
        </div>
        <div className="flex gap-7">
          <div className="w-[25%]">
            <div className="p-4 shadow-xl bg-white  rounded-xl">
              <h1 className="text-2xl font-semibold pb-3">
                Shop By Categories
              </h1>
              <hr className="text-gray-300" />
              <div className="flex gap-2 py-1 hover:text-indigo-500 cursor-pointer">
                <input type="radio" name="" id="" />
                <p>তাজা সবজি</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>পেঁয়াজ</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>শসা </p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>আলু</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>ক্যাপসিকাম</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>লাউ</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>পেপে</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>ফুলকপি</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>তরমুজ</p>
              </div>
            </div>
            <div className="p-4 shadow-xl bg-white  rounded-xl my-10">
              <h1 className="text-2xl font-semibold pb-3">Sort</h1>
              <hr className="text-gray-300" />
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>Best Seller</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>New Released</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>Price - Low to High</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>Price - High to Low</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>Discount - High to Low</p>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" name="" id="" />
                <p>Discount - Low to High</p>
              </div>
            </div>
            <div className="p-4 shadow-xl bg-white  rounded-xl">
              <div className="flex gap-1 items-center pb-2">
                <input type="checkbox" name="" id="" />
                <p className="font-semibold">InStock</p>
              </div>
              <hr className="text-gray-300" />
              <div className="flex gap-1 items-center pt-2">
                <input type="checkbox" name="" id="" />
                <p className="font-semibold">Fresh</p>
              </div>
            </div>
            <div className="p-4 shadow-xl bg-white  rounded-xl my-10">
              <h1 className="text-2xl font-semibold pb-3">Filters</h1>
              <hr className="text-gray-300" />
              <div className="flex justify-between gap-2 py-3">
                <p>Authors</p>
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faChevronDown}
                />
              </div>
              <hr className="text-gray-300" />
              <div className="flex justify-between gap-2 py-3">
                <p>Publishers</p>
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faChevronDown}
                />
              </div>
              <hr className="text-gray-300" />
              <div className="flex justify-between gap-2 py-3">
                <p>Languages</p>
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faChevronDown}
                />
              </div>
              <hr className="text-gray-300" />
              <div className="flex justify-between gap-2 py-3">
                <p>Ratings</p>
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faChevronDown}
                />
              </div>
              <div className="flex gap-2 items-center pt-2">
                <input type="checkbox" name="" id="" />
                <div className="flex justify-between items-center">
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center pt-2">
                <input type="checkbox" name="" id="" />
                <div className="flex justify-between items-center">
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center pt-2">
                <input type="checkbox" name="" id="" />
                <div className="flex justify-between items-center">
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center pt-2">
                <input type="checkbox" name="" id="" />
                <div className="flex justify-between items-center">
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center pt-2">
                <input type="checkbox" name="" id="" />
                <div className="flex justify-between items-center">
                  <FontAwesomeIcon
                    className="text-[12px] text-[#F2CC34]"
                    icon={faStar}
                  />
                </div>
              </div>
            </div>
            <div className="p-4 shadow-xl bg-white  rounded-xl mb-10">
              <h1 className="text-2xl font-semibold pb-3">Shop By Price</h1>
              <hr className="text-gray-300" />
              <input type="range" className="w-full mt-5" name="" id="" />
              <div className="flex justify-between items-center">
                <p>৳ 0</p>
                <p>৳ 999</p>
              </div>
            </div>
            <div className="p-4 shadow-xl bg-white  rounded-xl mb-10">
              <h1 className="text-2xl font-semibold pb-3">Shop by Discount</h1>
              <hr className="text-gray-300" />
              <input type="range" className="w-full mt-5" name="" id="" />
              <div className="flex justify-between items-center">
                <p>0%</p>
                <p>100%</p>
              </div>
            </div>
          </div>
          <div className="w-[75%] shadow-xl mb-10 px-10 bg-white pt-10 rounded-lg">
            <div className="grid grid-cols-4 gap-6 pb-10">
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/1.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/2.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/3.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/4.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/5.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/6.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/7.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/8.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/9.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/10.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/11.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/12.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/13.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/14.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/15.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/17.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/18.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Card */}

              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/19.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/20.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/16.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/21.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/22.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/23.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/24.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/25.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/26.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/41.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/27.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/28.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/29.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/30.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/31.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/32.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/33.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/34.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/35.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/36.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/37.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/38.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/39.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className=" p-3 border border-gray-100 hover:shadow-2xl duration-500 rounded-xl">
                <img
                  className="rounded-lg h-[200px] w-full"
                  src="/vegetable/40.jpg"
                  alt=""
                />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold py-2">papaya</p>
                    <div className="flex justify-between items-center">
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[12px] text-[#F2CC34]"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-semibold text-[#00B207]">
                        ৳69
                      </p>
                      <p className="text-[12px] text-red-800 font-medium">
                        33% OFF
                      </p>
                    </div>
                    <button className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Change Button Start*/}
            <div className="flex justify-center items-center pb-10">
              <div className="flex gap-4">
                <button className="px-3 py-3 border rounded-lg bg-gray-200">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer">
                  1
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer">
                  2
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer">
                  3
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer">
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer">
                  199
                </button>
                <Link to="/foryou2">
                  <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </Link>
              </div>
            </div>
            {/* Card Change Button End */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForYou;
