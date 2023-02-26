import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Components = () => {
  const navigate = useNavigate();

  return (
    <div className="index">
      <h1>Components</h1>
      <div
        onClick={() => navigate("/multifilters")}
        aria-hidden="true"
        className="link"
      >
        Multifilters component
      </div>
      <div
        onClick={() => navigate("/widgets")}
        aria-hidden="true"
        className="link"
      >
        Widgets Layout
      </div>
    </div>
  );
};

export default Components;
