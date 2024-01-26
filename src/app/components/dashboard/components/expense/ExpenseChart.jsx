"use client";
import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
import { Pie } from "react-chartjs-2";
// import 'chartjs-plugin-datalabels';
const ExpenseChart = () => {
  return (
    <div className="h-[300px] bg-white rounded-3xl p-5">
      <Pie
        className="h-[50px]"
        data={{
          labels: ["Entertainment", "Bill Expenses", "Others", "Investments"],
          datasets: [
            {
              data: [30, 15, 20, 35],
              backgroundColor: [
                "rgba(52, 60, 106, 1)",
                "rgba(252, 121, 0, 1)",
                "rgba(24, 20, 243, 1)",
                "rgba(250, 0, 255, 1)",
              ],
              offset: 20,
              hoverOffset: 50,
              rotation: -45,
            },
          ],
        }}
        options={{
          radius: 90,
          plugins: {
            legend: {
              display: false,
            },
            // datalabels: {
            //   display:true,
            //   formatter: (value) => {
            //     console.log(value)
            //     return 'hello'
            //   }
            // },
          },
        }}
      />
    </div>
  );
};

export default ExpenseChart;
