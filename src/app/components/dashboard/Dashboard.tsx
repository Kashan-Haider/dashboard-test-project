import React from "react";
import MyCards from "./components/card/MyCards";
import Transactions from "./components/transactions/Transactions";
import Activity from "./components/activity/Activity";
import Expense from "./components/expense/Expense";
import Transfer from "./components/transfer/Transfer";
import Balance from "./components/balance/Balance";

const Dashboard = () => {
  return (
    <div className="bg-primary px-3 lg:p-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 my-5">
        <div className="md:col-span-3">
          <MyCards />
        </div>
        <div className="md:col-span-2">
          <Transactions />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 my-5">
        <div className="md:col-span-3">
          <Activity />
        </div>
        <div className="md:col-span-2">
          <Expense/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-11 lg:grid-cols-5 gap-5 my-5" >
        <div className="md:col-span-5 lg:col-span-2" >
          <Transfer/>
        </div>
        <div className="md:col-span-6 lg:col-span-3" >
          <Balance/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
