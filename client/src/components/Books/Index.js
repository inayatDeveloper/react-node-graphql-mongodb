import React from "react";
import CreateBook from "./Create";
import List from "./List";
import ShowBook from "./Show";
import Edit from "./Edit";
import GetBookLimit from "./BookGetLimit";
import {
  Link,
  withRouter,
  useRouteMatch,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";

const Index = props => {
  let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <CreateBook />
        </Route>
        <Route path={`${path}/list`}>
          <List />
        </Route>
        <Route path={`${path}/show/:id`}>
          <ShowBook />
        </Route>
        <Route path={`${path}/edit/:id`}>
          <Edit />
        </Route>
        <Route path={`${path}/limit`}>
          <GetBookLimit />
        </Route>
      </Switch>
    </>
  );
};

export default Index;
