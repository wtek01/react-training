import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Performance = () => {
  const navigate = useNavigate();

  return (
    <div className="index">
      <h1>Performance</h1>
      <div
        onClick={() => navigate("/useeffect")}
        aria-hidden="true"
        className="link"
      >
        Stop using useEffect
      </div>
    </div>
  );
};

export default Performance;
