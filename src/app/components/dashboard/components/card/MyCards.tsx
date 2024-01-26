import React from "react";
import CardItem from "./CardItem";

const MyCards = () => {
  return (
    <div className="">
      <div className="text-headingColor flex items-center justify-between mb-3">
        <h1 className="text-xl lg:text-2xl font-semibold">My Cards</h1>
        <button className="font-semibold">See All</button>
      </div>
      <div className="flex md:grid grid-cols-2 gap-5 overflow-x-scroll md:overflow-x-hidden">
        <CardItem theme="dark" />
        <CardItem theme="light" />
      </div>
    </div>
  );
};

export default MyCards;
