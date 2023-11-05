import { NavLink } from "react-router-dom";
import { useState } from "react";
import adminImg from "../assets/ModulepageImgs/admin.svg";
import Homes from "../assets/ModulepageImgs/Homes.png";
import HomesVest from "../assets/ModulepageImgs/Homesvest.png";
import LandBanking from "../assets/ModulepageImgs/LandBanking.png";
import Properties from "../assets/ModulepageImgs/Properties.png";
import productInfoImg from "../assets/commonImgs/productInfoImg.svg";

const LandingPage = () => {
  const [element, setElement] = useState(true);
  const [element2, setElement2] = useState(true);

  return (
    <div className="w-screen max-h-screen ">
      <div className="flex flex-col items-center justify-center px-1 sm:px-0 pb-[5rem] sm:pb-[3rem] ">
        <div className="flex flex-col justify-items-center mt-20">
          <img src={adminImg} alt="adminImg" className="self-center" />
          <h1 className="mt-4 font-normal text-[1.88rem] text-center leading-[2.4rem] tracking-[0.0em]">
            Welcome back, Admin
          </h1>
        </div>
        <div className="mt-20">
          <h1 className="text-center tracking-[-0.05em] font-normal text-[1.30rem] leading-[1.6rem] ">
            What would you like to do today?
          </h1>
          <div className="mt-8 flex flex-wrap w-screen justify-center sm:gap-x-[3rem] sm:gap-y-[2rem] sm:justify-center sm:items-center ">
            <NavLink to="/homes" className="no-underline">
              <div
                onMouseEnter={() => setElement2(false)}
                onMouseLeave={() => setElement2(true)}
                className={`${
                  element
                    ? ""
                    : "transition ease-in-out duration-500 opacity-40"
                }`}
              >
                <img src={Homes} alt="" />
                <h1 className="text-center mt-4 text-[1.30rem] leading-[1.6rem] tracking-[-0.05em]">
                  Homes
                </h1>
              </div>
            </NavLink>
            <NavLink className="no-underline">
              <div className=" sm:mt-0 mt-12 ">
                <div className="relative">
                  <h1 className="text-white z-30 text-[23px] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    coming soon...
                  </h1>
                  <img src={LandBanking} className="grayscale" alt="" />
                </div>
                <h1 className="text-center mt-4 text-[1.30rem] leading-[1.6rem] tracking-[-0.05em]">
                  LandBanking
                </h1>
              </div>
            </NavLink>
            <NavLink to="/properties" className="no-underline">
              <div
                onMouseEnter={() => setElement(false)}
                onMouseLeave={() => setElement(true)}
                className={` sm:mt-0 mt-12 ${
                  element2
                    ? ""
                    : " transition-all ease-in-out duration-500 opacity-40"
                }`}
              >
                <img src={Properties} alt="" />
                <h1 className="text-center mt-4 text-[1.30rem] leading-[1.6rem] tracking-[-0.05em]">
                  Properties
                </h1>
              </div>
            </NavLink>
            <NavLink className="no-underline">
              <div className=" sm:mt-0 mt-12">
                <div className="relative">
                  <h2 className="text-white z-30 text-[23px] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    coming soon...
                  </h2>
                  <img src={HomesVest} className="grayscale" alt="" />
                </div>
                <h1 className="text-center mt-4 text-[1.30rem] leading-[1.6rem] tracking-[-0.05em]">
                  Homevest
                </h1>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center mt-[5rem] sm:mt-[5rem] ">
          <img src={productInfoImg} className="mr-4" alt="" />
          <h1 className="bg-[#181818] text-[#FAFAFA] font-normal text-center tracking-[-0.05em] text-[0.94rem] leading-[1.19rem] rounded-[1.88rem] mt-4 px-5 py-5 sm:mt-0 sm:py-4 sm:px-5">
            Do not know which module to pick?{" "}
            <a
              href="https://www.linkedin.com/in/toluwanimi-eniolorunda/"
              target="blank"
            >
              <span className="underline pointer"> Learn more </span>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
