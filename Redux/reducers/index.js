import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  myCounter: counterReducer,
});

export default rootReducer;
