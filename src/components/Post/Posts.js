import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/Post/post.actions";
import "./Posts.css";

const mapState = ({ post }) => ({
  loading: post.loading,
  postError: post.error,
  posts: post.posts,
});

const Posts = () => {
  const dispatch = useDispatch();
  const { loading, postError, posts } = useSelector(mapState);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posts">
      {!loading && !postError ? (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Posts;
