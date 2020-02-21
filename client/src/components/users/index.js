import React, { useReducer } from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import CreateUser from "./Create";
import UserList from "./userList";
import {
  Link,
  withRouter,
  useRouteMatch,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";

const addUser = gql`
  mutation addUserInfo($userName: String!, $address: String!) {
    addUserInfo(userName: $userName, address: $address) {
      userName
    }
  }
`;

const Index = props => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userName: "",
      address: ""
    }
  );

  const handleInput = e => {
    setUserInput({ [e.target.name]: e.target.value });
  };

  let { userName, address } = userInput;
  let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <CreateUser />
        </Route>
        <Route path={`${path}/list`}>
          <UserList />
        </Route>
      </Switch>
    </>
  );
};

export default Index;
