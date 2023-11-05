import frown from "../assets/svg/frown.svg";
import logo from "../assets/svg/logo-icon.svg";

const Wallet = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="w-[80%] flex mx-auto justify-center  mt-[6rem]">
        <div className="basis-[40%] bg-[#0a2c33] text-white ml-5 py-8 px-8 border border-gray-300 shadow-md rounded-lg">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg leading-8 tracking-tight">
              Wallet Balance
            </h1>
            <img src={logo} className="w-[2.5rem] bg-[#0a2c33]" alt="" />
          </div>
          <p className="mt-4 font-normal text-4xl leading-14">NGN 150,000</p>
          <div className="flex items-center mt-14">
            <button className="bg-[#fafafa] text-[#0a2c33] rounded-md px-8 py-4">
              Fund Wallet
            </button>
            <h3 className="ml-4">Withdraw Funds</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center basis-[40%] bg-[#efefef] ml-5 py-8 px-8 border border-gray-300 shadow-md rounded-lg">
          <img src={frown} alt="" />
          <p className="text-[#000000] text-center mt-4">
            You have not added any <br /> bank account yet
          </p>
          <button className="bg-[#0a2c33] text-[#fafafa] rounded-md px-5 py-4 mt-6">
            Add Bank Account
          </button>
        </div>
        {/* <div className=" basis-[40%] bg-[#efefef] ml-5  py-8 px-8  border border-gray-300 shadow-md rounded-lg">
          <h1 className="font-bold text-lg leading-8 tracking-tight">
            My Bank Account
          </h1>
          <div className="mt-4">
            <p className=" font-normal text-4xl leading-14">0255326387</p>
            <p>Adeosun Adeshewa(Access Bank)</p>
          </div>
          <button className="bg-[#0a2c33] text-[#fafafa] rounded-md px-5 py-4 mt-10">
            Change Account
          </button>
        </div> */}
      </div>
      <div className="w-full flex flex-col justify-center">
        <div className="w-[80%] mx-auto flex flex-col ">
          <table className="w-[82%] mt-12 mx-auto">
            <h1 className="mb-4 font-normal text-3xl leading-9 tracking-tighter text-[#0a2c33]">
              Transaction History
            </h1>
            <tr className="bg-[#ededed]">
              <th className="text-start py-2 pl-12">Date</th>
              <th className="text-start p-3 ">Transaction Details</th>
              <th className="text-center p-2">Amount Paid</th>
              <th className="text-center p-2">Status</th>
              <th className="text-center p-2">Note</th>
            </tr>
            <tr>
              <td className="p-2 pl-12">13th Oct 2020</td>
              <td className="p-3">1 Unit Hespas Estate, Lekki</td>
              <td className="text-center p-2">NGN 130,000</td>
              <td className="flex items-center mt-1 p-2 justify-center text-center">
                <div className="bg-[#ca2020] bg-opacity-20 w-[0.81rem] h-[0.81rem] rounded-full relative mr-1">
                  <div className="bg-[#ca2020] w-[0.43rem] h-[0.43rem] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                Declined
              </td>
              <td className="text-center">Invalid Details</td>
            </tr>
            <tr>
              <td className="p-2 pl-12">13th Oct 2020</td>
              <td className="p-3">1 Unit Hespas Estate, Lekki</td>
              <td className="text-center p-2">NGN 130,000</td>
              <td className="p-2 flex items-center justify-center text-center mt-1">
                <div className="bg-[#1d9067] bg-opacity-20 w-[0.81rem] h-[0.81rem] rounded-full relative mr-1">
                  <div className="bg-[#1d9067] w-[0.43rem] h-[0.43rem] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                Approved
              </td>
              <td className="text-center p-2">-</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
