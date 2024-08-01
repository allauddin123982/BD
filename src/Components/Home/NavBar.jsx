import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-gray-600 to-slate-900 p-2 ">
        <div className="max-w-[1240px] items-center py-2 flex justify-between mx-auto">
          <div className="text-4xl font-bold font-serif text-white flex items-center gap-2">
            <p className="text-red-600">Blood</p> Donation
          </div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-3xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-3xl md:hidden block"
            />
          )}

          <ul className="hidden md:flex text-white text-xl gap-10 ">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/el">Eligibility</Link>
            </li>
            <li className="">
              <Link to="/donateBlood">Donate Blood</Link>
            </li>
            <li className="">
              <Link to="/gallery">Campaign</Link>
            </li>
            <li className="">
              <Link to="/contact">Donate Plasma</Link>
            </li>
            <li className="">
              <Link to="/DonateForCancer">Donate for Cancer</Link>
            </li>
          </ul>

          {/* Responsive menu */}
          <ul
            className={`bg-gradient-to-r from-slate-900 to-gray-900 duration-500 md:hidden text-white fixed bg-gray-dark p-5  top-[98px] w-full h-screen
                    ${toggle ? "left-[0%]" : "left-[-100%]"}
                `}
          >
            <li className="p-5 font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="p-5 font-bold">
              <Link to="/el">Eligibility</Link>
            </li>
            <li className="p-5 font-bold">
              <Link to="/donateBlood">Donate Blood</Link>
            </li>
            <li className="p-5 font-bold">Campaign</li>
            <li className="p-5 font-bold">Donate Plasma</li>
            <li className="p-5 font-bold">
              <Link to="/DonateForCancer">Donate for Cancer</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
