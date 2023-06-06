import { useState } from "react";

/* 

Higher Order Component
----------------------
Higher order component is a function which takes a component as an argument 
and returns a new updated component

*/

const UpdatedComponent = (Component, value = 1) => {
  const NewComponent = () => {
    //state values
    const [count, setCount] = useState(10);

    //functions
    const handleCount = () => {
      setCount(count + value);
    };

    return <Component count={count} handleCount={handleCount} />;
  };

  return NewComponent;
};

export default UpdatedComponent;
