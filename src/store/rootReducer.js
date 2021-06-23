import { combineReducers } from "redux";
import { reducer as firebase } from "react-redux-firebase";
import channelReducer from "./reducers/channelReducer";
import postReducer from "./reducers/postReducer";


const rootReducer = combineReducers({
    firebase,
    channels: channelReducer,
    post: postReducer,
});

export default rootReducer;

