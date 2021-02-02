import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  signupStart,
  signupSuccess,
  signupFail,
  signinStart,
  signinSuccess,
  signinFail,
  logout,
} from "./user.actions";
import { saveToLocalStorage, loadFromLocalStorage } from "../utils";

export function* userSignupSaga(action) {
  const { history } = action;
  yield put(signupStart());
  const roles = [];
  roles.push(action.role);
  const data = {
    username: action.username,
    email: action.email,
    password: action.password,
    role: roles,
  };

  try {
    yield axios.post("http://localhost:8080/api/auth/signup", data);
    yield put(signupSuccess());
    history.push("/");
  } catch (error) {
    yield put(signupFail(error.response.data.message));
  }
}

export function* userSigninSaga(action) {
  const { history } = action;
  yield put(signinStart());
  const data = {
    username: action.username,
    password: action.password,
  };

  try {
    const response = yield axios.post(
      "http://localhost:8080/api/auth/signin",
      data
    );
    yield saveToLocalStorage(
      {
        token: response.data.accessToken,
        userId: response.data.id,
      },
      "user"
    );
    yield put(signinSuccess(response.data.accessToken, response.data.id));
    history.push("/");
  } catch (error) {
    yield put(signinFail(error.response.data.message));
  }
}

export function* checkLoginSaga(action) {
  const storage = yield loadFromLocalStorage("user");
  if (!storage) {
    yield put(logout());
  } else {
    const { token, userId, expDate } = storage;
    if (expDate <= new Date().getTime()) {
      yield put(logout());
    } else {
      yield put(signinSuccess(token, userId));
    }
  }
}

export function* logoutSaga(action) {
  yield call([localStorage, "removeItem"], "user");
}
