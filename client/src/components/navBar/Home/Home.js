import React from "react";
import {
  Link,
  withRouter,
  useRouteMatch,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";
import Header from "./Header";

const Home = props => {
  console.log("props......", props);
  let { path } = useRouteMatch();
  return (
    <>
      <h2>Home Components</h2>
      <Header />
      <Switch>
        <Route exact path={path}>
          <DefaultSubHomeComponents />
        </Route>
        <Route path={`${path}/:id`}>
          <HomeSubComponents />
        </Route>
      </Switch>
    </>
  );
};

const HomeSubComponents = () => {
  let { id } = useParams();
  return (
    <>
      <h3>{id}</h3>
    </>
  );
};
const DefaultSubHomeComponents = () => {
  return (
    <>
      <h3>DefaultSubHomeComponents</h3>
    </>
  );
};
export default Home;
