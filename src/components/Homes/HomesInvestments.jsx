import { categoriesFilter, locationsFilter, InvestmentHomes } from "../../data";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const HomesInvestments = () => {
  return (
    <div className=" h-screen">
      <div className="flex w-[85%] mt-20  mx-auto">
        <div className="mt-[3.72rem]  mr-5 w-[45%]">
          <div className="categories bg-white px-5 py-5 shadow-sm rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className="text-[20px]">Categories</h2>
              <h3 className="underline">Clear all</h3>
            </div>
            <div className="mt-5">
              {categoriesFilter.map((categories) => (
                <label key={categories.id} className="flex mt-4 items-center">
                  <input
                    type="checkbox"
                    value={categories.id}
                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-300 rounded "
                  />
                  <span className="ml-4  text-[15px]">{categories.text}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="locations mt-4 bg-white px-5 py-5 shadow-sm rounded-[10px]">
            <div className="flex justify-between">
              <h2 className="text-[20px]">Locations</h2>
              <h3 className="underline">Clear all</h3>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 ">
              {locationsFilter.map((location) => (
                <label key={location.id} className="flex mt-1 items-center ">
                  <input
                    type="checkbox"
                    value={location.id}
                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-300 rounded "
                  />
                  <span className="ml-3">{location.text}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="values mt-4 bg-white px-5 py-5 shadow-sm rounded-[10px]">
            <h2 className="text-[20px]">Price range</h2>
            <div className="flex items-center mt-4">
              <button className="bg-gray-200 border-[1.5px] border-solid rounded-[5px] border-gray-800 rounded-5 text-[15px] leading-[19px] tracking-[-0.05em] pl-5 pr-12 py-3">
                Min.Value
              </button>{" "}
              <h3 className="ml-3">to</h3>{" "}
              <button className="bg-gray-200 border-[1.5px] border-solid border-gray-800 rounded-[5px] ml-3 text-[15px] leading-[19px] tracking-[-0.05em] pl-5 pr-12 py-3">
                Max.Value
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[100%]">
          <div className="flex justify-between align-items-end ">
            <h2 className="text-[2rem] leading-[38px] tracking-[-0.05em] p-0 m-0 self-end ">
              All Homes
            </h2>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <RiSearchLine className="text-gray-500" />
              </span>
              <input
                type="text"
                className="pl-12 w-[24rem] pr-2 py-2 border-[1.5px] border-solid border-gray-400 rounded-md focus:outline-none"
                placeholder="Search for locations or properties"
              />
            </div>
          </div>
          <div className="w-[100%] flex flex-col sm:flex-row">
            {InvestmentHomes.map((invest) => (
              <div
                className={`mt-4 flex flex-col ${
                  invest.id >= 1 && invest.id <= 3 ? "ml-5" : "ml-0"
                }`}
                key={invest.id}
              >
                <NavLink to={`/homes/homesInvestments/${invest.id.toString()}`}>
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

export default HomesInvestments;
