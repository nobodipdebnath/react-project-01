import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function PartOne() {
  return (
    <div>
        <div className='px-[10%] bg-gray-100'>
          <div className='grid  md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6 py-10 '>
            <div className='p-4 shadow-xl bg-white rounded-lg'>
              <h1 className='text-2xl font-semibold py-2'>Products Under ৳69</h1>
              <div className='grid grid-cols-2 gap-2 p-2  border-gray-300 bg-gray-100 rounded-lg'>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/40.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/41.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/42.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/43.jpg" alt="" />
                </div>
              </div>
              <Link to='./shop'>
              <p className='py-2 text-[13px] font-semibold text-[#00B207] cursor-pointer '>Shop More</p>
              </Link>
            </div>
            <div className='p-4 shadow-xl bg-white rounded-lg'>
              <h1 className='text-2xl font-semibold py-2'>Products Under ৳99</h1>
              <div className='grid grid-cols-2 gap-2 p-2 border-gray-300 bg-gray-100 rounded-lg'>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/44.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/45.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/46.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/47.jpg" alt="" />
                </div>
              </div>
              <Link to='./shop'>
              <p className='py-2 text-[13px] font-semibold text-[#00B207] cursor-pointer '>Shop More</p>
              </Link>
            </div>
            <div className='p-4 shadow-xl bg-white rounded-lg'>
              <h1 className='text-2xl font-semibold py-2'>Products Under ৳190</h1>
              <div className='grid grid-cols-2 gap-2 p-2  border-gray-300 bg-gray-100 rounded-lg'>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/48.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/49.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/50.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/51.jpg" alt="" />
                </div>
              </div>
              <Link to='./shop'>
              <p className='py-2 text-[13px] font-semibold text-[#00B207] cursor-pointer '>Shop More</p>
              </Link>
            </div>
            <div className='p-4 shadow-xl bg-white rounded-lg'>
              <h1 className='text-2xl font-semibold py-2'>Products Under ৳179</h1>
              <div className='grid grid-cols-2 gap-2 p-2  border-gray-300 bg-gray-100 rounded-lg'>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/52.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/53.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/54.jpg" alt="" />
                </div>
                <div>
                  <img className='w-full h-[120px] rounded-lg hover:shadow-2xl duration-500 cursor-pointer' src="/vegetable/55.jpg" alt="" />
                </div>
              </div>
              <Link to='./shop'>
              <p className='py-2 text-[13px] font-semibold text-[#00B207] cursor-pointer '>Shop More</p>
              </Link>
            </div>
            
          </div>

          <div className=' p-4 bg-white rounded-lg'>
            <h1 className='text-3xl font-semibold'>Deals Under ৳199</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-2'>
              <div className='p-4 bg-gray-100 rounded-lg hover:shadow-2xl duration-500 cursor-pointer'>
                <img className='rounded-lg h-[250px] w-full' src="/vegetable/56.jpg" alt="" />
                <div className='flex gap-3 items-center'>
                  <p className='px-3 py-1 rounded-lg my-2 bg-red-700 text-white'>33% off</p>
                  <p className='text-red-700 cursor-pointer'>Deal</p>
                </div>
                <p className='text-[12px] text-gray-500'>৳69 List price: ৳49</p>
                <p className='text-[14px] text-gray-600'>This Product is best for you</p>
              </div>
              <div className='p-4 bg-gray-100 rounded-lg hover:shadow-2xl duration-500 cursor-pointer'>
                <img className='rounded-lg h-[250px] w-full' src="/vegetable/57.jpg" alt="" />
                <div className='flex gap-3 items-center'>
                  <p className='px-3 py-1 rounded-lg my-2 bg-red-700 text-white'>33% off</p>
                  <p className='text-red-700 cursor-pointer'>Deal</p>
                </div>
                <p className='text-[12px] text-gray-500'>৳69 List price: ৳49</p>
                <p className='text-[14px] text-gray-600'>This Product is best for you</p>
              </div>
              <div className='p-4 bg-gray-100 rounded-lg hover:shadow-2xl duration-500 cursor-pointer'>
                <img className='rounded-lg h-[250px] w-full' src="/vegetable/58.jpg" alt="" />
                <div className='flex gap-3 items-center'>
                  <p className='px-3 py-1 rounded-lg my-2 bg-red-700 text-white'>33% off</p>
                  <p className='text-red-700 cursor-pointer'>Deal</p>
                </div>
                <p className='text-[12px] text-gray-500'>৳69 List price: ৳49</p>
                <p className='text-[14px] text-gray-600'>This Product is best for you</p>
              </div>
              <div className='p-4 bg-gray-100 rounded-lg hover:shadow-2xl duration-500 cursor-pointer'>
                <img className='rounded-lg h-[250px] w-full' src="/vegetable/59.jpg" alt="" />
                <div className='flex gap-3 items-center'>
                  <p className='px-3 py-1 rounded-lg my-2 bg-red-700 text-white'>33% off</p>
                  <p className='text-red-700 cursor-pointer'>Deal</p>
                </div>
                <p className='text-[12px] text-gray-500'>৳69 List price: ৳49</p>
                <p className='text-[14px] text-gray-600'>This Product is best for you</p>
              </div>
              <div className='p-4 bg-gray-100 rounded-lg hover:shadow-2xl duration-500 cursor-pointer'>
                <img className='rounded-lg h-[250px] w-full' src="/vegetable/60.jpg" alt="" />
                <div className='flex gap-3 items-center'>
                  <p className='px-3 py-1 rounded-lg my-2 bg-red-700 text-white'>33% off</p>
                  <p className='text-red-700 cursor-pointer'>Deal</p>
                </div>
                <p className='text-[12px] text-gray-500'>৳69 List price: ৳49</p>
                <p className='text-[14px] text-gray-600'>This Product is best for you</p>
              </div>
            </div>
            <Link to='./shop'>
              <p className='text-end pt-5 font-semibold text-[#00B207] cursor-pointer'>See More <FontAwesomeIcon icon={faArrowRight} /></p>
            </Link>
          </div>
          <div className='py-10'>

          </div>
        </div>
    </div>
  )
}

export default PartOne