import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePost, updatePost } from "../../../redux/Post/post.actions";
import "./ProfilePost.css";

const mapState = ({ user, post }) => ({
  token: user.token,
  isDeleted: post.isDeleted,
  userId: user.userId,
  edited: post.edited,
  loading: post.loading,
});

const ProfilePost = ({ title, desc, id }) => {
  const { token, userId, loading } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDelete = () => {
    dispatch(deletePost(id, token, history));
  };

  const editHandler = () => {
    if (newTitle !== "" && description !== "") {
      dispatch(updatePost(id, token, newTitle, description, userId));
      history.push("/profile");
    }
  };

  return (
    <div className="post">
      {loading ? (
        <h1>Loading...</h1>
      ) : !isEditing ? (
        <>
          <h2>{title}</h2>
          <p>{desc}</p>
          <button className="editBtn" onClick={(e) => setIsEditing(true)}>
            Edit
          </button>
          <button className="deleteBtn" onClick={handleDelete}>
            Delete
          </button>
        </>
      ) : (
        <div className="editing">
          <input
            type="text"
            id="newTitle"
            name="newTitle"
            placeholder="Nowy tytuł..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Nowy opis..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="saveBtn" onClick={() => editHandler()}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePost;
