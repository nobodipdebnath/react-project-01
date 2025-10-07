import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faStar,
  faStarHalfStroke,
  faChevronDown,
  faChevronRight,
  faEllipsis,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import categories from "../../libs/categories";
import sorts from "../../libs/sort";

function ForYou({ onAddToCart, blogs }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    // DaisyUI modal open method
    if (document.getElementById('product_modal')) {
      document.getElementById('product_modal').showModal();
    }
  };

  const handleAddToCartClick = () => {
    if (selectedProduct) {
      onAddToCart(selectedProduct);
      // Optionally close the modal after adding to cart
      document.getElementById('product_modal').close();
    }
  };

  return (
    <div>
      <section className="px-[7%] py-10 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-7">
          {/* Sidebar Section */}
          <div className="md:w-[25%]">
            <div className="p-4 shadow-xl bg-white rounded-xl">
              <h1 className="text-2xl font-semibold pb-3">Shop By Categories</h1>
              <hr className="text-gray-300" />
              <div>
                {categories.map((category) => (
                  <div key={category.id} className="flex gap-2 py-1">
                    <input type="radio" name="category" id={`cat-${category.id}`} />
                    <label htmlFor={`cat-${category.id}`} className="cursor-pointer">{category.title}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 shadow-xl bg-white rounded-xl my-10">
              <h1 className="text-2xl font-semibold pb-3">Sort</h1>
              <hr className="text-gray-300" />
              <div>
                {sorts.map((sort) => (
                  <div key={sort.id} className="flex gap-2 py-1">
                    <input type="radio" name="sort" id={`sort-${sort.id}`} />
                    <label htmlFor={`sort-${sort.id}`} className="cursor-pointer">{sort.name}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* Other sidebar filters... */}
            <div className="p-4 shadow-xl bg-white  rounded-xl">
              <div className="flex gap-1 items-center pb-2">
                <input type="checkbox" name="" id="instock" />
                <label htmlFor="instock" className="font-semibold cursor-pointer">InStock</label>
              </div>
              <hr className="text-gray-300" />
              <div className="flex gap-1 items-center pt-2">
                <input type="checkbox" name="" id="fresh" />
                <label htmlFor="fresh" className="font-semibold cursor-pointer">Fresh</label>
              </div>
            </div>
          </div>

          {/* Main Content: Product Grid */}
          <div className="md:w-[75%] shadow-xl mb-10 px-4 md:px-10 bg-white pt-10 rounded-lg">
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-6 text-center">Just For You</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <div key={blog.id} className="rounded-xl p-4 bg-white shadow hover:shadow-xl duration-500">
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
            {/* Pagination */}
            <div className="flex justify-center items-center pb-10">
              <div className="flex gap-4">
                <button className="px-3 py-3 border rounded-lg bg-gray-200">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer hidden md:block">1</button>
                <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer hidden md:block">2</button>
                <Link to="/foryou2">
                  <button className="px-3 py-3 border rounded-lg bg-white cursor-pointer">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DaisyUI Modal */}
      <dialog id="product_modal" className="modal">
        <div className="modal-box w-11/12 max-w-4xl p-8">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="h-full w-full object-cover rounded-xl shadow-lg"
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
    </div>
  );
}

export default ForYou;
