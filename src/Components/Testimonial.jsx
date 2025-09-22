import React from 'react'

function Testimonial() {
  return (
    <div>
        {/* Testimonial section start */}
        <section className="bg-[#F2F2F2]">
          <div className="mx-[10%] py-28 ">
            <div className="flex justify-between items-center">
              <h1 className="text-5xl text-[#1A1A1A] font-semibold">Client Testimonial</h1>
              <img className='cursor-pointer' src="/images/Arrow.png" alt="" />
            </div>
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <img src="/images/cotation.png" alt="" />
                <p className="py-4 text-[#4D4D4D]">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src="/images/Image (6).png" alt="" />
                    <div>
                      <h3 className="text-[#1A1A1A] text-[18px] font-medium">Robert Fox</h3>
                      <p className="text-[#999999] text-[16px]">Customer</p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/Rating.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-6">
                <img src="/images/cotation.png" alt="" />
                <p className="py-4 text-[#4D4D4D]">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src="/images/Image (7).png" alt="" />
                    <div>
                      <h3 className="text-[#1A1A1A] text-[18px] font-medium">Dianne Russell</h3>
                      <p className="text-[#999999] text-[16px]">Customer</p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/Rating.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-6">
                <img src="/images/cotation.png" alt="" />
                <p className="py-4 text-[#4D4D4D]">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src="/images/Image (8).png" alt="" />
                    <div>
                      <h3 className="text-[#1A1A1A] text-[18px] font-medium">Eleanor Pena</h3>
                      <p className="text-[#999999] text-[16px]">Customer</p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/Rating.png" alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Testimonial section End*/}
    </div>
  )
}

export default Testimonial