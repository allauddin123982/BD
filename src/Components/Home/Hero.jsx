import HeroLeft from "../../assets/HeroLeft.png";
import mainLife from "../../assets/mainLife.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Hero = () => {
  return (
    <>
      <div className="w-full h-fit md:flex pl-4 pr-4 md:pl-32 md:pr-32 ">
        {/* left */}
        <div className="w-full p-8 md:pt-6">
          <p className="text-5xl md:text-7xl font-semibold md:p-2 ">
            Be a Hero...
          </p>

          <p className="text-5xl md:text-7xl font-semibold md:p-2">
            Donate Now...!
          </p>

          <img src={HeroLeft} alt="heroleft" className="md:w-[600px] pt-4" />
        </div>

        {/* Right */}
        <div className="right w-full border-black md:pt-4 flex flex-col items-center">
          <form class="flex flex-col w-[360px] md:w-full md:flex md:flex-row gap-2 p-2 ">
            <input
              type="search"
              id="default-search"
              class=" w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search Blood Type"
              required
            />

            <input
              type="search"
              id="default-search"
              class=" w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search By Location"
              required
            />
            <button
              type="submit"
              class="text-white end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </form>

          <div className="mt-6 md:mt-10 flex gap-4 p-4">
            <p className="md:w-[540px] text-lg">
              We are a small organization dedicated to highlighting the voices
              of women and girls against discrimination and abuse. We champion
              and encourage meaningful discourse on intersectional feminism.
            </p>
            <p className="hidden md:block ">
              <img src={mainLife} alt="" className="w-[230px] h-[190px] " />
            </p>
          </div>

          <div className="tabs flex flex-wrap gap-6 p-4 border-b-4 pb-10 border-black ">
            <button className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md">
              Check Eligibilty
            </button>
            <button className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md">
              Donate Blood
            </button>
            <button className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md">
              Article
            </button>
            <button className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md">
              Join the campaign
            </button>
            <button className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md">
              Donate Plasma
            </button>
            <button className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md">
              Donate for Cancer
            </button>
          </div>

          <div className="social_Links">
            <p className="text-xl p-2 font-mono text-center">
              FOLLOW US ON SOCIAL MEDIA
            </p>
            <div className="flex justify-center gap-12 text-3xl p-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-700"
              >
                <IoMail />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Hero;
