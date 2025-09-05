import { LineChart } from "@carbon/charts-react";
import { ScaleTypes } from "@carbon/charts"; // ✅ still here
import "@carbon/charts/styles.css";

const data = [
  { group: "Visitors", key: "10 AM", value: 900 },
  { group: "Visitors", key: "12 PM", value: 300 },
  { group: "Visitors", key: "2 PM", value: 600 },
  { group: "Visitors", key: "4 PM", value: 850 },
  { group: "Visitors", key: "6 PM", value: 400 },
  { group: "Visitors", key: "8 PM", value: 700 },
  { group: "Visitors", key: "10 PM", value: 100 },
];

const options = {
  title: "Visitors Peak Time",
  axes: {
    left: { mapsTo: "value", scaleType: ScaleTypes.LINEAR },
    bottom: { mapsTo: "key", scaleType: ScaleTypes.LABELS },
  },
};

export default function VisitorsPeakTime() {
  return <LineChart data={data} options={options} />;
}
