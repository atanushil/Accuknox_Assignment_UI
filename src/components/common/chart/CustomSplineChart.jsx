import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label, type }) => {
  if (active && payload && payload.length) {
    const { color } = payload[0];
    const Type = type.toUpperCase();
    return (
      <div
        className="custom-tooltip"
        style={{
          padding: "10px",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
        }}
      >
        <p className="label" style={{ margin: 0 }}>
          {label} : <span style={{ color }}>{payload[0].value}</span>
          <span> ({ Type}) </span>
        </p>
      </div>
    );
  }

  return null;
};

// Main Chart Component
const CustomSplineChart = ({ data = [], heading, type }) => {
  return (
    <div
      className="widget flex flex-col justify-evenly gap-1"
      style={{ width: "100%" }}
    >
      <div className="py-2 flex-center md:justify-start px-1">
        <p className="md:justify-start flex w-fit items-center justify-center">
          {heading}
        </p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={180}
        style={{ display: "flex" }}
      >
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" dataKey="num" />
          <Tooltip content={<CustomTooltip type={type} />} />
          <Line
            type="monotone"
            dataKey="num"
            stroke="#8884d8"
            fill="#8884d8"
            dot={({ cx, cy, payload }) => (
              <circle
                cx={cx}
                cy={cy}
                r={3}
                fill={payload.color}
                stroke="none"
              />
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomSplineChart;
