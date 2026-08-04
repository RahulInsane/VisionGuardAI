import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ConfidenceMeter({ confidence }) {
  return (
    <div className="confidence-meter">

      <CircularProgressbar
        value={confidence}
        text={`${confidence.toFixed(1)}%`}
      />

      <h3>Confidence</h3>

    </div>
  );
}

export default ConfidenceMeter;