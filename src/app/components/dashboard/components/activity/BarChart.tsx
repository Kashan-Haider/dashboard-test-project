"use client";
import React from "react";
import { Chart as ChartJS, registerables, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const BarChart = () => {
  return (
    <div>
      <Bar
        className="h-[300px] bg-white p-5 rounded-3xl"
        options={{
          scales: {
            x: {
              grid:{
                display: false
              }
            },
          },
          plugins:{
            legend:{
                align:'end'
            }
          }
        }}
        data={{
          labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
          datasets: [
            {
              label: "Deposit",
              data: [490, 350, 350, 490, 410, 390, 400],
              backgroundColor: "rgba(24, 20, 243, 1)",
              borderRadius: 100,
              barThickness: 20,
              borderWidth: 5,
              borderColor: "transparent",
            },
            {
              label: "Withdraw",
              data: [250, 110, 270, 370, 100, 250, 370],
              backgroundColor: "rgba(22, 219, 204, 1)",
              borderRadius: 100,
              barThickness: 20,
              borderWidth: 5,
              borderColor: "transparent",
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
