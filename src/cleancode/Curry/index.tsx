import React from "react";
import List from "./List";

const index = () => {
  return (
    <div>
      <h2>===== Using curry in List =====</h2>
      <List items={["Fred", "Bob", "Jayne"]} />
    </div>
  );
};

export default index;
