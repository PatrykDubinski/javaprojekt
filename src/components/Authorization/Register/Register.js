import React, { useState } from "react";
import "./Register.css";

import { signup } from "../../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const mapState = ({ user }) => ({
  error: user.error,
  signupSuccess: user.signupSuccess,
});

const Register = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(mapState);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [insideError, setInsideError] = useState(null);

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password === passwordConfirm) {
      await dispatch(signup(username, email, password, "user", history));
    } else {
      setInsideError("Hasła muszą być takie same");
    }
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <h2>Rejestracja</h2>
        <form onSubmit={(e) => handleRegister(e)}>
          <label htmlFor="username">Nazwa użytkownika</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Podaj swoją nazwę użytkownika..."
          />
          <label htmlFor="mail">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="mail"
            id="mail"
            placeholder="Podaj swój e-mail..."
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
          <label htmlFor="passwordConfirm">Potwierdź Hasło</label>
          <input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Potwierdź swoje hasło..."
          />
          <button type="submit">Zarejestruj się</button>
          <Link to="/login">
            <p>Masz już konto? Kliknij tutaj aby się zalogować!</p>
          </Link>
          {error && <p className="error">{error}</p>}
          {insideError && <p className="error">{insideError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
