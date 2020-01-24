import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Feed from "./Feed";

const GET_BOOK = gql`
    query booksLimit1($skip: Int!,$limit:Int!) {
        booksLimit1(skip: $skip,limit:$limit) {
            title
            author
            
        }
    }
`;
const FeedData = ({match}) => {
console.log("kddkkdkdk")
    return (
        <Query query={GET_BOOK} variables={{skip: 0, limit: 5}} >
            {({data, fetchMore, loading, error}) => {

                if (loading) return <h1>Loding...</h1>
                if (error) return <h1>Error{error}</h1>
                let ab=data.booksLimit1;
                console.log("dkdkdk",ab)
                return (

                    <Feed
                        entries={ab}
                        onLoadMore={(skip) =>
                            fetchMore({
                                variables: {
                                    skip: skip, limit: 5
                                },
                                updateQuery: (prev, {fetchMoreResult}) => {
                                    console.log("pre",prev,"fetchMore....",fetchMoreResult)
                                    if (!fetchMoreResult) return prev;
                                    return Object.assign({}, prev, {
                                        booksLimit1: [...prev.booksLimit1, ...fetchMoreResult.booksLimit1]
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
