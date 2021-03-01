import { combineReducers } from "redux";
import usersReducer from "./store/reducers/users"
import uiReducers from "./store/reducers/ui"

const rootReducer = combineReducers({
  users: usersReducer,
  ui: uiReducers,
});

export default rootReducer;