import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  NavLink
} from "react-router-dom";
// import "../../assets/css/style.css";
const Header = Props => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
