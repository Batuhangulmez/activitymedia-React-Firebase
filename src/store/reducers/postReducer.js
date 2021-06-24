import * as types from "../actions/types";




export default (state, action) => {
    switch (action.type) {
        case types.SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload,
            }

        default:
            return {
                ...state
            }
    }
}