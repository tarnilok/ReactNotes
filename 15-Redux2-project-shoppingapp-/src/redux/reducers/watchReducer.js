import { SELL_WATCH } from "../types/types";

const initialstate = {
    numberOfWatches : 500,
}

const watchReducer = (state=initialstate, action) => {
    switch (action.type) {
        case SELL_WATCH:
            return {
                ...state,
                numberOfWatches : state.numberOfWatches - action.payload
            }
        default:
            return state
    }

}

export default watchReducer;