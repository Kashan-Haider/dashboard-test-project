import React from "react";
import User from "./User";
import { FaAngleRight, FaRegPaperPlane } from "react-icons/fa";

const Transfer = () => {
  const data = [
    { image: "/images/user1.png", name: "Livia Bator", designation: "CEO" },
    {
      image: "/images/user2.png",
      name: "Randy Press",
      designation: "Director",
    },
    { image: "/images/user3.png", name: "Workman", designation: "Designer" },
  ];
  return (
    <div className="">
      <h1 className="text-xl lg:text-2xl text-headingColor font-semibold mb-3">
        Quick Transfer
      </h1>
      <div className="h-[250px] bg-white rounded-3xl p-5 md:p-2 lg:p-5 flex flex-col gap-5 justify-center">
        <div className="flex justify-between gap-5 md:gap-1 lg:gap-5 items-center">
          <div className="flex gap-3 justify-between items-center w-full">
            {data.map(
              (
                user: { image: string; name: string; designation: string },
                index: number
              ) => {
                return (
                  <User
                    key={index}
                    image={user.image}
                    name={user.name}
                    designation={user.designation}
                  />
                );
              }
            )}
          </div>
          <div className="bg-white shadow-lg shadow-gray-500 p-2 rounded-full h-fit text-blue-600 cursor-pointer">
            <FaAngleRight />
          </div>
        </div>
        <div className="flex md:flex-col lg:flex-row gap-2 lg:gap-3 items-center overflow-hidden">
          <h1 className="text-textColor font-semibold whitespace-nowrap text-sm lg:text-base">
            Write Amount
          </h1>
          <div className="relative">
            <input
              className="bg-[#EDF1F7] text-textColor focus:text-gray-800 transition-all duration-300 px-3 py-2 lg:p-3 rounded-full outline-none w-[190px] lg:w-[230px]"
              type="text"
              placeholder=""
              defaultValue={525.5}
            />
            <button className="absolute text-white bg-[#1814F3] hover:bg-[rgb(42,64,187)] transition-all duration-300 px-4 lg:px-6 rounded-full right-0 h-full top-0 flex gap-3 items-center">
              Send <FaRegPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
