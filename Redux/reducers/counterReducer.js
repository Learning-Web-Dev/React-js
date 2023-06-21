import { ACTION_TYPE } from "../utils/types";

const initState = {
  counter: 5,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT_COUNT:
      return { ...state, counter: state.counter + 1 };
    case ACTION_TYPE.INCREMENT_COUNT_TEN:
      return { ...state, counter: state.counter + 10 };
    case ACTION_TYPE.DOUBLE_COUNT:
      return { ...state, counter: state.counter * 2 };
    case ACTION_TYPE.DECREMENT_COUNT_TEN:
      return { ...state, counter: state.counter - 10 };
    case ACTION_TYPE.DECREMENT_COUNT:
      return { ...state, counter: state.counter - 1 };
    case ACTION_TYPE.RESET_COUNT:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default counterReducer;
