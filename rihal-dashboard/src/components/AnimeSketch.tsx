import { Tile } from "carbon-components-react";
import { LineChart } from "@carbon/charts-react";
import { ScaleTypes } from "@carbon/charts";
import "@carbon/charts/styles.css";
import "./AnimeSketch.css";

const chartData = [
  { group: "Dataset 1", key: "Qty", value: 35_000 },
  { group: "Dataset 1", key: "More", value: 22_000 },
  { group: "Dataset 1", key: "Sold", value: 55_000 },
  { group: "Dataset 1", key: "Restocking", value: 42_000 },
  { group: "Dataset 1", key: "Misc", value: 12_000 },

  { group: "Dataset 2", key: "Qty", value: 34_000 },
  { group: "Dataset 2", key: "More", value: 56_000 },
  { group: "Dataset 2", key: "Sold", value: 42_000 },
  { group: "Dataset 2", key: "Restocking", value: 24_000 },
  { group: "Dataset 2", key: "Misc", value: 1_000 },

  { group: "Dataset 3", key: "Qty", value: 41_000 },
  { group: "Dataset 3", key: "More", value: 18_000 },
  { group: "Dataset 3", key: "Sold", value: 35_000 },
  { group: "Dataset 3", key: "Restocking", value: 0 },
  { group: "Dataset 3", key: "Misc", value: 42_000 },

  { group: "Dataset 4", key: "Qty", value: 22_500 },
  { group: "Dataset 4", key: "More", value: 0 },
  { group: "Dataset 4", key: "Sold", value: 8_500 },
  { group: "Dataset 4", key: "Restocking", value: 22_000 },
  { group: "Dataset 4", key: "Misc", value: 3_500 },
];

const chartOptions = {
  title: "Line (discrete)",
  axes: {
    left: {
      mapsTo: "value",
      scaleType: ScaleTypes.LINEAR,
      grid: { enabled: false },
    },
    bottom: {
      mapsTo: "key",
      scaleType: ScaleTypes.LABELS,
      grid: { enabled: false },
    },
  },
  grid: { x: { enabled: false }, y: { enabled: false } },
  line: { strokeWidth: 2.5 },
  points: { radius: 3.5 },
  height: "200px",
  legend: { position: "bottom" },
} as const;

export default function AnimeSketch() {
  return (
    <Tile className="anime-tile">
      <div className="anime-left">
        <p>
          <span className="stat">230</span> Green Zone
        </p>
        <p>
          <span className="stat">28</span> Yellow Zone
        </p>
        <p>
          <span className="stat">28</span> Red Zone
        </p>
      </div>

      <div className="anime-right">
        <div className="mini-chart">
          <LineChart data={chartData} options={chartOptions} />
        </div>
      </div>
    </Tile>
  );
}
