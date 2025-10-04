

function Footer() {
  return (
    <div>
        <footer className='px-[10%] bg-[#1A1A1A]'>
            <div className='py-15 flex flex-col lg:flex-row justify-between '>
                <div>
                    <div className='flex justify-center md:justify-start'>
                        <img className='cursor-pointer' src="/images/logo1.png" alt="" />
                    </div>
                    <p className='text-[#808080] py-2 text-center md:text-start'>Morbi cursus porttitor enim lobortis molestie. <br /> Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div className='flex flex-col md:flex-row mb-4 md:mb-0 justify-between items-center pt-4'>
                        <p className='text-white cursor-pointer hover:underline'><a href="tel:+8801833597831">+8801833597831</a></p>
                        <p className='text-[#808080]'>or</p>
                        <p className='text-white cursor-pointer hover:underline'><a href="mailto:nobodipdebnath45@gmail.com">nobodipdebnath45@gmail.com</a></p>
                    </div>
                </div>
                <ul>
                    <p className='text-lg font-medium text-white pb-4 text-center md:text-start'>My Account</p>
                    <li className='cursor-pointer text-center md:text-start text-[#999999] py-1 hover:underline'>My Account</li>
                    <li className='cursor-pointer text-center md:text-start text-[#999999] py-1 hover:underline'>Shopping History</li>
                    <li className='cursor-pointer text-center md:text-start text-[#999999] py-1 hover:underline'>Shopping Cards</li>
                    <li className='cursor-pointer  text-center md:text-start text-[#999999] py-1 hover:underline'>Wishlist</li>
                </ul>
                <ul>
                    <p className='text-lg font-medium text-white pb-4 text-center md:text-start'>Helps</p>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Contact</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Faqs</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Terms & Condition</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Privacy Policy</li>
                </ul>
                <ul>
                    <p className='text-lg font-medium text-white pb-4 text-center md:text-start'>Proxy</p>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>About</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Shop</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Order</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Products</li>
                </ul>
                <ul>
                    <p className='text-lg font-medium text-white pb-4 text-center md:text-start'>Categories</p>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Fruit & Vegetables</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Meat & Fish</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Bread & Bakery</li>
                    <li className='cursor-pointer text-[#999999] py-1 hover:underline text-center md:text-start'>Beauty & Health</li>
                </ul>
            </div>
            <hr  className=' mx-auto text-gray-400 pt-3'/>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <p className='text-[#FFFFFF] text-center md:text-start'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
                <div className='py-10 flex justify-between items-center gap-1 lg:gap-4'>
                    <img className="cursor-pointer hover:scale-110 duration-500" src="/images/pay1.png" alt="" />
                    <img className="cursor-pointer hover:scale-110 duration-500" src="/images/pay2.png" alt="" />
                    <img className="cursor-pointer hover:scale-110 duration-500" src="/images/pay3.png" alt="" />
                    <img className="cursor-pointer hover:scale-110 duration-500" src="/images/pay4.png" alt="" />
                    <img className="cursor-pointer hover:scale-110 duration-500" src="/images/pay5.png" alt="" />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer