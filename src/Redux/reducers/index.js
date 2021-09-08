import { combineReducers } from "redux";
import reducerCounter from "./reducerCounter"
import reducerShow from "./reducerShow"


const rootReducer = combineReducers({reducerCounter, reducerShow})

export default rootReducer