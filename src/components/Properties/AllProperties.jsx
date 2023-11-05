import { InvestmentHomes } from "../../data";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

const Allproperties = () => {
  return (
    <div className="h-screen ">
      <div className=" w-[100%]  bg-[#e5e5e5] mt-20 mx-auto">
        <div className=" w-[85%] mx-auto ">
          <div className="flex flex-col text-start sm:flex-row sm:justify-between align-items-end max-sm:items-center">
            <h2 className="text-[2rem] leading-[38px] tracking-[-0.05em] p-0 m-0 sm:self-end ">
              All Properties
            </h2>
            <div className="relative max-sm:mt-4">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <RiSearchLine className="text-gray-500" />
              </span>
              <input
                type="text"
                className="pl-12 w-[18rem] sm:w-[24rem] pr-2 py-2 border-[1.5px] border-solid border-gray-400 rounded-md focus:outline-none"
                placeholder="Search for locations or properties"
              />
            </div>
          </div>
          <div className="w-[100%] flex flex-col max-sm:items-center mt-14 sm:flex-row max-sm:pb-8">
            {InvestmentHomes.map((invest) => (
              <div
                className={`mt-4 max-sm:mt-8 flex flex-col ${
                  invest.id >= 1 && invest.id <= 3 ? "sm:ml-5" : "ml-0"
                }`}
                key={invest.id}
              >
                <NavLink
                  to={`/properties/allProperties/${invest.id.toString()}`}
                >
                  <img src={invest.img} alt="" />
                  <div className="mt-6">
                    <h3 className="text-[16px] leading-[25px] tracking-tighter">
                      {invest.name}
                    </h3>
                    <h3 className="text-[22px] leading-[34px] tracking-[-0.03em] font-bold">
                      {invest.price}
                    </h3>
                    <h3 className="text-[13px] leading-[19px] tracking-tighter opacity-40 font-normal ">
                      {invest.info}
                    </h3>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproperties;
