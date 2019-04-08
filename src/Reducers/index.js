import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authenticationReducer from "./authenticationReducer";
import usersReducer from "./usersReducer";

export const rootReducers = combineReducers({
  alertReducer,
  authenticationReducer,
  usersReducer
});
export default rootReducers;
