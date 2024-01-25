import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="hidden md:block" >
      <div className="flex items-center justify-between p-5">
      <h1 className="font-semibold text-headingColor text-3xl" >Overview</h1>
      <div className="flex items-center gap-5">
        <div className="relative text-textColor placeholder:text-textColor">
          <input
            className="pl-8 outline-none border-[1px] bg-primary p-2 rounded-full"
            type="text"
            name=""
            id=""
            placeholder={`Search for something`}
          />
          <div className="absolute top-[50%] left-3 transform -translate-y-[50%]">
            <BiSearch />
          </div>
        </div>
        <div className="text-2xl cursor-pointer bg-primary p-2 rounded-full text-[#3b3a66]" >
            <CiSettings/>
        </div>
        <div className="text-2xl cursor-pointer bg-primary p-2 rounded-full text-[#e44a4a]" >
            <IoIosNotificationsOutline/>
        </div>
        <div>
            <Image className="h-[50px] w-[50px] rounded-full cursor-pointer" src={'/images/user.png'} alt="user-image" width={100} height={100} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
