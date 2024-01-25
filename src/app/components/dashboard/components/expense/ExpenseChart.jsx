"use client";
import React from "react";
import { Chart as ChartJS, registerables, defaults, scales } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { PolarArea } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const arcText = {
    id:'arcText',
    afterDatasetsDraw(chart, args, options){
        const {ctx} = chart
        const angle = Math.PI/180
        const x = chart.getDatasetMeta(0).data[0].x
        const y = chart.getDatasetMeta(0).data[0].y
        console.log(chart.getDatasetMeta(0).data[0])
        ctx.save()
        const startAngle = chart.getDatasetMeta(0).data[0].startAngle
        const endAngle = chart.getDatasetMeta(0).data[0].endAngle
        ctx.font = 'bold 12px sans-serif'
        ctx.fillStyle = 'white'
        ctx.fillText('Text', x, y)
    }
}
const ExpenseChart = () => {
  return (
    <div>
      <PolarArea
        className="h-[300px] p-5 bg-white rounded-3xl"
        options={{
          scales: {
            display:false,
            r: {
              display:false,
              startAngle: -45,
            },
          },
          plugins : {
            legend:{
              display: false
            },
            tooltip: {
              callbacks: {
                  label: function(context) {
                      let label = context.dataset.label || '';
                      return label;
                  }
              }
          }
          }
        }}
        data={{
          labels:['Entertainment', 'Bill Expences', 'Others', 'Investments'],
          datasets: [
            {
              data: [30, 35, 30, 27],
              backgroundColor: [
                "rgba(52, 60, 106, 1)",
                "rgba(252, 121, 0, 1)",
                "rgba(24, 20, 243, 1)",
                "rgba(250, 0, 255, 1)",
              ],
            borderWidth:10,
            borderColor:'white',
            hoverBorderColor: 'transparent',
            },
          ],
        }}
      />
    </div>
  );
};

export default ExpenseChart;
