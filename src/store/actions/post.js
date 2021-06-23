import { SET_CURRENT_POST } from "./types";


export const setPostChannel = post => {
    return {
        type: SET_CURRENT_POST,
        payload: post,
    };
};