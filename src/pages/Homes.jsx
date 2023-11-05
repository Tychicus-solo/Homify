import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import Homify from "../assets/commonImgs/Homify.svg";
import logo from "../assets/commonImgs/Homify.svg";
import admin from "../assets/ModulepageImgs/admin.svg";
import help from "../assets/commonImgs/help-circle.svg";

const Homes = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-screen min-h-screen bg-[#E5E5E5]  sm:px-4">
      <div className="sm:hidden flex flex-col bg-[#fff]">
        <div className={`flex justify-between items-center px-6 sm:px-12 py-6`}>
          <div onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <RiCloseFill className="w-8 h-7 cursor-pointer" />
            ) : (
              <RiMenu2Fill className="w-8 h-7 cursor-pointer" />
            )}
          </div>
          <img src={Homify} className="w-[7rem] sm:w-[10rem]" alt="" />
        </div>
        <div
          className={` flex flex-col self-center items-center transition-all duration-500 ease-linear ${
            toggle ? "h-[24rem]" : "h-0"
          } `}
        >
          {toggle && (
            <div className="flex flex-col items-center text-center">
              <NavLink
                end
                to="/homes"
                className=" mt-4 relative text-lg w-fit block transition-transform after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-x-100 active:scale-x-100 aria-[current=page]:after:scale-x-100"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="homesinvestments"
                className="mt-6 relative text-lg w-fit block transition-transform after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-x-100 active:scale-x-100 aria-[current=page]:after:scale-x-100"
              >
                Investments
              </NavLink>
              <NavLink
                to="homesmyinvestments"
                className="mt-6 relative text-lg w-fit block transition-transform after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-x-100 active:scale-x-100 aria-[current=page]:after:scale-x-100"
              >
                My Investments
              </NavLink>
              <NavLink
                to="wallet"
                className="mt-6 relative text-lg w-fit block transition-transform after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-x-100 active:scale-x-100 aria-[current=page]:after:scale-x-100"
              >
                Wallet
              </NavLink>
              <NavLink to="/modulePage" className="sm:ml-10 mt-6">
                <button className=" px-3 py-3 flex items-center bg-[#fffaf9] border border-solid border-[#0A2C33] rounded-md">
                  Switch module
                  <span className="ml-2">
                    {" "}
                    <img src={help} alt="" />{" "}
                  </span>
                </button>
              </NavLink>
              <NavLink to="profile" className="sm:ml-10  sm:mt-0 mt-6">
                <img src={admin} className="w-[40px]" alt="" />
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:block md:flex sm:items-center justify-between sm:pt-4 px-10 ">
        <div>
          <img src={logo} className="w-[150px]" alt="" />
        </div>
        <div className="flex items-center ">
          <div className="flex items-center">
            <NavLink
              to="/homes"
              end
              className={` ml-10 relative text-lg w-fit block transition-transform after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-x-100 active:scale-x-100 aria-[current=page]:after:scale-x-100 `}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="homesinvestments"
              className="ml-10 relative text-lg w-fit block transition-transform after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-x-100 active:scale-x-100 aria-[current=page]:after:scale-x-100"
            >
              Investments
            </NavLink>
            <NavLink
              to="homesmyinvestments"
              className="ml-10 relative text-lg w-fit block transition-transform after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-x-100 active:scale-x-100 aria-[current=page]:after:scale-x-100"
            >
              My Investments
            </NavLink>
            <NavLink
              to="wallet"
              className="ml-10 relative text-lg w-fit block transition-transform after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-x-100 active:scale-x-100 aria-[current=page]:after:scale-x-100"
            >
              Wallet
            </NavLink>
            <NavLink to="/modulePage" className="ml-10">
              <button className=" px-3 py-3 flex items-center bg-[#fffaf9] border border-solid border-[#0A2C33] rounded-md">
                Switch module
                <span className="ml-2">
                  {" "}
                  <img src={help} alt="" />{" "}
                </span>
              </button>
            </NavLink>
            <NavLink to="profile" className="ml-10 ">
              <img src={admin} className="w-[40px]" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Homes;
