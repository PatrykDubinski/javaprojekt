import { takeEvery } from "redux-saga/effects";
import {
  addPostSaga,
  deletePostSaga,
  getPostsSaga,
  getUserPostsSaga,
  updatePostSaga,
} from "./Post/post.sagas";
import postTypes from "./Post/post.types";
import {
  checkLoginSaga,
  logoutSaga,
  userSigninSaga,
  userSignupSaga,
} from "./User/user.sagas";
import userTypes from "./User/user.types";

export default function* rootSaga() {
  yield takeEvery(userTypes.USER_SIGNUP, userSignupSaga);
  yield takeEvery(userTypes.USER_SIGNIN, userSigninSaga);
  yield takeEvery(userTypes.CHECK_LOGIN, checkLoginSaga);
  yield takeEvery(userTypes.USER_LOGOUT, logoutSaga);
  yield takeEvery(postTypes.GET_POSTS, getPostsSaga);
  yield takeEvery(postTypes.ADD_POST, addPostSaga);
  yield takeEvery(postTypes.GET_USER_POSTS, getUserPostsSaga);
  yield takeEvery(postTypes.DELETE_POST, deletePostSaga);
  yield takeEvery(postTypes.UPDATE_POST, updatePostSaga);
}
