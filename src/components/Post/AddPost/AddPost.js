import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "../../../redux/Post/post.actions";
import "./AddPost.css";

const mapState = ({ user, post }) => ({
  token: user.token,
  loading: post.loading,
  error: post.error,
  postAdded: post.postAdded,
  userId: user.userId,
});

const AddPost = () => {
  const dispatch = useDispatch();
  const { token, error, userId } = useSelector(mapState);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [insideError, setInsideError] = useState("");

  const history = useHistory();

  const handlePostAdd = async (e) => {
    e.preventDefault();
    if (token) {
      if (title && description) {
        await dispatch(addPost(title, description, token, userId, history));
      }
    } else {
      setInsideError("Musisz być zalogowany!");
    }
  };

  return (
    <div className="addPost">
      <h1>Dodaj ogłoszenie</h1>
      <form onSubmit={(e) => handlePostAdd(e)}>
        <label htmlFor="title">Tytuł</label>
        <input
          type="text"
          placeholder="Tytuł ogłoszenia"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="desc">Treść ogłoszenia</label>
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Dodaj ogłoszenie</button>
        {insideError && <p className="error">insideError</p>}
        {error && <p className="error">error</p>}
      </form>
    </div>
  );
};

export default AddPost;
