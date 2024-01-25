'use client'
import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import sideBarStore from "@/store/zustand";
const MobileNavbar = () => {
  const handleIsOpen = sideBarStore((state: any) => state.handleIsOpen);
  return (
    <div className="block md:hidden">
      <div className="flex items-center justify-between p-5">
        <div onClick={()=> handleIsOpen()} >
          <FaBars />
        </div>
        <h1 className="font-semibold text-headingColor text-2xl">Overview</h1>
        <div className="flex items-center gap-5">
          <div>
            <Image
              className="h-[35px] w-[35px] rounded-full cursor-pointer"
              src={"/images/user.png"}
              alt="user-image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="relative text-textColor placeholder:text-textColor w-full p-5">
        <input
          className="pl-[10%] outline-none border-[1px] bg-primary p-2 rounded-full w-full"
          type="text"
          name=""
          id=""
          placeholder={`Search for something`}
        />
        <div className="absolute top-[50%] left-[8%] transform -translate-y-[50%]">
          <BiSearch />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

{
  /* 
<div className="text-2xl cursor-pointer bg-primary p-2 rounded-full text-[#3b3a66]" >
  <CiSettings/>
</div>
<div className="text-2xl cursor-pointer bg-primary p-2 rounded-full text-[#e44a4a]" >
  <IoIosNotificationsOutline/>
</div> */
}
