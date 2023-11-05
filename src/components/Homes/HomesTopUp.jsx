import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  homesMyInvestments,
  paymentHistory,
  InvestmentHomes,
} from "../../data";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import Modal from "react-modal";

const InvestmentDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "10px",
      padding: "1.5rem 1.5rem",
      width: "37.5rem",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const { id } = useParams();

  const products = homesMyInvestments.find((myInvest) => myInvest.id == id);

  return (
    <div className="min-h-screen w-screen pb-12">
      <div className=" w-[70%] mx-auto">
        <div className="flex justify-between mt-16">
          <div className="flex items-center">
            <AiOutlineArrowLeft
              className="w-6 h-6 cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <h3 className="ml-4 text-[1.3rem]">Ikota Fountain House</h3>
          </div>
          <div>
            <button className="text-white bg-[#0a2c33] rounded-md px-10 py-4 ">
              Top up
            </button>
          </div>
        </div>
        <div className="w-[100%] ">
          <img
            src={products.img}
            className="w-[100%] object-cover rounded-lg h-[25rem] mt-10"
            alt=""
          />
        </div>
        <div className="flex sm:flex-row gap-14 mt-9">
          <div className="basis-[75%]">
            <div className="property-details">
              <h3 className="text-[25px] leading-[32px] tracking-[-0.03em]">
                Property Details
              </h3>
              <p className="text-[17px] leading-[29px] tracking-[-0.03em] mt-2">
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds, to seek out new life and new civilizations, to go boldly
                where no man has gone before. Many say exploration is part of
                our destiny, but its actually our duty to future generations and
                their quest to ensure the survival of the human species.{" "}
              </p>
              <h3 className="text-[25px] mt-9 leading-[32px] tracking-[-0.03em]">
                Little more details
              </h3>
              <p className="text-[17px] leading-[29px] tracking-[-0.03em] mt-2">
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year <br /> mission: to explore strange new
                worlds, to seek out new life and new civilizations
              </p>
            </div>
            <div className="property-table mt-10">
              <h3 className="text-[25px] mt-9 leading-[32px] tracking-[-0.03em]">
                Payment History
              </h3>
              <div className="flex gap-8">
                <table className="w-[90%] mt-6">
                  <thead className="bg-[#EDEDED] mt-4">
                    <tr>
                      <th className="text-start py-3 px-5">Date</th>
                      <th className="text-start px-5">Amount Paid</th>
                      <th className=" px-5">Status</th>
                      <th className="text-start px-5">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((row, index) => (
                      <tr key={index}>
                        <td className="py-2 px-5">{row.date}</td>
                        <td className="py-2 px-5">{row.amountPaid}</td>
                        <td className="py-2 px-5 text-start">
                          {row.status === "Approved" ? (
                            <>
                              {" "}
                              <RxDotFilled className="text-green-700 inline-block " />{" "}
                              {row.status}{" "}
                            </>
                          ) : (
                            <>
                              <RxDotFilled className="text-red-800  inline-block " />
                              {row.status}
                            </>
                          )}
                        </td>
                        <td className="py-2 px-5">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="property-links mt-10">
              <h3 className="text-[25px] mt-9 leading-[32px] tracking-[-0.03em]">
                Quick Links
              </h3>
              <div className="flex gap-3 flex-col items-center justify-start sm:flex-row flex-wrap mt-8">
                <button
                  onClick={openModal}
                  className={` text-[15px] leading-[19px] tracking-[-0.03em] border-2 border-black rounded-md px-10 py-3`}
                >
                  Change Units
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <form>
                    <div className="flex justify-between items-center">
                      <h1 className="text-black font-circular-std text-1.5625rem font-normal font-400 leading-normal tracking-(-0.078125)rem">
                        Change of Unit
                      </h1>
                      <MdOutlineCancel
                        className="w-[2rem] h-[2rem]"
                        onClick={closeModal}
                      />
                    </div>
                    <div className="mt-14">
                      <h3>Old Plot Size</h3>
                      <input
                        type="text"
                        placeholder="360 SQM/Starter Plot"
                        className="mt-2 border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                      />
                    </div>
                    <div className="mt-8">
                      <h3>New Plot Size</h3>
                      <select
                        name=""
                        id=""
                        className="mt-2 border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-full py-2 px-4 rounded-md"
                      >
                        <option value="" className="bg-[#fff]">
                          450 SQM/Executive Plot
                        </option>
                        <option value="">450 SQM/Executive Plot</option>
                        <option value="">450 SQM/Executive Plot</option>
                      </select>
                    </div>
                    <button
                      className="bg-[#0a2c33] rounded-[0.3125rem] text-white px-8 py-3 mt-14 "
                      onClick={closeModal}
                    >
                      Send Request
                    </button>
                  </form>
                </Modal>
                <button
                  className={` text-[15px] leading-[19px] tracking-[-0.03em] border-2 border-black rounded-md px-10 py-3`}
                >
                  Change Location
                </button>
                <button
                  className={` text-[15px] leading-[19px] tracking-[-0.03em] border-2 border-black rounded-md px-10 py-3`}
                >
                  Account Statement
                </button>
                <button
                  className={` text-[15px] leading-[19px] tracking-[-0.03em] border-2 border-black rounded-md px-10 py-3`}
                >
                  Change Plan
                </button>
                <button
                  className={` text-[15px] leading-[19px] tracking-[-0.03em] border-2 border-black rounded-md px-10 py-3`}
                >
                  Special Request
                </button>
              </div>
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

export default InvestmentDetails;
