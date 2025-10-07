import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ForYou from "../Components/Shop/ForYou";
import ForYou2 from "../Components/Shop/ForYou2";

const forYouBlogs = [
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
    { id: 46, "title": "Fenugreek Leaves", image: "/vegetable/96.jpg", price: 42, offer: "8% off" },
    { id: 47, "title": "Brussels Sprouts", image: "/vegetable/97.jpg", price: 105, offer: "20% off" },
    { id: 48, "title": "Chayote", image: "/vegetable/98.jpg", price: 67, offer: "18% off" },
    { id: 49, "title": "Swiss Chard", image: "/vegetable/99.jpg", price: 92, offer: "25% off" },
    { id: 50, "title": "Water Spinach", image: "/vegetable/100.jpg", price: 38, offer: "30% off" },
    { id: 51, "title": "Full Kopi", image: "/vegetable/101.jpg", price: 63, offer: "40% off" },
    { id: 52, "title": "Begun", image: "/vegetable/102.jpg", price: 53, offer: "29% off" }
];

const forYou2Blogs = [
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

function ShopPage() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log("Product added to cart:", product);
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<ForYou blogs={forYouBlogs} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/foryou2"
          element={<ForYou2 blogs={forYou2Blogs} onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </div>
  );
}

export default ShopPage;
