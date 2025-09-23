import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

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
          <form className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center relative"  action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="1d1041f6-669b-4196-a44e-8986afc37fe1"></input>
            <input className="outline-none border border-gray-300 py-3 px-6 lg:rounded-l-3xl rounded-3xl lg:w-[500px] w-full" type="email" placeholder="Enter Your Email" name="email" required />
            <button type="submit" className="cursor-pointer py-3.5 rounded-3xl px-8 bg-[#00B207] text-white font-semibold lg:absolute left-[80%]">Submit</button>
          </form>

          <div className="flex justify-between items-center pt-4 lg:pt-0 gap-4">
            <a href="https://www.facebook.com/profile.php?id=61554300737206" target="-blank"><FontAwesomeIcon className="p-2 border rounded-full py-2.5 border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500" icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/debnathnobodip/" target="-blank"><FontAwesomeIcon className="p-2 border rounded-full py-2.5 border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500" icon={faInstagram} /></a>
            <a href="https://x.com/NobodipD47807" target="-blank"><FontAwesomeIcon className="p-2 border rounded-full py-2.5 border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500" icon={faXTwitter} /></a>
            <a href="https://www.pinterest.com/nobodipdebnath/_profile/_created/" target="-blank"><FontAwesomeIcon className="p-2 border rounded-full py-2.5 border-[#00B207] hover:bg-[#00B207] hover:text-white duration-500" icon={faPinterestP} /></a>
          </div>
        </div>
      </section>
      {/* contact section */}
    </div>
  );
}

export default Contact;
