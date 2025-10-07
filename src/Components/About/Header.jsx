import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faChevronDown,
  faHeart,
  faCartShopping,
  faTimes,
  faTrash,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function Header({
  cartItems = [],
  handleUpdateQuantity = () => {},
  handleRemoveItem = () => {},
  handleApplyCoupon = () => {},
  discount = 0,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");

  const FREE_SHIPPING_THRESHOLD = 2000;

  useEffect(() => {
    if (isCartOpen || isMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isCartOpen, isMenuOpen]);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false);
    } else {
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

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalWithDiscount = subtotal - discount;
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
  const amountForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  const onApplyCoupon = () => {
    if (!couponCode) {
      setCouponError("Please enter a coupon code.");
      return;
    }
    handleApplyCoupon(couponCode);
    if (couponCode.toLowerCase() !== 'rana') {
        setCouponError("Invalid coupon code.");
    } else {
        setCouponError("");
    }
  };

  const getActiveLinkStyle = ({ isActive }) => isActive ? "text-white font-semibold px-3 py-2 border rounded-lg bg-[#00B207]" : "text-[#666666] px-3 py-2 border rounded-lg duration-500 font-semibold border-transparent";
  const getMobileActiveLinkStyle = ({ isActive }) => isActive ? "block w-full bg-green-200 text-[#00B207] font-bold" : "block w-full";

  return (
    <>
      <header
        className={`hidden lg:block sticky top-0 z-40 bg-white shadow-md transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
      >
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

        <div className="px-[5%] mx-auto bg-white">
          <div className="flex justify-between items-center py-6">
            <Link to="/"><img className="h-10 w-full cursor-pointer" src="/images/Logo.png" alt="Logo" /></Link>
            <div className="flex">
              <input className="px-4 py-[11px] w-[500px] border input-1 outline-none border-gray-300 bg-[#E6E6E6]" type="text" placeholder="Search" required />
              <button className="py-3 px-6 font-semibold border border-[#00B207] bg-[#00B207] text-white btn1 cursor-pointer">Search</button>
            </div>
            <div className="flex justify-between items-center gap-6">
              <FontAwesomeIcon className="text-2xl text-[#1A1A1A] cursor-pointer" icon={faHeart} />
              <div className="w-1 h-8 bg-gray-500"></div>
              
              <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
                <FontAwesomeIcon className="text-2xl text-[#1A1A1A]" icon={faCartShopping} />
                {totalItemsInCart > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItemsInCart}
                  </span>
                )}
              </div>
              <div className="cursor-pointer p-2" onClick={() => setIsCartOpen(true)}>
                <h3 className="text-[11px] text-[#4D4D4D]">Shopping cart:</h3>
                <p className="text-lg font-semibold text-[#1A1A1A]">৳ {subtotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <ul className="flex justify-between items-center gap-4 text-lg">
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/" className={getActiveLinkStyle} end>Home</NavLink></li>
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/shop" className={getActiveLinkStyle}>Shop</NavLink></li>
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/blog" className={getActiveLinkStyle}>Blog</NavLink></li>
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/about-us" className={getActiveLinkStyle}>About Us</NavLink></li>
              <li className="hover:text-[#00B207] cursor-pointer"><NavLink to="/contact-us" className={getActiveLinkStyle}>Contact Us</NavLink></li>
            </ul>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/images/PhoneCall 1.png" alt="Phone" />
              <p className="text-[#1A1A1A] text-lg hover:text-[#00B207]"><a href="tel:+8801833597831">+8801833597831</a></p>
            </div>
          </div>
        </div>
      </header>

      <div className="lg:hidden sticky top-0 z-40 flex justify-between items-center px-[5%] py-4 bg-white shadow-md">
        <Link to="/"><img className="h-8" src="/images/Logo.png" alt="Logo" /></Link>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <FontAwesomeIcon className="text-2xl text-[#1A1A1A]" icon={faCartShopping} />
            {totalItemsInCart > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </div>
          <FontAwesomeIcon
            className="text-3xl cursor-pointer"
            icon={isMenuOpen ? faTimes : faBars}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-4/4 max-w-sm bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" onClick={() => setIsMenuOpen(false)}><img className="h-8" src="/images/Logo.png" alt="Logo" /></Link>
          <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
        </div>
        <ul className="flex flex-col items-start gap-2 p-4 text-lg">
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}><NavLink to="/" className={getMobileActiveLinkStyle} end>Home</NavLink></li>
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}><NavLink to="/shop" className={getMobileActiveLinkStyle}>Shop</NavLink></li>
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}><NavLink to="/blog" className={getMobileActiveLinkStyle}>Blog</NavLink></li>
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}><NavLink to="/about-us" className={getMobileActiveLinkStyle}>About Us</NavLink></li>
          <li className="w-full text-center border rounded-lg bg-green-100 py-2 hover:bg-green-200" onClick={() => setIsMenuOpen(false)}><NavLink to="/contact-us" className={getMobileActiveLinkStyle}>Contact Us</NavLink></li>
        </ul>
        <div className="absolute bottom-0 left-0 w-full border-t p-4">
          <div className="flex justify-center items-center gap-2">
            <Link to="/signin" className="font-medium text-[#00B207] hover:underline" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
            <p>/</p>
            <Link to="/signup" className="font-medium text-[#00B207] hover:underline" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>
      </nav>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" onClick={() => setIsCartOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 opacity-0 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="text-2xl font-semibold">Shopping Cart ({totalItemsInCart})</h2>
              <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer text-gray-500 hover:text-black transition-colors" onClick={() => setIsCartOpen(false)} />
            </div>

            <div className="flex-grow p-5 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 py-10">
                  <FontAwesomeIcon icon={faCartShopping} className="text-6xl mb-5" />
                  <p className="text-xl font-semibold">Your cart is empty.</p>
                  <p className="mt-2 text-center">Looks like you haven't added anything to your cart yet.</p>
                  <Link to="/shop" onClick={() => setIsCartOpen(false)} className="mt-6 px-6 py-2 bg-[#00B207] text-white font-bold rounded-lg hover:bg-green-700">Start Shopping</Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {amountForFreeShipping > 0 && (
                    <div className="text-center p-3 bg-green-100 rounded-lg border border-green-200">
                      <p>Add <span className="font-bold">৳{amountForFreeShipping.toFixed(2)}</span> more to get <span className="font-bold text-[#00B207]">FREE SHIPPING!</span></p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(subtotal / FREE_SHIPPING_THRESHOLD) * 100}%` }}></div>
                      </div>
                    </div>
                  )}
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
                      <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="flex items-center gap-3 mt-2">
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 border rounded-full hover:bg-gray-200 flex items-center justify-center"><FontAwesomeIcon icon={faMinus} /></button>
                          <span className="font-semibold text-lg">{item.quantity}</span>
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 border rounded-full hover:bg-gray-200 flex items-center justify-center"><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-[#00B207]">৳{(item.price * item.quantity).toFixed(2)}</p>
                        <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer hover:text-red-700 transition-colors text-xl mt-3" onClick={() => handleRemoveItem(item.id)} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-5 border-t bg-gray-50 rounded-b-xl">
                <div className="flex gap-2 mb-4">
                  <input type="text" value={couponCode} onChange={(e) => { setCouponCode(e.target.value); setCouponError(""); }} placeholder="Coupon Code" className="flex-grow px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" />
                  <button onClick={onApplyCoupon} className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-black">Apply</button>
                </div>
                {couponError && <p className="text-red-500 text-sm mb-2">{couponError}</p>}
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center"><p className="text-md text-gray-600">Subtotal:</p><p className="text-md font-semibold">৳{subtotal.toFixed(2)}</p></div>
                  {discount > 0 && (<div className="flex justify-between items-center text-green-600"><p className="text-md">Discount:</p><p className="text-md font-semibold">- ৳{discount.toFixed(2)}</p></div>)}
                  <div className="flex justify-between items-center text-lg font-bold border-t pt-2 mt-2"><p>Total:</p><p className="text-2xl text-[#00B207]">৳{totalWithDiscount.toFixed(2)}</p></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/cart" onClick={() => setIsCartOpen(false)} className="w-full text-center py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-transform transform hover:scale-105">View Cart</Link>
                  <Link to="/checkout" onClick={() => setIsCartOpen(false)} className="w-full text-center py-3 bg-[#00B207] text-white font-bold rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105">Proceed to Checkout</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
