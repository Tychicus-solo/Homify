import Homify from "../assets/commonImgs/Homify.svg";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img src={Homify} className="w-[10rem]" alt="" />
      <form
        action=""
        className="bg-white w-[24rem] mt-8 px-[1.5rem] py-[1.5rem] rounded-[20px]"
      >
        <h1 className="text-[#000000] font-bold text-[1rem]">Password Reset</h1>
        <div className="mt-3">
          <label htmlFor="" className="text-[0.75rem] text-[#666]">
            Enter the email address associated with your account
          </label>
          <input
            type="text"
            placeholder="email address"
            className="mt-3 border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
          />
        </div>
        <button className="bg-[#181818] text-[13px] rounded-[5px] w-full mt-8 py-4 text-white">
          Request Reset
        </button>
        <h3 className="mt-[4rem] mb-[1rem] leading-[-0.65px] text-[13px] text-[#666] text-center">
          Remember your password?{" "}
          <NavLink className="underline" to="/login">
            Login
          </NavLink>
        </h3>
      </form>
    </div>
  );
};

export default ForgotPassword;
