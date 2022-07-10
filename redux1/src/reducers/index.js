import HobbyReducer from "./hobby";
import todo from "./todo";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  hobby: HobbyReducer,
  todo,
});
export default RootReducer;
