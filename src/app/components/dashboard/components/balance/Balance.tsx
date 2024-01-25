import React from "react";
import BalanceChart from "./BalanceChart";

const Balance = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl lg:text-2xl text-headingColor font-semibold mb-3">
        Balance History
      </h1>
      <div className="">
        <BalanceChart />
      </div>
    </div>
  );
};

export default Balance;
