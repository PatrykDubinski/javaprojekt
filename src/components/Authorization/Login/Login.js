import React, { useState } from "react";
import "./Login.css";

import { signin } from "../../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const mapState = ({ user }) => ({
  isAuth: user.token !== null,
  userError: user.error,
  loading: user.loading,
  authSuccess: user.authSuccess,
});

const Login = () => {
  const dispatch = useDispatch();
  const { userError } = useSelector(mapState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(signin(username, password, history));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <h2>Logowanie</h2>
        <form onSubmit={(e) => loginHandler(e)}>
          <label htmlFor="username">Nazwa użytkownika</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Podaj swoją nazwę użytkownika"
          />
          <label htmlFor="password">Hasło</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Podaj swoje hasło..."
          />
          <button type="submit">Zaloguj się</button>
          <Link to="/register">
            <p>Nie masz konta? Kliknij tutaj aby się zarejestrować!</p>
          </Link>
          {userError && userError}
        </form>
      </div>
    </div>
  );
};

export default Login;
