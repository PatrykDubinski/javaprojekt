import actionTypes from "./post.types";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  postAdded: null,
  userPosts: [],
  isDeleted: null,
  edited: null,
};

const getPostsStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const getPostsSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    posts: action.posts,
  };
};

const getPostsFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const addPostStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const addPostSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    postAdded: true,
  };
};

const addPostFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const getUserPostsStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const getUserPostsSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    userPosts: action.userPosts,
  };
};

const getUserPostsFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const deletePostStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const deletePostSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    isDeleted: true,
  };
};

const deletePostFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const updatePostStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
    edited: false,
  };
};

const updatePostSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    edited: true,
  };
};

const updatePostFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_START:
      return getPostsStart(state, action);
    case actionTypes.GET_POSTS_SUCCESS:
      return getPostsSuccess(state, action);
    case actionTypes.GET_POSTS_FAIL:
      return getPostsFail(state, action);
    case actionTypes.ADD_POST_START:
      return addPostStart(state, action);
    case actionTypes.ADD_POST_SUCCESS:
      return addPostSuccess(state, action);
    case actionTypes.ADD_POST_FAIL:
      return addPostFail(state, action);
    case actionTypes.GET_USER_POSTS_START:
      return getUserPostsStart(state, action);
    case actionTypes.GET_USER_POSTS_SUCCESS:
      return getUserPostsSuccess(state, action);
    case actionTypes.GET_USER_POSTS_FAIL:
      return getUserPostsFail(state, action);
    case actionTypes.DELETE_POST_START:
      return deletePostStart(state, action);
    case actionTypes.DELETE_POST_SUCCESS:
      return deletePostSuccess(state, action);
    case actionTypes.DELETE_POST_FAIL:
      return deletePostFail(state, action);
    case actionTypes.UPDATE_POST_START:
      return updatePostStart(state, action);
    case actionTypes.UPDATE_POST_SUCCESS:
      return updatePostSuccess(state, action);
    case actionTypes.UPDATE_POST_FAIL:
      return updatePostFail(state, action);
    default:
      return state;
  }
};

export default reducer;
