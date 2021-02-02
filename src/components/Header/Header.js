import React from "react";
import "./Header.css";
import NavItem from "./NavItem/NavItem";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ isAuth }) => {
  return (
    <nav className="header">
      <ul className="navItems">
        <Link to="/posts">
          <NavItem>Ogłoszenia</NavItem>
        </Link>
        {!isAuth ? (
          <Link to="/login">
            <NavItem>Zaloguj się</NavItem>
          </Link>
        ) : (
          <Link to="/profile">
            <NavItem>Moje ogłoszenia</NavItem>
          </Link>
        )}
        {isAuth && (
          <Link to="/add">
            <NavItem>Dodaj ogłoszenie</NavItem>
          </Link>
        )}
        {isAuth && (
          <Link to="/logout">
            <NavItem>Wyloguj</NavItem>
          </Link>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.token != null,
  };
};

export default connect(mapStateToProps)(Header);
