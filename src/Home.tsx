import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="index">
      <h1>React Training</h1>
      <div
        onClick={() => navigate("/cleancode")}
        aria-hidden="true"
        className="link"
        //className={splitLocation[1] === "closures" ? "active" : ""}
      >
        Clean code
      </div>
      <div
        onClick={() => navigate("/performance")}
        aria-hidden="true"
        className="link"
      >
        Performance
      </div>
      <div
        onClick={() => navigate("/components")}
        aria-hidden="true"
        className="link"
      >
        Components
      </div>
      <div
        onClick={() => navigate("/typescript")}
        aria-hidden="true"
        className="link"
      >
        TypeScript
      </div>
    </div>
  );
}

export default Home;
