import "./ProbabilityBars.css";

function ProbabilityBars({ real, fake }) {
  return (
    <div className="probability-container">

      <h3>Class Probabilities</h3>

      <div className="probability-item">

        <div className="label">
          <span>REAL</span>
          <span>{real}%</span>
        </div>

        <div className="bar">
          <div
            className="fill real"
            style={{ width: `${real}%` }}
          ></div>
        </div>

      </div>

      <div className="probability-item">

        <div className="label">
          <span>FAKE</span>
          <span>{fake}%</span>
        </div>

        <div className="bar">

          <div
            className="fill fake"
            style={{ width: `${fake}%` }}
          ></div>

        </div>

      </div>

    </div>
  );
}

export default ProbabilityBars;