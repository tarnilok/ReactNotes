import {INCREASE_COUNTER, DECREASE_COUNTER, RESET} from "./actionTypes";

export const increase = (payload) => {
    return {
        type : INCREASE_COUNTER,
        // payload : payload,
        payload,
    }
}

export const decrease = (payload) => {
    return {
        type : DECREASE_COUNTER,
        payload,
    }
}

export const reset = (payload) => {
    return {
        type : RESET,
        payload,
    }
}