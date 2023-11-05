const Profile = () => {
  return (
    <div className="flex justify-center ">
      <div className="mt-[10rem]">
        <div>
          <h1>My Profile</h1>
          <div className="flex mt-4">
            <div className="bg-conic-gradient from-[180deg] at-[50%] rounded-lg w-40 h-40 flex justify-center items-center">
              <h1>AM</h1>
            </div>
            <div className="ml-10">
              <div className=" bg-white shadow-lg rounded-xl w-[54.625rem] h-[48.125rem] px-8 py-8">
                <h1 className="mb-8 font-normal text-2xl leading-8 tracking-tighter text-[#0a2c33]">
                  Personal Details
                </h1>
                <div className="flex profile-name">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-[18.75rem] py-2 px-4 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" ml-4 border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 w-[18.75rem] py-2 px-4 rounded-md"
                  />
                </div>
                <div className="flex mt-4">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-[25.5rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 px-4 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className=" ml-4 w-[18.75rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 px-4 rounded-md"
                  />
                </div>
                <div className="flex mt-4">
                  <input
                    type="text"
                    placeholder="Date of Birth"
                    className="w-[15.5625rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 px-4 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Residential Address"
                    className=" ml-4 w-[28.6875rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 px-4 rounded-md"
                  />
                </div>
                <div className="flex mt-4">
                  <select className="w-[12.4375rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 pr-2 rounded-md">
                    <option value="" disabled selected>
                      State
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <select className=" ml-4 w-[14.125rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 pr-2 rounded-md">
                    <option value="" disabled selected>
                      Country
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <h1 className="mt-12 font-normal text-2xl leading-8 tracking-tighter text-[#0a2c33]">
                  Next of Kin
                </h1>
                <div className="flex mt-4 next-of-kin">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-[25.5rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 px-4 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className=" ml-4 w-[18.75rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 px-4 rounded-md"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="mt-4 w-[30.4375rem] border-solid bg-[#f7f7f7] focus:outline-none focus:border-[#0A2C33] border-2 py-2 px-4 rounded-md"
                />
                <div className="profile-password mt-12 ">
                  <h1 className="mt-12 font-normal text-2xl leading-8 tracking-tighter text-[#0a2c33]">
                    Security
                  </h1>
                  <button className="mt-4 rounded-lg shadow-lg border border-solid border-[#0A2C33] px-4 py-2">
                    Change Password
                  </button>
                </div>
              </div>
              <button className="bg-[#0a2c33] rounded-5 mt-12 text-white px-4 py-4 rounded-lg mb-24">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
