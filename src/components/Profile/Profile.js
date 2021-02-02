import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";

import { getUserPosts } from "../../redux/Post/post.actions";
import ProfilePost from "./ProfilePost/ProfilePost";

const mapState = ({ user, post }) => ({
  token: user.token,
  userId: user.userId,
  loading: post.loading,
  error: post.error,
  isDeleted: post.isDeleted,
  edited: post.edited,
  userPosts: post.userPosts,
});

const Profile = () => {
  const {
    token,
    userId,
    loading,
    error,
    userPosts,
    isDeleted,
    edited,
  } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && userId) {
      dispatch(getUserPosts(userId, token));
    }
  }, [token, userId, dispatch]);

  useEffect(() => {
    if (isDeleted || edited) {
      dispatch(getUserPosts(userId, token));
    }
  }, [isDeleted, edited]);

  return (
    <div className="profile">
      {!loading && !error ? (
        userPosts.map((post, i) => (
          <ProfilePost
            key={post.id}
            id={post.id}
            title={post.title}
            desc={post.description}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Profile;
