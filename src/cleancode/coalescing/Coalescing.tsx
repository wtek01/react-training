import React from "react";

const Coalescing = () => {
  // Falsy values
  const value1 = 0 ?? 100; // = 0
  const value2 = false ?? true; // = false

  // Default values
  const value3 = null ?? 100; // = 100
  const value4 = undefined ?? 100; // = 100;
  return (
    <div>
      <h3>Falsy values</h3>
      <div>const value1 = 0 ?? 100; // = 0</div>
      <div>{value1}</div>
      <div> const value2 = false ?? true; // = false</div>
      <div>{value2}</div>
      <h3>Default values</h3>
      <div> const value3 = null ?? 100; // = 100</div>
      <div>{value3}</div>
      <div> const value4 = undefined ?? 100; // = 100;</div>
      <div>{value4}</div>
    </div>
  );
};

export default Coalescing;
