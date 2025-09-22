import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
  faCartShopping,
  faHouse,
  faHeart,
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Trust from "../Components/Trust";
import Teams from "../Components/Teams";
import Testimonial from "../Components/Testimonial";
import Links from "../Components/Links";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
      <Header />
      {/* Main Section Start */}
      <main>
        <Card />
        <Trust />
        <Teams />
        <Testimonial />
        <Links />
        <Contact />
      </main>

    </>
  );
}

export default Home;
