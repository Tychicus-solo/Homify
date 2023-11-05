import { NavLink } from "react-router-dom";
import AboutImage from "../assets/grace-landing.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto sm:px-[7rem] my-24">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 d-flex items-center">
        <div className="mb-[4rem]">
          <div className="flex justify-center items-center">
            <div className="bg-[#0a2c33] p-4 rounded-full">
              <div className="lg:h-96 lg:w-96 w-72 h-72 rounded-full relative">
                <div
                  className="lg:h-96 lg:w-96 w-72 h-72 absolute"
                  style={{
                    backgroundImage: `url(${AboutImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    borderRadius: "0 0 30% 30%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:px-5">
          <p className="text-4xl max-sm:text-center sm:text-5xl font-bold">
            About Homify
          </p>
          <p className="font-normal mt-7 leading-loose text-2xl">
            Homify is an initiative of Pertinence, a major player in the real
            estate industry with global relevance. Pertinence has over 8 years
            of real estate practice experience with 8 offices, 60 estate
            locations and 13,000 partners across the world. Homify was developed
            to help multiply wealth through Real Estate investment. Homify
            provides opportunity for you to enjoy luxurious smarthomes with
            flexible payment plan spread across 3 years at an affordable rate.
            Homify has 3 products that helps you multiply your wealth which are
            Investments, Homes and LandBank
          </p>
          <NavLink to="/">
            <button className="bg-[#0A2C33] text-white text-[0.9rem] rounded-md   px-8 mt-4 py-5">
              Back To Home Page
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
