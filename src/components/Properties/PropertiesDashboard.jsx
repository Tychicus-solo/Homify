import blue from "../../assets/svg/blue.svg";
import purple from "../../assets/svg/purple.svg";
import red from "../../assets/svg/red.svg";
import { NavLink } from "react-router-dom";

import { DashboardHomes, InvestmentHomes } from "../../data";

const PropertiesDashboard = () => {
  return (
    <div className="mx-auto container mt-24 pb-24 w-[75%] ">
      <div className="flex flex-col items-center sm:flex-row ">
        <div className="bg-white flex flex-col rounded-[10px] px-5 py-3 border border-gray-300 max-sm:w-[100%]">
          <img src={blue} className="w-8 pt-5" alt="" />
          <div className="mt-14">
            <h6 className="text-[18px]  max-sm:text-[22px] leading-6 tracking-tighter">
              My Subscription
            </h6>
            <h2 className="leading-[30px] mt-3 tracking-[-0.05em] text-[26px] max-sm:text-[22px]">
              NGN 4,100,000/
              <span className="text-[#7d7d7d] text-[19px]">N 13,500,000</span>
            </h2>
          </div>
        </div>
        <div className="bg-white sm:ml-4 flex flex-col rounded-[10px] px-5 py-3 border border-gray-300 max-sm:w-[100%] max-sm:mt-4">
          <img src={purple} className="w-8 pt-5" alt="" />
          <div className="mt-8">
            <h6 className="text-[18px] leading-[30px] tracking-tighter">
              Your next payment <br /> of{" "}
              <span className="font-bold">NGN 150,000</span> is due in <br />{" "}
              <span className="font-bold">10 days</span>
            </h6>
          </div>
        </div>
        <div className="bg-white sm:ml-4 flex flex-col rounded-[10px] px-5 py-3 border border-gray-300 max-sm:w-[100%] max-sm:mt-4">
          <img src={red} className="w-8 pt-5" alt="" />
          <div className="mt-14">
            <h6 className="text-[16px] max-sm:text-[22px] leading-6 tracking-tighter">
              Pending Payments
            </h6>
            <h2 className="mt-2 text-[26px] max-sm:text-[22px] leading-[38px] tracking-tighter">
              NGN 1,310,000
            </h2>
          </div>
        </div>
      </div>
      <div className="py-2 mt-14">
        <h2 className="text-[30px] leading-[38px] tracking-tighter">
          My Homes
        </h2>
        <div className="flex flex-col sm:flex-row mt-6">
          {InvestmentHomes.map((invest) => (
            <div
              className={`flex flex-col sm:w-[23%] w-full max-sm:mt-8 ${
                invest.id >= 1 && invest.id <= 3 ? "sm:ml-5" : "ml-0"
              }`}
              key={invest.id}
            >
              <NavLink to={`/properties/myProperties/${invest.id.toString()}`}>
                <img src={invest.img} className="w-full" alt="" />
                <div className="mt-6">
                  <h3 className="text-[16px] leading-[25px] tracking-tighter">
                    {invest.name}
                  </h3>
                  <h3 className="text-[24px] leading-[34px] tracking-[-0.03em] font-bold">
                    {invest.price}
                  </h3>
                  <h3 className="text-[15px] leading-[19px] tracking-tighter opacity-40 font-normal ">
                    {invest.info}
                  </h3>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 sm:mt-14 ">
        <h2 className=" text-[30px] leading-[38px] tracking-tighter">
          Recommended Homes
        </h2>
        <div className="flex flex-col sm:flex-row mt-6">
          {DashboardHomes.map((homes) => (
            <div
              className={`flex flex-col sm:w-[23%] w-full max-sm:mt-8 ${
                homes.id >= 1 && homes.id <= 3 ? "sm:ml-5" : "ml-0"
              }`}
              key={homes.id}
            >
              <NavLink to={`/properties/allProperties/${homes.id.toString()}`}>
                <img src={homes.img} className="w-full" alt="" />
                <div className="mt-6">
                  <h3 className="text-[16px] leading-[25px] tracking-tighter">
                    {homes.name}
                  </h3>
                  <h3 className="text-[24px] leading-[34px] tracking-[-0.03em] font-bold">
                    {homes.price}
                  </h3>
                  <h3 className="text-[15px] leading-[19px] tracking-tighter opacity-40 font-normal ">
                    {homes.info}
                  </h3>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesDashboard;
