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

function Card() {
  return (
    <div>
        {/* Card Section Start */}
        <section>
          <div className="px-[7%] grid grid-cols-2 gap-34 py-[130px] justify-between ">
            <div>
              <p className="text-[#00B207] text-lg py-2 font-medium">
                Welcome to shopery
              </p>
              <h1 className=" font-[#1A1A1A] font-semibold text-7xl mb-7">
                Fresh & Healthy Organic Food
              </h1>
              <h3 className="pb-3 text-[#1A1A1A] text-3xl font-semibold">
                Sale up to <span className="text-[#FF8A00]">30% OFF</span>
              </h3>
              <p className="text-[#808080] text-[16px] pb-8">
                Free shipping on all your order. we deliver, you enjoy
              </p>
              <button className="hover:bg-[#00B207] cursor-pointer bg-white border-2 border-[#00B207] px-6 py-3 font-semibold hover:text-white rounded-3xl text-gray-400 duration-500 flex items-center gap-2">
                <p>Shop now</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div>
              <img className="rounded-lg" src="/images/Card-1.jpg" alt="" />
            </div>
          </div>
        </section>
        {/* Card section End */}
    </div>
  )
}

export default Card