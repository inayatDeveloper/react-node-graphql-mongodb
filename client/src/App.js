import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link,
  NavLink
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/reactstrap/dist/reactstrap.full";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { useStore } from "./store/index";

import Test from "./components/users/Test";
import UserInfo from "./components/users/userInfo";
import Login from "./components/users/Login";
import Search from "./components/Search/Search";
import Home from "./components/navBar/Home/Home";
import Contact from "./components/navBar/Contact";
import About from "./components/navBar/About";
import Header from "./components/navBar/Header";
import User from "./components/users/index";
import Book from "./components/Books/Index";

const GET_AUTH_USER = gql`
  query user($id: String) {
    user(id: $id) {
      address
      userName
    }
  }
`;

const App = ({ location }) => {
  console.log("hihihih");
  const [{ auth }, dispatch] = useStore();
  console.log("auth.....2343", auth);
  return (
    <Query
      query={GET_AUTH_USER}
      onCompleted={data => {
        console.log("datssssssssssssssssssss", data.user);
        dispatch({ type: "SET_AUTH_USER", payload: data.user });
      }}
      variables={{ id: "5e25fdfa68f71d2f98385764" }}
    >
      {({ loading, refetch }) => {
        if (loading) {
          return <h1>Loading</h1>;
        } else {
          console.log("hihihih");
          return (
            <Router>
              <Header />
              <hr />
              <Switch>
                {/*
                {/* <Route exact path="/login" component={Login} />
                <Route exact path="/test" component={Test} />
                <Route path="/user/info" component={UserInfo} />
              
                 */}
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/user" component={User} />
                <Route path="/user" component={User} />
                <Route path="/book" component={Book} />
                <Route path="/search" component={Search} />
              </Switch>
            </Router>
          );
        }
      }}
    </Query>
  );
};

export default App;
