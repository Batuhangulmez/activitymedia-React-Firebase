import * as types from "../actions/types";


const initialState = {
    currentPost: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_POST:
            return {
                ...state,
                currnetPost: action.payload,
            }

        default:
            return {
                ...state
            }
    }
}