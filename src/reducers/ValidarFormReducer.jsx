import {types} from '../types/type'

const initialState = {
    error: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.validar: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}