import { StackedBarChart } from "@carbon/charts-react";
import { ScaleTypes } from "@carbon/charts";
import "@carbon/charts/styles.css";
import "./CarriedItems.css";

const stackedData = [
  { group: "10-19", value: 100 },
  { group: "20-29", value: 70 },
  { group: "30-39", value: 70 },
  { group: "40-49", value: 85 },
  { group: "50-59", value: 75 },
  { group: "60+", value: 30 },
];

const stackedOptions = {
  title: "Age Distribution",
  axes: {
    left: {
      mapsTo: "value",
      grid: {
        enabled: false, // ❌ hide horizontal gridlines
      },
    },
    bottom: {
      mapsTo: "group",
      scaleType: ScaleTypes.LABELS,
      grid: {
        enabled: false, // ❌ hide vertical gridlines
      },
    },
  },
  grid: {
    x: { enabled: false }, // ✅ disable vertical gridlines globally
    y: { enabled: false }, // ✅ disable horizontal gridlines globally
  },
  bars: {
    maxWidth: 40, // 👈 increase bar thickness (default ~16–20)
  },
  points: {
    radius: 4, // ✅ slightly bigger points (optional)
  },
  height: "200px",
};

export default function CarriedItems() {
  return (
    <div className="carried-items-box">
      <StackedBarChart data={stackedData} options={stackedOptions} />
    </div>
  );
}
