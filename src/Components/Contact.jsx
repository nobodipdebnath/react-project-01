import React from "react";

function Contact() {
  return (
    <div>
      {/* Contact section start */}
      <section className="bg-[#F7F7F7] py-10 ">
        <div className="mx-[10%] flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h1 className="text-[#1A1A1A] text-3xl font-semibold text-center md:text-start">Subcribe our Newsletter</h1>
            <p className="text-[#999999] text-[14px] py-3 text-center md:text-start">
              Pellentesque eu nibh eget mauris congue mattis mattis nec <br /> tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center relative">
            <input className="outline-none border border-gray-300 py-3 px-6 lg:rounded-l-3xl rounded-3xl lg:w-[500px] w-full" type="email" placeholder="Enter Your Email" required />
            <button className="cursor-pointer py-3.5 rounded-3xl px-8 bg-[#00B207] text-white font-semibold lg:absolute left-[80%]">Submit</button>
          </div>
          <div className="flex justify-between items-center pt-4 lg:pt-0 gap-4">
            <img className="cursor-pointer" src="/images/Social Media.png" alt="" />
            <img className="cursor-pointer" src="/images/Social Media (1).png" alt="" />
            <img className="cursor-pointer" src="/images/Social Media (2).png" alt="" />
            <img className="cursor-pointer" src="/images/Social Media (3).png" alt="" />
          </div>
        </div>
      </section>
      {/* contact section */}
    </div>
  );
}

export default Contact;
