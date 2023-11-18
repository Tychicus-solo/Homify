import { NavLink } from "react-router-dom";
import Homify from "../assets/commonImgs/Homify.svg";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

const SignupForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: "top-right" });
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid } = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: uid,
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      toast.success("Welcome to Homify", { position: "top-right" });
      navigate("/modulePage");
    } catch (error) {
      toast.error("Email address is already in use", { position: "top-right" });
    }
  };
  return (
    <div className="flex flex-col justify-center my-[100px] sm:my-[60px] bg-[#e5e5e5] h-[100%] w-screen">
      <div className="flex flex-col items-center">
        <img src={Homify} className="self-center" alt="" />
        <div className="bg-white mt-[2rem] w-[24rem] px-[3rem] pb-12 py-[2rem] rounded-[20px]">
          <form onSubmit={signUp}>
            <h1 className="text-[#000000] text-center mb-[1rem] text-[1.55rem]">
              Create an account
            </h1>
            <div className="form-control mb-[1rem]">
              <input
                placeholder="First Name"
                id="firstName"
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
              />
            </div>
            <div className="form-control mb-[1rem]">
              <input
                placeholder="Last Name"
                id="lastName"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
              />
            </div>
            <div className="form-control mb-[1rem]">
              <input
                placeholder="Email Address"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
              />
            </div>
            <div className="form-control mb-[1rem]">
              <input
                placeholder="Password"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
              />
            </div>
            <div className="form-control mb-[1rem]">
              <input
                placeholder="Confirm Password"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-[#0A2C33] text-white w-full py-5 mt-5 rounded-[10px]"
            >
              Login
            </button>
            <NavLink to="/Login">
              <h3 className="mt-4 text-center">
                Already a user? <span className="underline">Login</span>
              </h3>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
