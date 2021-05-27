import { types } from "../types/type";

const initialState = {
    frutas: []
}

export default function(state = initialState , action){
    switch (action.type) {
        case types.agregar:
            return{
                ...state,
                frutas: [...state.frutas,action.payload]
            }
    
        default:
            return state
    }
}