import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "../../assets/css/style.css";
const Header = Props => {
  return (
    <>
      <ul>
        <li className="d-inline font-italic mr-2">
          <NavLink exact activeClassName="active" to="/home">
            Home
          </NavLink>
        </li>
        <li className="d-inline font-italic mr-2">
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li className="d-inline font-italic mr-2">
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="d-inline font-italic mr-2">
          <NavLink activeClassName="active" to="/user">
            Users
          </NavLink>
        </li>
        <li className="d-inline font-italic mr-2">
          <NavLink activeClassName="active" to="/book">
            Book
          </NavLink>
        </li>
        <li className="d-inline font-italic mr-2">
          <NavLink activeClassName="active" to="/search">
            Search
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
