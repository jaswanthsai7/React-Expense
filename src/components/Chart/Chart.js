import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

export default function Chart(props) {
  const values=props.chartPoints.map(dataPoint=>dataPoint.value);

  const maxi=Math.max(...values)

  return (
    <div className="chart">
      {props.chartPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maxi}
          label={point.label}
        />
      ))}
    </div>
  );
}
