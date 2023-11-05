import Homify from "../assets/commonImgs/Homify.svg";
import { useState } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col content-center ">
      <div
        className={`flex justify-between items-center px-4 sm:px-12 py-6   `}
      >
        <div className="" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <RiCloseFill className="w-8 h-7 cursor-pointer" />
          ) : (
            <RiMenu2Fill className="w-8 h-7 cursor-pointer" />
          )}
        </div>
        <img
          src={Homify}
          className="w-[7rem] sm:w-[10rem] self-center ml-32"
          alt=""
        />
        <NavLink to="/login">
          <button className="bg-[#0A2C33] radius hidden sm:block text-white text-[0.9rem] rounded-md px-14 py-3">
            Login
          </button>
        </NavLink>
      </div>

      <div
        className={`flex flex-col text-center justify-items-center items-center  overflow-y-hidden transition-all duration-500 ease-linear ${
          toggle ? "sm:h-60 h-80" : "h-0"
        } `}
      >
        {toggle && (
          <>
            <NavLink
              to={"about-us"}
              className={`mt-10 relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
            >
              About Homify
            </NavLink>
            <NavLink
              className={`mt-5 relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
            >
              FAQs
            </NavLink>
            <NavLink
              to={"https://www.linkedin.com/in/tolu-eniolorunda-b3a043208"}
              target="blank"
              className={`mt-5 relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
            >
              Talk to Us
            </NavLink>
            <NavLink to="/login">
              <button className="bg-[#0A2C33] block sm:hidden text-white text-[0.9rem] rounded-md px-14 mt-6 py-4">
                Login
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
