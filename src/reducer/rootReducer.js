import {combineReducers} from "redux";
import {weatherListReducer} from "./weatherListReducer";
import {paginationReducer} from "./paginationReducer";


export const rootReducer = combineReducers({
    list : weatherListReducer,
    pagination : paginationReducer
})