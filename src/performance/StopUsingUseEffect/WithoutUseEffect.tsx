import React, { useEffect, useRef, useState } from "react";

const WithoutUseEffect = ({ numbers }: { numbers: number[] }) => {
  const sum = numbers.length
    ? numbers.reduce((accumulator, currentNum) => accumulator + currentNum)
    : 0;

  console.log("Without UseEffect");
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  return (
    <>
      <h2>===Without useEffect===</h2>
      <div>Sum: {sum}</div>
      <div style={{ color: "red", paddingTop: "10px" }}>
        Component instance renders: {renderCounter.current}
      </div>
    </>
  );
};

export default WithoutUseEffect;
