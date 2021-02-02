import actionTypes from "./post.types";

export const getPosts = () => {
  return {
    type: actionTypes.GET_POSTS,
  };
};

export const getPostsStart = () => {
  return {
    type: actionTypes.GET_POSTS_START,
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    posts,
  };
};

export const getPostsFail = (error) => {
  return {
    type: actionTypes.GET_POSTS_FAIL,
    error,
  };
};

export const addPost = (title, description, token, userId, history) => {
  return {
    type: actionTypes.ADD_POST,
    title,
    description,
    token,
    userId,
    history,
  };
};

export const addPostStart = () => {
  return {
    type: actionTypes.ADD_POST_START,
  };
};

export const addPostSuccess = (post) => {
  return {
    type: actionTypes.ADD_POST_SUCCESS,
  };
};

export const addPostFail = (error) => {
  return {
    type: actionTypes.ADD_POST_FAIL,
    error,
  };
};

export const getUserPosts = (userId, token) => {
  return {
    type: actionTypes.GET_USER_POSTS,
    token,
    userId,
  };
};

export const getUserPostsStart = () => {
  return {
    type: actionTypes.GET_USER_POSTS_START,
  };
};

export const getUserPostsSuccess = (userPosts) => {
  return {
    type: actionTypes.GET_USER_POSTS_SUCCESS,
    userPosts,
  };
};

export const getUserPostsFail = (error) => {
  return {
    type: actionTypes.GET_USER_POSTS_FAIL,
    error,
  };
};

export const deletePost = (postId, token, history) => {
  return {
    type: actionTypes.DELETE_POST,
    postId,
    token,
    history,
  };
};

export const deletePostStart = () => {
  return {
    type: actionTypes.DELETE_POST_START,
  };
};

export const deletePostSuccess = () => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
  };
};

export const deletePostFail = (error) => {
  return {
    type: actionTypes.DELETE_POST_FAIL,
    error,
  };
};

export const updatePost = (postId, token, title, description, userId) => {
  return {
    type: actionTypes.UPDATE_POST,
    postId,
    title,
    description,
    userId,
    token,
  };
};

export const updatePostStart = () => {
  return {
    type: actionTypes.UPDATE_POST_START,
  };
};

export const updatePostSuccess = () => {
  return {
    type: actionTypes.UPDATE_POST_SUCCESS,
  };
};

export const updatePostFail = (error) => {
  return {
    type: actionTypes.UPDATE_POST_FAIL,
    error,
  };
};
