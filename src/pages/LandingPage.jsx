import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import "../css/landingPage.css";
import { RiArrowRightLine } from "react-icons/ri";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="card-container flex h-screen w-screen">
        <div className="card">
          <div className="caption">
            <h2>Homes</h2>
            <div className="description">
              <p className="text-[16px] leading-normal">
                Welcome to Homify where luxury meets affordability, homes built
                to your taste, class and lifestyle in a secured and thriving
                neighborhood.
              </p>
              <NavLink to="login">
                <button className="flex items-center mt-6 text-black bg-white px-3 py-3 rounded-md">
                  Take me there <RiArrowRightLine className="ml-1 w-8 h-5" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="caption">
            <h2>Properties</h2>
            <div className="description">
              <p className="text-[16px] leading-normal">
                Your journey to homeownership and property investment starts
                here, get to choose from 61 prime landed properties across 7
                states of the federation.
              </p>
              <NavLink to="login">
                <button className="flex items-center mt-6 text-black bg-white px-3 py-3 rounded-md">
                  Take me there <RiArrowRightLine className="ml-1 w-8 h-5" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="caption">
            <h2>Landbanking</h2>
            <div className="description">
              <p className="text-[16px] leading-normal">Coming soon....</p>
              {/* <NavLink to="modulePage">
                <button className="flex items-center mt-6 text-black bg-white px-3 py-3 rounded-md">
                  Take me there <RiArrowRightLine className="ml-1 w-8 h-5" />
                </button>
              </NavLink> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="caption">
            <h2>HomeVest</h2>
            <div className="description">
              <p className="text-[2rem] leading-normal">Coming soon....</p>
              {/* <NavLink to="/modulePage">
                <button className="flex items-center mt-6 text-black bg-white px-3 py-3 rounded-md ">
                  Take me there <RiArrowRightLine className="ml-1 w-8 h-5" />
                </button>
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
