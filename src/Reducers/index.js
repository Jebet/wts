import { combineReducers } from "redux";
import alert from "./alertReducer";
import authentication from "./authenticationReducer";
import users from "./usersReducer";

export const rootReducers = combineReducers({
  alert,
  authentication,
  users
});
export default rootReducers;
