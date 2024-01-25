import Image from "next/image";
import React from "react";

const TransactionItem = (props: {
  icon: string;
  iconBg: string;
  title: string;
  date: string;
  price: number;
}) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex gap-2 lg:gap-5 items-center">
        <div className={`bg-[#${props.iconBg}] p-1 lg:p-3 rounded-full`}>
          <Image
            className="w-[15px] lg:w-[20px]"
            src={props.icon}
            alt="icon"
            height={100}
            width={100}
          />
        </div>
        <div className="">
          <h1 className="text-sm md:text-xs lg:text-sm">{props.title}</h1>
          <p className="text-[#718EBF] text-sm md:text-xs lg:text-sm">
            {props.date}
          </p>
        </div>
      </div>
      <div>
        <h1
          className={`${
            props.price < 0 ? "text-red-700" : "text-green-500"
          } text-base md:text-sm lg:text-base`}
        >
          {props.price < 0 ? `-$${props.price * -1}` : `$${props.price}`}
        </h1>
      </div>
    </div>
  );
};

export default TransactionItem;
