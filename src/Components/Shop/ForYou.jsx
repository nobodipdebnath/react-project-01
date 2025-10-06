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
const blogs = [
  { id: 1, title: "Tomato", image: "/vegetable/53.jpg", price: 45, offer: "10% off" },
  { id: 2, title: "Potato", image: "/vegetable/54.jpg", price: 32, offer: "15% off" },
  { id: 3, title: "Onion", image: "/vegetable/55.jpg", price: 60, offer: "5% off" },
  { id: 4, title: "Garlic", image: "/vegetable/56.jpg", price: 85, offer: "20% off" },
  { id: 5, title: "Ginger", image: "/vegetable/57.jpg", price: 70, offer: "12% off" },
  { id: 6, title: "Papaya", image: "/vegetable/58.jpg", price: 40, offer: "25% off" },
  { id: 7, title: "Pumpkin", image: "/vegetable/59.jpg", price: 55, offer: "18% off" },
  { id: 8, title: "Cabbage", image: "/vegetable/60.jpg", price: 38, offer: "22% off" },
  { id: 9, title: "Cauliflower", image: "/vegetable/61.jpg", price: 65, offer: "8% off" },
  { id: 10, title: "Spinach", image: "/vegetable/62.jpg", price: 28, offer: "30% off" },
  { id: 11, title: "Carrot", image: "/vegetable/63.jpg", price: 48, offer: "17% off" },
  { id: 12, title: "Radish", image: "/vegetable/64.jpg", price: 36, offer: "12% off" },
  { id: 13, title: "Eggplant", image: "/vegetable/65.jpg", price: 44, offer: "15% off" },
  { id: 14, title: "Lady Finger", image: "/vegetable/103.jpg", price: 52, offer: "10% off" },
  { id: 15, title: "Chili", image: "/vegetable/104.jpg", price: 30, offer: "18% off" },
  { id: 16, title: "Cucumber", image: "/vegetable/66.jpg", price: 26, offer: "5% off" },
  { id: 17, title: "Green Beans", image: "/vegetable/67.jpg", price: 42, offer: "20% off" },
  { id: 18, title: "Peas", image: "/vegetable/68.jpg", price: 58, offer: "25% off" },
  { id: 19, title: "Turnip", image: "/vegetable/69.jpg", price: 34, offer: "8% off" },
  { id: 20, title: "Bitter Gourd", image: "/vegetable/70.jpg", price: 46, offer: "15% off" },
  { id: 21, title: "Bottle Gourd", image: "/vegetable/71.jpg", price: 39, offer: "22% off" },
  { id: 22, title: "Snake Gourd", image: "/vegetable/72.jpg", price: 33, offer: "12% off" },
  { id: 23, title: "Drumstick", image: "/vegetable/73.jpg", price: 49, offer: "10% off" },
  { id: 24, title: "Mushroom", image: "/vegetable/74.jpg", price: 90, offer: "18% off" },
  { id: 25, title: "Corn", image: "/vegetable/75.jpg", price: 72, offer: "30% off" },
  { id: 26, title: "Capsicum", image: "/vegetable/76.jpg", price: 64, offer: "22% off" },
  { id: 27, title: "Broccoli", image: "/vegetable/77.jpg", price: 95, offer: "12% off" },
  { id: 28, title: "Zucchini", image: "/vegetable/78.jpg", price: 80, offer: "15% off" },
  { id: 29, title: "Lettuce", image: "/vegetable/79.jpg", price: 50, offer: "20% off" },
  { id: 30, title: "Sweet Potato", image: "/vegetable/80.jpg", price: 60, offer: "25% off" },
  { id: 31, title: "Beetroot", image: "/vegetable/81.jpg", price: 55, offer: "18% off" },
  { id: 32, title: "Spring Onion", image: "/vegetable/82.jpg", price: 43, offer: "10% off" },
  { id: 33, title: "Celery", image: "/vegetable/83.jpg", price: 68, offer: "22% off" },
  { id: 34, title: "Kale", image: "/vegetable/84.jpg", price: 85, offer: "8% off" },
  { id: 35, title: "Leek", image: "/vegetable/85.jpg", price: 74, offer: "12% off" },
  { id: 36, title: "Parsley", image: "/vegetable/86.jpg", price: 40, offer: "15% off" },
  { id: 37, title: "Coriander", image: "/vegetable/87.jpg", price: 32, offer: "18% off" },
  { id: 38, title: "Mint", image: "/vegetable/88.jpg", price: 28, offer: "20% off" },
  { id: 39, title: "Dill", image: "/vegetable/89.jpg", price: 52, offer: "25% off" },
  { id: 40, title: "Mustard Greens", image: "/vegetable/90.jpg", price: 46, offer: "30% off" },
  { id: 41, title: "Curry Leaves", image: "/vegetable/91.jpg", price: 29, offer: "12% off" },
  { id: 42, title: "Radicchio", image: "/vegetable/92.jpg", price: 88, offer: "18% off" },
  { id: 43, title: "Artichoke", image: "/vegetable/93.jpg", price: 110, offer: "22% off" },
  { id: 44, title: "Asparagus", image: "/vegetable/94.jpg", price: 120, offer: "15% off" },
  { id: 45, title: "Okra", image: "/vegetable/95.jpg", price: 48, offer: "10% off" },
  { id: 46, title: "Fenugreek Leaves", image: "/vegetable/96.jpg", price: 42, offer: "8% off" },
  { id: 47, title: "Brussels Sprouts", image: "/vegetable/97.jpg", price: 105, offer: "20% off" },
  { id: 48, title: "Chayote", image: "/vegetable/98.jpg", price: 67, offer: "18% off" },
  { id: 49, title: "Swiss Chard", image: "/vegetable/99.jpg", price: 92, offer: "25% off" },
  { id: 50, title: "Water Spinach", image: "/vegetable/100.jpg", price: 38, offer: "30% off" },
  { id: 51, title: "Full Kopi", image: "/vegetable/101.jpg", price: 63, offer: "40% off" },
  { id: 51, title: "Begun", image: "/vegetable/102.jpg", price: 53, offer: "29% off" }
];
function ForYou() {
  return (
    <div>
      <section className="px-[7%] bg-gray-100">
        <div>
          <p className="text-center text-4xl py-10">Just For You</p>
        </div>
        <div className="flex flex-col md:flex-row gap-7">
          <div className="md:w-[25%]">
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

          <div className=" md:w-[75%] shadow-xl mb-10 px-4 md:px-10 bg-white pt-10 rounded-lg">
                <div className="p-6">
                  <h1 className="text-3xl font-bold mb-6 text-center">Just For You </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                      <div
                        key={blog.id}
                        className=" rounded-xl p-4 bg-white shadow hover:shadow-xl duration-500"
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-semibold mt-4">{blog.title}</h2>
                          <div className="flex justify-between items-center mt-3 text-[#EDD622]">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className=" mt-2 font-semibold text-2xl text-[#00B207]">৳ {blog.price}</p>
                            <p className="text-md font-semibold text-red-800">{blog.offer}</p>
                          </div>
                          <div>
                            <a href={blog.link} className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer"  > Buy Now</a>
                          </div>
                        </div>
                        
                      </div>
                    ))}
                  </div>
                </div>
            {/* Card Change Button Start*/}
            <div className="flex justify-center items-center pb-10">
              <div className="flex gap-4">
                <button className="px-3 py-3 border rounded-lg bg-gray-200">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer hidden md:block">
                  1
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer hidden md:block">
                  2
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer hidden md:block">
                  3
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer">
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer hidden md:block">
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
