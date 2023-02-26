import React from "react";

const CompositionDemo = () => {
  // Compose function
  const compose =
    (...fns: { (amount: any): any; (amount: any): number }[]) =>
    (x: any) =>
      fns.reduce((y, f) => f(y), x);

  // Functions
  const addFee = (amount: any) => amount + 2;
  const addDiscount = (amount: any) => amount - 5;

  // function composition
  const composition = compose(addFee, addDiscount)(100);
  return <div>Composition</div>;
};

export default CompositionDemo;
