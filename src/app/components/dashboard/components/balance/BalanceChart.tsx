"use client";
import React from "react";
import { Chart as ChartJS, registerables, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const BalanceChart = () => {
  return (
    <div>
      <Line
        className="h-[250px] bg-white p-5 rounded-3xl"
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
          datasets: [
            {
              label: "Deposit",
              data: [150, 200, 700, 300, 400, 200, 500],
              // backgroundColor:'rgba(24, 20, 243, 0.2)',
              backgroundColor: (context) => {
                if (!context.chart.chartArea) {
                  return;
                }
                const bgColors = [
                  "rgba(24, 20, 243, 0.3)",
                  "rgba(24, 20, 243, 0)",
                ];
                const {
                  ctx,
                  data,
                  chartArea: { top, bottom },
                } = context.chart;
                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, bgColors[0]);
                gradientBg.addColorStop(1, bgColors[1]);
                return gradientBg;
              },
              borderColor: "rgba(24, 20, 243, 1)",
              tension: 0.4,
              fill: true,
              pointRadius: 0,
            },
          ],
        }}
      />
    </div>
  );
};

export default BalanceChart;
