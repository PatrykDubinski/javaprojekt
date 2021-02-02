import actionTypes from "./user.types";

export const signup = (username, email, password, role, history) => {
  return {
    type: actionTypes.USER_SIGNUP,
    username,
    email,
    password,
    role,
    history,
  };
};

export const signupStart = () => {
  return {
    type: actionTypes.USER_SIGNUP_START,
  };
};

export const signupSuccess = () => {
  return {
    type: actionTypes.USER_SIGNUP_SUCCESS,
  };
};

export const signupFail = (error) => {
  return {
    type: actionTypes.USER_SIGNUP_FAIL,
    error,
  };
};

/////////////////////////////////////

export const signin = (username, password, history) => {
  return {
    type: actionTypes.USER_SIGNIN,
    username,
    password,
    history,
  };
};

export const signinStart = () => {
  return {
    type: actionTypes.USER_SIGNIN_START,
  };
};

export const signinSuccess = (token, userId, username) => {
  return {
    type: actionTypes.USER_SIGNIN_SUCCESS,
    token,
    userId,
    username,
  };
};

export const signinFail = (error) => {
  return {
    type: actionTypes.USER_SIGNIN_FAIL,
    error,
  };
};

export const logout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

export const loginCheck = () => {
  return {
    type: actionTypes.CHECK_LOGIN,
  };
};
