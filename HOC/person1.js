import React from "react";
import UpdatedComponent from "./hoc";

const Person1 = ({ count, handleCount }) => {
  return (
    <div>
      <p>Person 1 Count : {count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default UpdatedComponent(Person1);
