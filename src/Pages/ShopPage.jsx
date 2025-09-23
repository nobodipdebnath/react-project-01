import React from "react";
import ForYou from "../Components/Shop/ForYou";
import ForYou2 from "../Components/Shop/ForYou2";
import { Routes, Route } from "react-router-dom";

function ShopPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ForYou/>} />
        <Route path="/foryou2" element={<ForYou2/>} />
      </Routes>
    </div>
  );
}

export default ShopPage;
