import { SELL_COMP } from "../types/types";

const initialstate = {
    numberOfComps : 50
}

const compReducer = (state=initialstate, action) => {
    switch (action.type) {
        case SELL_COMP:
            return {
                ...state,
                numberOfComps : state.numberOfComps - action.payload
            }
        default:
            return state
    }
}

export default compReducer;