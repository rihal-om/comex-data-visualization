import { LineChart } from "@carbon/charts-react";
import { ScaleTypes } from "@carbon/charts";
import "@carbon/charts/styles.css";
import "./VisitorsFaceExpression.css";

const lineData = [
  { group: "Visitors", key: "10 AM", value: 900 },
  { group: "Visitors", key: "12 PM", value: 300 },
  { group: "Visitors", key: "2 PM", value: 600 },
  { group: "Visitors", key: "4 PM", value: 850 },
  { group: "Visitors", key: "6 PM", value: 400 },
  { group: "Visitors", key: "8 PM", value: 700 },
  { group: "Visitors", key: "10 PM", value: 100 },
];

const lineOptions = {
  title: "Visitors Peak Time",
  axes: {
    left: {
      mapsTo: "value",
      scaleType: ScaleTypes.LINEAR,
      grid: {
        enabled: false, // ❌ hide horizontal gridlines
      },
    },
    bottom: {
      mapsTo: "key",
      scaleType: ScaleTypes.LABELS,
      grid: {
        enabled: false, // ❌ hide vertical gridlines
      },
    },
  },
  grid: {
    x: { enabled: false }, // ✅ no vertical gridlines
    y: { enabled: false }, // ✅ no horizontal gridlines
  },

  height: "200px",
};

export default function VisitorsFaceExpression() {
  return (
    <div className="visitors-box">
      <LineChart data={lineData} options={lineOptions} />
    </div>
  );
}
