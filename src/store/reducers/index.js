import { combineReducers } from "redux";
import ordReducer from "./ord";

const rootReducer = combineReducers({
    ord: ordReducer,
});

export default rootReducer;
