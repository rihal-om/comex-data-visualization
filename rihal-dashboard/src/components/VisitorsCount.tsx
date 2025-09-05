import { Tile } from "carbon-components-react";
import "./VisitorsCount.css";

export default function VisitorsCount() {
  return (
    <Tile className="visitors-tile">
      <div className="visitors-section">
        <h4 className="label">Visitors Count</h4>
        <p className="value">230</p>
      </div>

      <div className="visitors-section gender">
        <p>
          <strong>70%</strong> <span>30%</span>
        </p>
      </div>

      <div className="visitors-section">
        <h4 className="label">Average Visitor Duration</h4>
        <p className="value highlight">2 Min</p>
      </div>

      <div className="visitors-logo">
        <img src="/rihal.svg" alt="Rihal" />
      </div>
    </Tile>
  );
}
