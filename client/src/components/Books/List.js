import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  withRouter,
  Link,
  NavLink
} from "react-router-dom";
const GET_BOOKS = gql`
  {
    books {
      _id
      title
      author
    }
  }
`;
const List = props => {
  let { path } = useRouteMatch();
  return (
    <Query pollInterval={500} query={GET_BOOKS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">LIST OF BOOKS</h3>
                <h4>
                  <Link to="/book">Add Book</Link>
                </h4>
              </div>
              <div className="panel-body">
                <table className="table table-stripe">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.books.map((book, index) => (
                      <tr key={index}>
                        <td>
                          <Link to={`/book/show/${book._id}`}>
                            {book.title}
                          </Link>
                        </td>
                        <td>{book.author}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default withRouter(List);
