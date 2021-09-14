import {INCREASE_COUNTER, DECREASE_COUNTER, RESET} from "./actionTypes"

const reducer = (state, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            state.counter += action.payload;
            return {...state}
        case DECREASE_COUNTER:
            state.counter -= action.payload;
            return {...state}    
        case RESET:
            state.counter = action.payload;
            return {...state}    
        default:
            return state;
    }
}

export default reducer
