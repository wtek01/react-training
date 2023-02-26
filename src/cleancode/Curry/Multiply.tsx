import React from "react";

const Multiply = (x: number) => (y: number) => {
  const result = x * y;
  return <div>Multiply result : {result}</div>;
};

export default Multiply;
