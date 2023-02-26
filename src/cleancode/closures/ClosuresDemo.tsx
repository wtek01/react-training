import React, { useEffect, useState } from "react";

const ClosuresDemo = () => {
  const [state, toggle] = useState(0);

  useEffect(() => {
    let timer = window.setInterval(() => {
      console.log(`Use effect state ${state}`);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  });

  return (
    <div>
      <h2>State : {`${state}`}</h2>
      <button
        onClick={() => {
          toggle(state + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default ClosuresDemo;
function setInterval(arg0: () => void, arg1: number) {
  throw new Error("Function not implemented.");
}
