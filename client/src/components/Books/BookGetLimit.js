import React, { useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_BOOK = gql`
  query booksLimit($skip: Int!, $limit: Int!) {
    booksLimit(skip: $skip, limit: $limit) {
      title
      author
    }
  }
`;
const BookGetLimit = props => {
  const [limit, setLimit] = useState(5);
  return (
    <Query query={GET_BOOK} variables={{ skip: 0, limit }}>
      {({ loading, error, data }) => {
        if (loading) return <h6>Loading...</h6>;
        if (error) return <h6>Error.{error}</h6>;

        return (
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <b>
                  <p className="text-center">Books</p>
                </b>
                <ul class="list-group">
                  {data.booksLimit.map((item, index) => (
                    <li class="list-group-item">{item.title}</li>
                  ))}
                </ul>

                {data.booksLimit.length <= 20 ? (
                  <button
                    className="btn-primary"
                    onClick={e => setLimit(limit + 5)}
                  >
                    See more
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};
export default BookGetLimit;
