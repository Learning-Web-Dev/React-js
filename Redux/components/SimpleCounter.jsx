import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_TYPE } from "../utils/types";

const SimpleCounter = () => {
  //Get counter from counterReducer
  const counter = useSelector((state) => state.myCounter.counter);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  return (
    <section>
      <h3>Simple Counter</h3>
      <h5>{counter}</h5>
      <div>
        <button onClick={() => dispatch({ type: ACTION_TYPE.DOUBLE_COUNT })}>
          x2
        </button>
        <button
          onClick={() => dispatch({ type: ACTION_TYPE.INCREMENT_COUNT_TEN })}
        >
          +10
        </button>
        <button onClick={() => dispatch({ type: ACTION_TYPE.INCREMENT_COUNT })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: ACTION_TYPE.DECREMENT_COUNT })}>
          -1
        </button>
        <button
          onClick={() => dispatch({ type: ACTION_TYPE.DECREMENT_COUNT_TEN })}
        >
          -10
        </button>
        <button onClick={() => dispatch({ type: ACTION_TYPE.RESET_COUNT })}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default SimpleCounter;
