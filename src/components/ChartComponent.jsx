// src/components/ChartComponent.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data }) => {
  const colors = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(199, 199, 199, 0.6)",
    "rgba(83, 102, 255, 0.6)",
    "rgba(255, 99, 132, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(153, 102, 255, 0.6)",
  ];

  const chartData = {
    labels: data.Categories.map((category) => category.name),
    datasets: [
      {
        label: "Total Expend",
        data: data.Categories.map((category) =>
          category.Subcategories.reduce((sum, sub) => sum + sub.value, 0)
        ),
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Expenditure per Category",
      },
    },
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
