import React from 'react'

function Teams() {
  return (
    <div>
        {/* Our Team Section Start */}
        <section className="bg-gradient-to-r from-[#FFE7DB] to-[#DEFFDE]">
          <div className="mx-[7%] py-[80px]">
            <h1 className="text-center text-[#1A1A1A] font-semibold text-5xl pb-3">
              Our Awesome Team
            </h1>
            <p className="text-center text-[#666666] text-[18px] pb-12">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus <br /> neque. Duis non diam eget est luctus
              tincidunt a a mi.
            </p>
            <div className="flex justify-between items-center gap-6">
              <div className="cursor-pointer">
                <img src="/images/Aoorw1.png" alt="" />
              </div>
              <div className=" flex justify-between items-center gap-6">
                <div>
                  <img src="/images/Image (2).png" alt="" />
                  <div className="bg-white p-3 rounded-b-lg">
                    <p className="text-[#1A1A1A] text-[20px] font-semibold py-1 text-center">
                      Jenny Wilson
                    </p>
                    <h3 className="text-[#808080] text-[16px] text-center">
                      Ceo & Founder
                    </h3>
                  </div>
                </div>
                <div>
                  <img src="/images/Image (3).png" alt="" />
                  <div className="bg-white p-3 rounded-b-lg">
                    <p className="text-[#1A1A1A] text-[20px] font-semibold py-1 text-center">
                      Jane Cooper
                    </p>
                    <h3 className="text-[#808080] text-[16px] text-center">
                      Worker
                    </h3>
                  </div>
                </div>
                <div>
                  <img src="/images/Image (4).png" alt="" />
                  <div className="bg-white p-3 rounded-b-lg">
                    <p className="text-[#1A1A1A] text-[20px] font-semibold py-1 text-center">
                      Cody Fisher
                    </p>
                    <h3 className="text-[#808080] text-[16px] text-center">
                      Security Guard
                    </h3>
                  </div>
                </div>
                <div>
                  <img src="/images/Image (5).png" alt="" />
                  <div className="bg-white p-3 rounded-b-lg">
                    <p className="text-[#1A1A1A] text-[20px] font-semibold py-1 text-center">
                      Robert Fox
                    </p>
                    <h3 className="text-[#808080] text-[16px] text-center">
                      Senior Farmer Manager
                    </h3>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer">
                <img src="/images/Aoorw.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Our team section End */}

    </div>
  )
}

export default Teams