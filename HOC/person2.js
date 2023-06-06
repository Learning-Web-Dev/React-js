import React from "react";
import UpdatedComponent from "./hoc";

const Person2 = ({ count, handleCount }) => {
  return (
    <div>
      <p>Person 2 Count : {count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default UpdatedComponent(Person2, 2);
