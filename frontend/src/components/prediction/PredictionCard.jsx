import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  CheckCircle,
  XCircle,
  Brain,
  Cpu,
  Clock3,
} from "lucide-react";

function PredictionCard({
  prediction,
  confidence,
  inferenceTime,
  real,
  fake,
}) {
  const isReal = prediction === "REAL";

  return (
    <motion.div
      className="prediction-card"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`prediction-badge ${isReal ? "real" : "fake"}`}>
        {isReal ? <CheckCircle size={34} /> : <XCircle size={34} />}
        <span>{prediction} IMAGE</span>
      </div>

      <div className="meter-wrapper">
        <CircularProgressbar
          value={confidence}
          text={`${confidence.toFixed(1)}%`}
        />
      </div>

      <div className="prediction-info">
        <div>
          <Brain size={18} />
          <span>Confidence</span>
          <strong>{confidence.toFixed(2)}%</strong>
        </div>

        <div>
          <Clock3 size={18} />
          <span>Inference</span>
          <strong>{inferenceTime}</strong>
        </div>

        <div>
          <Cpu size={18} />
          <span>Model</span>
          <strong>ResNet18</strong>
        </div>

        <div>
          <Cpu size={18} />
          <span>Device</span>
          <strong>CPU</strong>
        </div>
      </div>

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
    </motion.div>
  );
}

export default PredictionCard;