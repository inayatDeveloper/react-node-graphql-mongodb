import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Feed from "./Feed";

const GET_BOOK = gql`
    query booksLimit($skip: Int!,$limit:Int!) {
        booksLimit(skip: $skip,limit:$limit) {
            title
            author
            
        }
    }
`;
const FeedData = ({match}) => {

    return (
        <Query query={GET_BOOK} variables={{skip: 0, limit: 5}} >
            {({data, fetchMore, loading, error}) => {
                if (loading) return <h1>Loding...</h1>
                if (error) return <h1>Error{error}</h1>
                return (
                    <Feed
                        entries={data.booksLimit}
                        onLoadMore={(skip) =>
                            fetchMore({
                                variables: {
                                    skip: skip, limit: 5
                                },
                                updateQuery: (prev, {fetchMoreResult}) => {
                                    if (!fetchMoreResult) return prev;
                                    return Object.assign({}, prev, {
                                        booksLimit: [...prev.booksLimit, ...fetchMoreResult.booksLimit]
                                    });
                                }
                            })
                        }
                    />
                )
            }}
        </Query>
    )
}

export default FeedData;
