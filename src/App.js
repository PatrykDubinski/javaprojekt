import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Logout from "./components/Authorization/Logout";

import { Switch, Route } from "react-router-dom";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Register/Register";
import Posts from "./components/Post/Posts";
import AddPost from "./components/Post/AddPost/AddPost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginCheck } from "./redux/User/user.actions";
import Profile from "./components/Profile/Profile";

const mapState = ({ user }) => ({
  isAuth: user.token !== null,
});

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(mapState);

  useEffect(() => {
    dispatch(loginCheck());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/add">
          <AddPost />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
