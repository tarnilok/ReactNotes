import{ SELL_LAPTOP, SELL_PHONE, SELL_WATCH, SELL_COMP} from "../types/types";

export const sellLaptop = (number=1) => {
    return {
        type:SELL_LAPTOP,
        payload: number,
    };
};
export const sellWatch = (number=5) => {
    return {
        type:SELL_WATCH,
        payload : number
    };
};
export const sellPhone = (number=1) => {
    return {
        type:SELL_PHONE,
        payload: number,
    };
};
export const sellComp = (number=1) => {
    return {
        type:SELL_COMP,
        payload: number,
    };
};