import { SELL_LAPTOP } from "../types/types";

const initialstate = {
    numberOfLaptops: 100  // initial state
}

const laptopReducer = (state=initialstate, action) => {
    switch (action.type) {
        case SELL_LAPTOP:
            return {
                ...state,
                numberOfLaptops: state.numberOfLaptops - action.payload
            }
    default:
        return state;
    }
}

export default laptopReducer;


