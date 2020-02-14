import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/reactstrap/dist/reactstrap.full";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { useStore } from "./store/index";
import Main from "./components/main";
import Edit from "./components/Edit";
import Create from "./components/Create";
import BookGetLimit from "./components/BookGetLimit";
import Show from "./components/Show";
import CreateUser from "./components/users/Create";
import UserList from "./components/users/userList";
import Test from "./components/users/Test";
import UserInfo from "./components/users/userInfo";
import Login from "./components/users/Login";
import Search from "./components/users/Search";
import SubRoutes from "./components/subRoutes/SubRoutes";

const GET_AUTH_USER = gql`
  query user($id: String) {
    user(id: $id) {
      address
      userName
    }
  }
`;

const App = ({ location }) => {
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
          return (
            <Router>
              <div>
                {/* <Route exact path='/' component={Main} />
                            <Route path='/edit/:id' component={Edit} />
                            <Route path='/create' component={Create} />
                            <Route path='/show/:id' component={Show} />
                            <Route path='/book/limit' component={BookGetLimit} />
                            <Route path='/user/create' component={CreateUser} />
                            <Route path='/list/user' component={UserList} />
                            */}
                <Route path="/login" component={Login} />
                <Route path="/user/info" component={UserInfo} />
                <Route path="/test" component={Test} />
                <Route path="/search" component={Search} />
                <Route path="/sub/routes" component={SubRoutes} />
              </div>
            </Router>
          );
        }
      }}
    </Query>
  );
};

export default App;
