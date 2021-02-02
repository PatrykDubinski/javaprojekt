import actionTypes from "./user.types";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const signupUserStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const signupUserSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
  };
};

const signupUserFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const signinUserStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const signinUserSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    token: action.token,
    userId: action.userId,
  };
};

const signinUserFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const userLogout = (state, action) => {
  return initialState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNUP_START:
      return signupUserStart(state, action);
    case actionTypes.USER_SIGNUP_SUCCESS:
      return signupUserSuccess(state, action);
    case actionTypes.USER_SIGNUP_FAIL:
      return signupUserFail(state, action);
    case actionTypes.USER_SIGNIN_START:
      return signinUserStart(state, action);
    case actionTypes.USER_SIGNIN_SUCCESS:
      return signinUserSuccess(state, action);
    case actionTypes.USER_SIGNIN_FAIL:
      return signinUserFail(state, action);
    case actionTypes.USER_LOGOUT:
      return userLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
