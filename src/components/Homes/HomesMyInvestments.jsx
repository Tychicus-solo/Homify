import { homesMyInvestments } from "../../data";
import { NavLink } from "react-router-dom";

const HomesMyInvestments = () => {
  return (
    <div className="h-screen mx-auto container mt-24 w-[75%]">
      <h2 className="text-[2rem] leading-[38px] tracking-[-0.05em]">
        My Homes
      </h2>
      <div className="flex flex-col sm:flex-row mt-6">
        {homesMyInvestments.map((hmi) => (
          <div
            key={hmi.id}
            className={` hover:cursor-pointer w-[31%] ${
              hmi.id > 0 ? "sm:ml-8 max-sm:mt-12" : null
            } `}
          >
            <NavLink to={`/homes/homesMyInvestments/${hmi.id.toString()}`}>
              <img src={hmi.img} className="w-full" alt="" />
              <div className="flex justify-between mt-4">
                <p className="w-[12rem]">{hmi.text}</p>
                <button className="border-[1.5px] border-solid border-black px-4 rounded-md">
                  {hmi.cta}
                </button>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomesMyInvestments;
