import "./App.css";
import VisitorsCount from "./components/VisitorsCount";
import VisitorsFaceExpression from "./components/VisitorsFaceExpression";
import CarriedItems from "./components/CarriedItems";
import AnimeSketch from "./components/AnimeSketch";
import VisitorsAnalytics from "./components/VisitorsAnalytics";
import "./Dashboard.css";
function App() {
  return (
    <>
      <div className="dashboard">
        <div className="visitors-count">
          <VisitorsCount />
        </div>

        <div className="dashboard-two-col">
          <div className="face-expression">
            <VisitorsFaceExpression />
          </div>
          <div className="analytics">
            <CarriedItems />
          </div>
          <div className="carried-items">
            <VisitorsAnalytics />
          </div>
          {/* keep only if you need the thin inner bar */}
          <div className="emotion-excretions"></div>
        </div>

        <div className="anime-sketch">
          <AnimeSketch />
        </div>

        {/* spanning emotion bar INSIDE dashboard */}
        <div className="emotion-excretions--outer">
          <span className="band happy" />
          <span className="band sad" />
          <span className="band angry" />
          <span className="band surprised" />
          <span className="band calm" />
          <span className="band fear" />
          <span className="band love" />
        </div>
      </div>

      {/* camera box OUTSIDE dashboard */}
      <div className="camera-box" />
    </>
  );
}

export default App;
