import React, { useState, useLayoutEffect } from "react";
import "./styles.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
const data = [
  { date: "Jan 2022", visitor: 1000 },
  { date: "Feb 2022", visitor: 500 },
  { date: "Mar 2022", visitor: 3000 },
  { date: "Apr 2022", visitor: 2000 },
  { date: "May 2022", visitor: 5000 },
  { date: "Jun 2022", visitor: 6000 }
];

const SimpleLineChart = () => {
  const [height, setHeight] = useState(400);
  useLayoutEffect(() => {
    function updateHeight() {
      const chart = document.getElementById("chart-container");
      if (chart) {
        const { height } = chart.getBoundingClientRect();
        setHeight(height);
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} className={"AnalyticsOverviewChart"}>
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey="date" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Legend />
        <Tooltip className="AnalyticsOverview_tooltip" />
        <Line type="linear" dataKey="visitor" stroke="#8be57f" dot={true} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
