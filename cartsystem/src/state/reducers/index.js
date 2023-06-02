import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  amount: amountReducer,
  //   If Their Are More Reducers Add Other Reducer After The Comma
});

export default reducers;
