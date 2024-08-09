import { useState, useEffect, useRef } from "react";
import HeroLeft from "../../assets/HeroLeft.png";
import mainLife from "../../assets/mainLife.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./home.css";
const Hero = ({
  bloodType,
  setBloodType,
  bloodLocation,
  setBloodLocation,
  send,
  setSend,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef();
  const carouselRef = useRef(null);
  const allPics = [
    "/image/a7.jpg",
    "/image/a9.jpg",
    "/image/a10.jpg",
    "/image/a11.jpg",
    "/image/a12.jpeg",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSend(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      SliderRight(elementRef.current);
    }, 4000); // Move to the right every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const SliderRight = (carousel) => {
    if (carousel) {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScrollLeft) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
      }
    }
  };

  const Sliderleft = (carousel) => {
    if (carousel) {
      if (carousel.scrollLeft === 0) {
        carousel.scrollTo({
          left: carousel.scrollWidth - carousel.clientWidth,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    const carousel = carouselRef.current;
    const interval = setInterval(() => {
      if (carousel) {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScrollLeft) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

          <div className="relative w-[380px] md:w-[600px] ">
            <AiOutlineLeft
              className="arrow arrow-left"
              onClick={() => Sliderleft(elementRef.current)}
            />
            <div
              ref={elementRef}
              className="carousel-container scrollbar-hide md:scrollbar-default"
            >
              {allPics.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image w-full"
                />
              ))}
            </div>
            <AiOutlineRight
              className="arrow arrow-right"
              onClick={() => SliderRight(elementRef.current)}
            />
          </div>

          {/* <img src={HeroLeft} alt="heroleft" className="md:w-[600px] pt-4" /> */}
        </div>

        {/* Right */}
        <div className="right w-full border-black md:pt-4 flex flex-col items-center">
          <form
            className="flex flex-col w-[360px] md:w-full md:flex md:flex-row gap-2 p-2 "
            onSubmit={handleSearch}
          >
            <input
              type="search"
              id="default-search"
              className="w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search Blood Type"
              required
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            />

            <input
              type="search"
              id="default-search"
              className=" w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search By Location"
              required
              value={bloodLocation}
              onChange={(e) => setBloodLocation(e.target.value)}
            />
            <button
              type="submit"
              className="text-white end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-4 py-2 "
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

          <div className="tabs flex flex-wrap gap-6 p-4 border-b-4 pb-10 border-black mt-4 ">
            <Link to={"/DonateBlood"}>
              <button className="bg-black text-white p-2 md:p-3 aspect-auto md:text-lg md:font-medium rounded-md">
                Donate Blood
              </button>
            </Link>
            <Link to={"/DonateBlood"}>
              <button className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md">
                Donate Plasma
              </button>
            </Link>

            <Link to="/DonateForCancer">
              <button className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md">
                Donation Drive
              </button>
            </Link>

            <div className="relative">
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="bg-black text-white p-2 md:p-3 aspect-auto  md:text-lg md:font-medium rounded-md text-center inline-flex items-center"
                type="button"
              >
                Articles
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isOpen && (
                <div
                  id="dropdown"
                  className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {" "}
                    <li>
                      <Link
                        to="/DiscoverPlasma"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Discover Plasma
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Cardiovascular "
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Cardiovascular
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/BloodTypes"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        BloodTypes
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="social_Links ">
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
