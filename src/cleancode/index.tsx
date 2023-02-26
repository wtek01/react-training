import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const CleanCode = () => {
  const navigate = useNavigate();

  return (
    <div className="index">
      <h1>Clean code index</h1>
      <div
        onClick={() => navigate("/closures")}
        aria-hidden="true"
        className="link"
      >
        Closures
      </div>
      <div
        onClick={() => navigate("/coalescing")}
        aria-hidden="true"
        className="link"
      >
        Coalescing
      </div>
      <div
        onClick={() => navigate("/composition")}
        aria-hidden="true"
        className="link"
      >
        Composition
      </div>
      <div
        onClick={() => navigate("/curry")}
        aria-hidden="true"
        className="link"
      >
        Using curry in List
      </div>
    </div>
  );
};

export default CleanCode;
