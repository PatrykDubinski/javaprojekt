import axios from "axios";
import { put } from "redux-saga/effects";

import {
  addPostFail,
  addPostStart,
  addPostSuccess,
  deletePostFail,
  deletePostStart,
  deletePostSuccess,
  getPostsFail,
  getPostsStart,
  getPostsSuccess,
  getUserPostsFail,
  getUserPostsStart,
  getUserPostsSuccess,
  updatePostFail,
  updatePostStart,
  updatePostSuccess,
} from "./post.actions";

export function* getPostsSaga(action) {
  yield put(getPostsStart());

  try {
    const response = yield axios.get("http://localhost:8080/api/posts");
    yield put(getPostsSuccess(response.data));
  } catch (err) {
    console.log(err.response.data);
    yield put(getPostsFail(err.response.data));
  }
}

export function* addPostSaga(action) {
  const { history } = action;
  yield put(addPostStart());

  const data = {
    title: action.title,
    description: action.description,
    userId: action.userId,
  };

  try {
    yield axios.post("http://localhost:8080/api/posts/add", data, {
      headers: {
        Authorization: `Bearer ${action.token}`,
      },
    });
    yield put(addPostSuccess());
    history.push("/posts");
  } catch (err) {
    console.log(err.response.data);
    yield put(addPostFail(err.response.data));
  }
}

export function* getUserPostsSaga(action) {
  yield put(getUserPostsStart());

  try {
    const response = yield axios.get(
      `http://localhost:8080/api/posts/${action.userId}`,
      {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      }
    );
    yield put(getUserPostsSuccess(response.data));
  } catch (err) {
    yield put(getUserPostsFail(err.response.data));
  }
}

export function* deletePostSaga(action) {
  const { history } = action;
  yield put(deletePostStart());

  try {
    yield axios.delete(
      `http://localhost:8080/api/posts/delete/${action.postId}`,
      {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      }
    );
    yield put(deletePostSuccess());
    history.push("/posts");
  } catch (err) {
    yield put(deletePostFail(err.response.data));
  }
}

export function* updatePostSaga(action) {
  yield put(updatePostStart());

  const data = {
    id: action.postId,
    title: action.title,
    description: action.description,
    userId: action.userId,
  };

  try {
    yield axios.put("http://localhost:8080/api/posts/edit", data, {
      headers: {
        Authorization: `Bearer ${action.token}`,
      },
    });
    yield put(updatePostSuccess());
  } catch (err) {
    yield put(updatePostFail(err.response.data));
  }
}
