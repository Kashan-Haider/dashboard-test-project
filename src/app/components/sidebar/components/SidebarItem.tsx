import React from "react";
import { IconType } from "react-icons";

const SidebarItem = (props: {
  icon: IconType;
  title: string;
  selected: string;
}) => {
  return (
    <div className="group flex items-center gap-5 h-[40px] cursor-pointer w-fit">
      <div
        className={`w-[6px] h-full rounded-r-full group-hover:bg-[#4C49ED] transition-all duration-300 ${
          props.selected == props.title && ""
        }bg-[#4C49ED]`}
      ></div>
      <div
        className={`flex items-center text-xs md:text-sm lg:text-base gap-2 group-hover:text-[#4C49ED] transition-all duration-300 ${
          props.selected == props.title ? "text-[#4C49ED]" : "text-textColor"
        }`}
      >
        <props.icon />
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default SidebarItem;
