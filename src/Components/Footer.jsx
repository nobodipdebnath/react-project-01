import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='px-[10%] bg-[#1A1A1A]'>
            <div className='py-15 flex justify-between '>
                <div>
                    <img className='cursor-pointer' src="/images/logo1.png" alt="" />
                    <p className='text-[#808080] py-2 '>Morbi cursus porttitor enim lobortis molestie. <br /> Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div className='flex justify-between items-center pt-4'>
                        <p className='text-white cursor-pointer hover:underline'>+880 13122 03474</p>
                        <p className='text-[#808080]'>or</p>
                        <p className='text-white cursor-pointer hover:underline'>nobodipdebnath45@gmail.com</p>
                    </div>
                </div>
                <ul>
                    <p className='text-lg font-medium text-white pb-4'>My Account</p>
                    <li className='text-[#999999] py-1 hover:underline'>My Account</li>
                    <li className='text-[#999999] py-1 hover:underline'>Shopping History</li>
                    <li className='text-[#999999] py-1 hover:underline'>Shopping Cards</li>
                    <li className='text-[#999999] py-1 hover:underline'>Wishlist</li>
                </ul>
                <ul>
                    <p className='text-lg font-medium text-white pb-4'>Helps</p>
                    <li className='text-[#999999] py-1 hover:underline'>Contact</li>
                    <li className='text-[#999999] py-1 hover:underline'>Faqs</li>
                    <li className='text-[#999999] py-1 hover:underline'>Terms & Condition</li>
                    <li className='text-[#999999] py-1 hover:underline'>Privacy Policy</li>
                </ul>
                <ul>
                    <p className='text-lg font-medium text-white pb-4'>Proxy</p>
                    <li className='text-[#999999] py-1 hover:underline'>About</li>
                    <li className='text-[#999999] py-1 hover:underline'>Shop</li>
                    <li className='text-[#999999] py-1 hover:underline'>Order</li>
                    <li className='text-[#999999] py-1 hover:underline'>Products</li>
                </ul>
                <ul>
                    <p className='text-lg font-medium text-white pb-4'>Categories</p>
                    <li className='text-[#999999] py-1 hover:underline'>Fruit & Vegetables</li>
                    <li className='text-[#999999] py-1 hover:underline'>Meat & Fish</li>
                    <li className='text-[#999999] py-1 hover:underline'>Bread & Bakery</li>
                    <li className='text-[#999999] py-1 hover:underline'>Beauty & Health</li>
                </ul>
            </div>
            <hr  className=' mx-auto text-gray-400 pt-3'/>
            <div className='flex justify-between items-center'>
                <p className='text-[#FFFFFF]'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
                <div className='py-10 flex justify-between items-center gap-4'>
                    <img src="/images/pay1.png" alt="" />
                    <img src="/images/pay2.png" alt="" />
                    <img src="/images/pay3.png" alt="" />
                    <img src="/images/pay4.png" alt="" />
                    <img src="/images/pay5.png" alt="" />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer