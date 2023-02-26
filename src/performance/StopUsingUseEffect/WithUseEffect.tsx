import React, { useEffect, useRef, useState } from "react";

const WithUseEffect = ({ numbers }: { numbers: number[] }) => {
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    if (numbers.length) {
      const currentSum = numbers.reduce(
        (accumulator, currentNum) => accumulator + currentNum
      );
      setSum(currentSum);
    }
  }, [numbers]);

  console.log("With UseEffect");
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  return (
    <>
      <h2>===With useEffect===</h2>
      <div>Sum: {sum}</div>
      <div style={{ color: "red", paddingTop: "10px" }}>
        Component instance renders: {renderCounter.current}
      </div>
    </>
  );
};

export default WithUseEffect;
