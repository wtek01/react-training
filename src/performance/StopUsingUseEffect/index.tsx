import React from "react";
import WithUseEffect from "./WithUseEffect";
import WithoutUseEffect from "./WithoutUseEffect";

const StopUsingUseEffect = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <WithUseEffect numbers={numbers} />
      <WithoutUseEffect numbers={numbers} />
    </>
  );
};

export default StopUsingUseEffect;
