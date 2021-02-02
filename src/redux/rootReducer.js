import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import postReducer from "./Post/post.reducer";

export default combineReducers({
  user: userReducer,
  post: postReducer,
});
