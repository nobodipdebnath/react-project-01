import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";

const blogs = [
    // আপনার পণ্যের তালিকা এখানে অপরিবর্তিত থাকবে...
    { id: 1, title: "Tomato", image: "/vegetable/1.jpg", price: 45, offer: "10% off" },
    { id: 2, title: "Potato", image: "/vegetable/2.jpg", price: 32, offer: "15% off" },
    { id: 3, title: "Onion", image: "/vegetable/3.jpg", price: 60, offer: "5% off" },
    { id: 4, title: "Garlic", image: "/vegetable/4.jpg", price: 85, offer: "20% off" },
    { id: 5, title: "Ginger", image: "/vegetable/5.jpg", price: 70, offer: "12% off" },
    { id: 6, title: "Papaya", image: "/vegetable/6.jpg", price: 40, offer: "25% off" },
    { id: 7, title: "Pumpkin", image: "/vegetable/7.jpg", price: 55, offer: "18% off" },
    { id: 8, title: "Cabbage", image: "/vegetable/8.jpg", price: 38, offer: "22% off" },
    { id: 9, title: "Cauliflower", image: "/vegetable/9.jpg", price: 65, offer: "8% off" },
    { id: 10, title: "Spinach", image: "/vegetable/10.jpg", price: 28, offer: "30% off" },
    { id: 11, title: "Carrot", image: "/vegetable/11.jpg", price: 48, offer: "17% off" },
    { id: 12, title: "Radish", image: "/vegetable/12.jpg", price: 36, offer: "12% off" },
    { id: 13, title: "Eggplant", image: "/vegetable/13.jpg", price: 44, offer: "15% off" },
    { id: 14, title: "Lady Finger", image: "/vegetable/14.jpg", price: 52, offer: "10% off" },
    { id: 15, title: "Chili", image: "/vegetable/15.jpg", price: 30, offer: "18% off" },
    { id: 16, title: "Cucumber", image: "/vegetable/16.jpg", price: 26, offer: "5% off" },
    { id: 17, title: "Green Beans", image: "/vegetable/17.jpg", price: 42, offer: "20% off" },
    { id: 18, title: "Peas", image: "/vegetable/18.jpg", price: 58, offer: "25% off" },
    { id: 19, title: "Turnip", image: "/vegetable/19.jpg", price: 34, offer: "8% off" },
    { id: 20, title: "Bitter Gourd", image: "/vegetable/20.jpg", price: 46, offer: "15% off" },
    { id: 21, title: "Bottle Gourd", image: "/vegetable/21.jpg", price: 39, offer: "22% off" },
    { id: 22, title: "Snake Gourd", image: "/vegetable/22.jpg", price: 33, offer: "12% off" },
    { id: 23, title: "Drumstick", image: "/vegetable/23.jpg", price: 49, offer: "10% off" },
    { id: 24, title: "Mushroom", image: "/vegetable/24.jpg", price: 90, offer: "18% off" },
    { id: 25, title: "Corn", image: "/vegetable/25.jpg", price: 72, offer: "30% off" },
    { id: 26, title: "Capsicum", image: "/vegetable/26.jpg", price: 64, offer: "22% off" },
    { id: 27, title: "Broccoli", image: "/vegetable/27.jpg", price: 95, offer: "12% off" },
    { id: 28, title: "Zucchini", image: "/vegetable/28.jpg", price: 80, offer: "15% off" },
    { id: 29, title: "Lettuce", image: "/vegetable/29.jpg", price: 50, offer: "20% off" },
    { id: 30, title: "Sweet Potato", image: "/vegetable/30.jpg", price: 60, offer: "25% off" },
    { id: 31, title: "Beetroot", image: "/vegetable/31.jpg", price: 55, offer: "18% off" },
    { id: 32, title: "Spring Onion", image: "/vegetable/32.jpg", price: 43, offer: "10% off" },
    { id: 33, title: "Celery", image: "/vegetable/33.jpg", price: 68, offer: "22% off" },
    { id: 34, title: "Kale", image: "/vegetable/34.jpg", price: 85, offer: "8% off" },
    { id: 35, title: "Leek", image: "/vegetable/35.jpg", price: 74, offer: "12% off" },
    { id: 36, title: "Parsley", image: "/vegetable/36.jpg", price: 40, offer: "15% off" },
    { id: 37, title: "Coriander", image: "/vegetable/37.jpg", price: 32, offer: "18% off" },
    { id: 38, title: "Mint", image: "/vegetable/38.jpg", price: 28, offer: "20% off" },
    { id: 39, title: "Dill", image: "/vegetable/39.jpg", price: 52, offer: "25% off" },
    { id: 40, title: "Mustard Greens", image: "/vegetable/40.jpg", price: 46, offer: "30% off" },
    { id: 41, title: "Curry Leaves", image: "/vegetable/41.jpg", price: 29, offer: "12% off" },
    { id: 42, title: "Radicchio", image: "/vegetable/42.jpg", price: 88, offer: "18% off" },
    { id: 43, title: "Artichoke", image: "/vegetable/43.jpg", price: 110, offer: "22% off" },
    { id: 44, title: "Asparagus", image: "/vegetable/44.jpg", price: 120, offer: "15% off" },
    { id: 45, title: "Okra", image: "/vegetable/45.jpg", price: 48, offer: "10% off" },
    { id: 46, "title": "Fenugreek Leaves", image: "/vegetable/46.jpg", price: 42, offer: "8% off" },
    { id: 47, "title": "Brussels Sprouts", image: "/vegetable/47.jpg", price: 105, offer: "20% off" },
    { id: 48, "title": "Chayote", image: "/vegetable/48.jpg", price: 67, offer: "18% off" },
    { id: 49, "title": "Swiss Chard", image: "/vegetable/49.jpg", price: 92, offer: "25% off" },
    { id: 50, "title": "Water Spinach", image: "/vegetable/50.jpg", price: 38, offer: "30% off" },
    { id: 51, "title": "Full Kopi", image: "/vegetable/51.jpg", price: 63, offer: "40% off" },
    { id: 52, "title": "Begun", image: "/vegetable/52.jpg", price: 53, offer: "29% off" }
];

export default function ForYou2({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    document.getElementById('product_modal_2').showModal();
  };

  const handleAddToCartClick = () => {
    if (selectedProduct) {
      onAddToCart(selectedProduct);
      // ঐচ্ছিকভাবে, কার্টে যোগ করার পর মোডাল বন্ধ করে দিতে পারেন
      document.getElementById('product_modal_2').close(); 
    }
  };

  return (
    <>
      <div className="p-6 px-[7%] bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Just For You</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-xl p-4 bg-white shadow hover:shadow-xl duration-500"
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
                  <p className="mt-2 font-semibold text-2xl text-[#00B207]">৳ {blog.price}</p>
                  <p className="text-md font-semibold text-red-800">{blog.offer}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleOpenModal(blog)}
                    className="py-2.5 px-3 border rounded-lg font-semibold border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500 cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <dialog id="product_modal_2" className="modal">
        <div className="modal-box w-11/12 max-w-4xl p-8">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">{selectedProduct.title}</h2>
                <div className="flex items-center mb-4 text-[#EDD622]">
                  <FontAwesomeIcon icon={faStar} className="text-xl" />
                  <FontAwesomeIcon icon={faStar} className="text-xl" />
                  <FontAwesomeIcon icon={faStar} className="text-xl" />
                  <FontAwesomeIcon icon={faStar} className="text-xl" />
                  <FontAwesomeIcon icon={faStarHalfStroke} className="text-xl" />
                  <span className="text-gray-600 text-lg ml-2">(4.5)</span>
                </div>
                <p className="text-4xl font-bold text-[#00B207] mb-2">৳ {selectedProduct.price}</p>
                <p className="text-2xl font-semibold text-red-800 mb-6">{selectedProduct.offer}</p>
                <p className="text-gray-600 mb-6">
                  এটি একটি তাজা এবং উচ্চ মানের পণ্য। আপনার দৈনন্দিন রান্নার জন্য উপযুক্ত। এখনই কিনুন এবং সেরা অফার উপভোগ করুন।
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleAddToCartClick}
                    className="py-3 px-8 bg-[#00B207] text-white font-bold rounded-lg hover:bg-green-700 duration-300"
                  >
                    Add to Cart
                  </button>
                  <button className="py-3 px-8 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-700 duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="modal-action mt-6">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
