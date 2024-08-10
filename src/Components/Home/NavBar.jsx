import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-gray-600 to-slate-900 p-2 w-full ">
        <div className="max-w-[1380px] items-center py-2 flex justify-between mx-auto">
          <div className="text-3xl  font-serif text-white flex items-center gap-2">
            <p className="text-red-600 font-bold">Blood</p> & Plasma Link
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
            <li className="hover:text-orange-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/el">Eligibility</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/donateBlood">Donate Blood | Plasma</Link>
            </li>
          

            <li className="hover:text-orange-400">
              <Link to="/purchase">Support Cancer Patient</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>

          {/* Responsive menu */}
          <ul
            className={`bg-gradient-to-r from-slate-900 to-gray-900 duration-500 md:hidden text-white fixed bg-gray-dark p-5  top-[72px] w-full h-screen z-20
                    ${toggle ? "left-[0%]" : "left-[-100%]"}
                `}
          >
            <li className="p-5 font-bold" onClick={() => setToggle(!toggle)}>
              <Link to="/">Home</Link>
            </li>
            <li className="p-5 font-bold" onClick={() => setToggle(!toggle)}>
              <Link to="/el">Eligibility</Link>
            </li>
            <li className="p-5 font-bold" onClick={() => setToggle(!toggle)}>
              <Link to="/donateBlood">Donate Blood</Link>
            </li>
           
            <li className="p-5 font-bold" onClick={() => setToggle(!toggle)}>
              <Link to="/purchase">Support Cancer Patient</Link>
            </li>
            <li className="p-5 font-bold" onClick={() => setToggle(!toggle)}>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
