import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { InvestmentHomes } from "../../data";

const AllPropertiesDetails = () => {
  console.log("hello from all props details");
  const { id } = useParams();
  const navigate = useNavigate();
  const property = InvestmentHomes.find((invest) => invest.id == id);

  return (
    <div className="min-h-screen w-screen pb-12">
      <div className="w-[70%] mx-auto">
        <div className="flex justify-between mt-16">
          <div className="flex items-center">
            <AiOutlineArrowLeft
              className="w-6 h-6 cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <h3 className="ml-4 text-[1.3rem]">Ikota Fountain House</h3>
          </div>
          <div>
            <button className="text-white bg-[#0a2c33] rounded-md px-10 py-3">
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <img src={property.img} alt="" className="w-[100%] h-[25rem] mt-10" />
        </div>
        <div className="flex sm:flex-row gap-14 mt-9">
          <div className="flex sm:flex-row gap-14 mt-9">
            <div className="basis-[75%]">
              <div className="property-details">
                <h3 className="text-[25px] leading-[32px] tracking-[-0.03em]">
                  Property Details
                </h3>
                <p className="text-[17px] leading-[29px] tracking-[-0.03em] mt-2">
                  Space, the final frontier. These are the voyages of the
                  Starship Enterprise. Its five-year mission: to explore strange
                  new worlds, to seek out new life and new civilizations, to go
                  boldly where no man has gone before. Many say exploration is
                  part of our destiny, but its actually our duty to future
                  generations and their quest to ensure the survival of the
                  human species.{" "}
                </p>
                <h3 className="text-[25px] mt-9 leading-[32px] tracking-[-0.03em]">
                  Little more details
                </h3>
                <p className="text-[17px] leading-[29px] tracking-[-0.03em] mt-2">
                  Space, the final frontier. These are the voyages of the
                  Starship Enterprise. Its five-year <br /> mission: to explore
                  strange new worlds, to seek out new life and new civilizations
                </p>
              </div>
            </div>
            <div className="basis-[30%]">
              <div className="bg-blue-100 border-2 py-8 px-8 border-blue-900 rounded-lg">
                <h3 className="text-[25px] leading-[32px] tracking-[-0.03em]">
                  All Property Facilities
                </h3>
                <ul className="list-disc text-[17px] leading-[40px] tracking-[-0.03em]">
                  <li>Light Supply</li>
                  <li>Motorable Road</li>
                  <li>Security</li>
                  <li>Estate Gate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30%]">
          <h3 className="text-[25px] leading-[32px] tracking-[-0.03em]">
            You might like these
          </h3>
          <div className="w-[100%] flex flex-col mt-4 sm:flex-row">
            {InvestmentHomes.map((homes) => (
              <div
                key={homes.id}
                className={`mt-4 flex flex-col ${
                  homes.id >= 1 && homes.id <= 3 ? "ml-5" : "ml-0"
                }`}
              >
                <img src={homes.img} alt="" />
                <div className="mt-6">
                  <h3 className="text-[16px] leading-[25px] tracking-tighter">
                    {homes.name}
                  </h3>
                  <h3 className="text-[22px] leading-[34px] tracking-[-0.03em] font-bold">
                    {homes.price}
                  </h3>
                  <h3 className="text-[13px] leading-[19px] tracking-tighter opacity-40 font-normal ">
                    {homes.info}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesDetails;
