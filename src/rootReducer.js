import { combineReducers } from "redux";
import usersReducer from "./store/reducers/users"

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;