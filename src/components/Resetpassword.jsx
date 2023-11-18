import Homify from "../assets/commonImgs/Homify.svg";
import { NavLink } from "react-router-dom";

const Resetpassword = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img src={Homify} className="w-[10rem]" alt="" />
      <div className="bg-white w-[24rem] mt-8 px-[1.5rem] py-[1.5rem] rounded-[20px]">
        <h1 className="text-[#000000] font-bold text-[1rem]">Reset Password</h1>
        <div className="mt-3">
          <p className="text-[#666666] text-[15px]">
            Hello, we’ve sent you a reset link, kindly follow instructions to
            reset your password. Check spam/junk folder if you don’t see our
            email.
          </p>
        </div>
        <NavLink to="/forgotpassword">
          <button className="bg-[#0a2c33] text-[13px] rounded-[5px] w-full mt-8 py-4 text-white">
            Resend Email
          </button>
        </NavLink>
        <h3 className="mt-[4rem] mb-[1rem] leading-[-0.65px] text-[13px] text-[#666] text-center">
          Remember your password?{" "}
          <NavLink className="underline" to="/login">
            Login
          </NavLink>
        </h3>
      </div>
    </div>
  );
};

export default Resetpassword;
