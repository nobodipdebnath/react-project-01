import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function ContactForm() {
  return (
    <div>
      <div className="py-24 px-[10%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.8548062258437!2d88.4404116755046!3d26.038946677178785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4eb618da025ab%3A0x95cf23c7ca0cb9e3!2sThakurgaon%20Polytechnic%20Institute!5e1!3m2!1sen!2sbd!4v1758606660486!5m2!1sen!2sbd"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Thakurgaon Polytechnic Institute"
        ></iframe>
      </div>
      <h1 className="text-center font-semibold text-5xl ">
        Get in Touch
      </h1>
      <div className="grid grid-cols-2 items-center gap-8 px-[10%] py-10">
        <div className=" flex flex-col gap-6">
            <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-4xl text-[#00B207]"
              icon={faFacebook}
            />
            <a href="https://www.facebook.com/profile.php?id=61554300737206" target="-blank">
              <div className=" p-4 rounded-lg shadow-xl">
              <p className=" text-2xl text-[#FF8A00] font-semibold hover:underline cursor-pointer">
                Online Fresh Food,,
              </p>
              <p className="text-[16px] text-[#808080] ">Facebook page..</p>
            </div>
            </a>
          </div>
          <a href="https://www.instagram.com/debnathnobodip/" target="-blank">
            <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-4xl text-[#00B207]"
              icon={faSquareInstagram}
            />
            <div>
              <p className=" text-2xl text-[#FF8A00] font-semibold hover:underline cursor-pointer">
                Fresh Food Shop in Thakurgaon
              </p>
              <p className="text-[16px] text-[#808080] ">Instagram Id...</p>
            </div>
          </div>
          </a>
          <a href="tel:+8801833597831">
            <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-4xl text-[#00B207]"
              icon={faSquareWhatsapp}
            />
            <div>
              <p className=" text-2xl text-[#FF8A00] font-semibold hover:underline cursor-pointer">
                +880 18335 97831
              </p>
              <p className="text-[16px] text-[#808080] ">Whatsapp Number...</p>
            </div>
          </div>
          </a>
          <a href="mailto:nobodipdebnath452@gmail.com">
            <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-4xl text-[#00B207]"
              icon={faEnvelope}
            />
            <div>
              <p className=" text-2xl text-[#FF8A00] font-semibold hover:underline cursor-pointer">
                nobodipdebnath452@gmail.com
              </p>
              <p className="text-[16px] text-[#808080] ">Message on Gmail..</p>
            </div>
          </div>
          </a>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-4xl text-[#00B207]"
              icon={faYoutube}
            />
            <div>
              <p className=" text-2xl text-[#FF8A00] font-semibold hover:underline cursor-pointer">
                Watch on Youtube..
              </p>
              <p className="text-[16px] text-[#808080] ">Watch video ...</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-4xl text-[#00B207]"
              icon={faPhoneVolume}
            />
            <div>
              <p className=" text-2xl text-[#FF8A00] font-semibold hover:underline cursor-pointer">
                +8801 3220 3474
              </p>
              <p className="text-[16px] text-[#808080] ">Contact on phone..</p>
            </div>
          </div>
        </div>
        <div className=" p-6  rounded-lg shadow-2xl">
          <form action="https://api.web3forms.com/submit" method="POST" className=" flex flex-col gap-4">
          <input type="hidden" name="access_key" value="1d1041f6-669b-4196-a44e-8986afc37fe1"></input>
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text" name="name" required
                placeholder="Enter Your name"
                className="py-3 px-4 w-full border border-gray-300 outline-none rounded-xl placeholder:text-[#FF8A00] mt-2"
              />
            </div>
            <div>
              <label htmlFor="">Phone Number</label>
              <input
                type="number" name="number" required
                placeholder="Enter Your phone Number"
                className="py-3 px-4 w-full border border-gray-300 outline-none rounded-xl placeholder:text-[#FF8A00] mt-2"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                required type="email" name="email"
                className="py-3 px-4 w-full border border-gray-300 outline-none rounded-xl placeholder:text-[#FF8A00] mt-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="label">Subject</label>
              <input
                type="text" name="text"
                className="py-3 px-4 w-full border border-gray-300 outline-none rounded-xl placeholder:text-[#FF8A00] mt-2"
                placeholder="Enter Your Subject"
              />
            </div>
            <div>
              <label htmlFor="">Enter Your Message</label>
              <textarea name="message" placeholder="Enter Your Message.."  className="py-3 px-4 w-full border border-gray-300 outline-none rounded-xl placeholder:text-[#FF8A00] mt-2" rows={3} id=""></textarea>
            </div>

            <button type="submit" className="py-4 w-full rounded-xl bg-[#00B207] text-white font-semibold text-lg cursor-pointer">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
