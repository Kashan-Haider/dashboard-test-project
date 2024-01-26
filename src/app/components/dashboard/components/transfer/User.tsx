import Image from "next/image";
import React from "react";

const User = (props: { image: string; name: string; designation: string }) => {
  return (
    <div className="flex flex-col items-center text-sm md:text-xs lg:text-base gap-2">
      <Image
        className="rounded-full w-auto h-[30px] lg:h-[50px]"
        src={props.image}
        alt="image"
        height={100}
        width={100}
      />
      <div className="text-center">
        <h1 className="whitespace-nowrap">{props.name}</h1>
        <h1 className="md:text-xs text-blue-600 font-semibold">
          {props.designation}
        </h1>
      </div>
    </div>
  );
};

export default User;
