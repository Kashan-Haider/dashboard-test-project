"use client";
import React from "react";
import { Chart as ChartJS, registerables, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { PolarArea } from "react-chartjs-2";
import ExpenseChart from "./ExpenseChart";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Expense = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl text-headingColor font-semibold mb-3">
        Expense Statistics
      </h1>
      <div>
        <ExpenseChart />
      </div>
    </div>
  );
};

export default Expense;
