import { combineReducers } from "redux"
import FrutasReducer from "./FrutasReducer"
import ValidarFormReducer from "./ValidarFormReducer"

export default combineReducers({
    frutas: FrutasReducer,
    error: ValidarFormReducer
})