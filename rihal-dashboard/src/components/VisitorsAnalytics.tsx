import { ComboChart } from "@carbon/charts-react";
import { ScaleTypes } from "@carbon/charts";
import "@carbon/charts/styles.css";
import "./VisitorsAnalytics.css";

const data = [
  // Bar data
  { group: "Location 1", key: "Monday", value: 65000 },
  { group: "Location 1", key: "Tuesday", value: 29123 },
  { group: "Location 1", key: "Wednesday", value: 35213 },

  { group: "Location 2", key: "Monday", value: -34213 },
  { group: "Location 2", key: "Tuesday", value: -51213 },
  { group: "Location 2", key: "Wednesday", value: -16932 },

  { group: "Location 3", key: "Monday", value: 12324 },
  { group: "Location 3", key: "Tuesday", value: 21432 },
  { group: "Location 3", key: "Wednesday", value: 34213 },

  // Line data
  { group: "Temperature", key: "Monday", value: 20 },
  { group: "Temperature", key: "Tuesday", value: 24 },
  { group: "Temperature", key: "Wednesday", value: 32 },
];

const options = {
  title: "Combo Horizontal (Line + Grouped bar)",
  axes: {
    left: {
      mapsTo: "key",
      scaleType: ScaleTypes.LABELS,
      grid: {
        enabled: false, // hides left axis gridlines
      },
    },
    bottom: {
      mapsTo: "value",
      scaleType: ScaleTypes.LINEAR,
      grid: {
        enabled: false, // hides bottom axis gridlines
      },
    },
  },
  grid: {
    x: { enabled: false }, // extra guard for vertical gridlines
    y: { enabled: false }, // extra guard for horizontal gridlines
  },
  comboChartTypes: [
    {
      type: "grouped-bar",
      options: {},
      correspondingDatasets: ["Location 1", "Location 2", "Location 3"],
    },
    {
      type: "line",
      options: { points: { enabled: true } },
      correspondingDatasets: ["Temperature"],
    },
  ],
  orientation: "horizontal" as const,
  height: "496px",
  legend: { position: "bottom" },
};

export default function VisitorsAnalytics() {
  return (
    <div className="dashboard-tile">
      <ComboChart data={data} options={options} />
    </div>
  );
}
