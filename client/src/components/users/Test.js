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
        <Query query={GET_BOOK} variables={{skip: 0, limit: 5}} fetchPolicy="cache-and-network">
            {({ data, fetchMore }) => (
                <Feed
                    entries={data || []}
                    onLoadMore={() =>
                        fetchMore({
                            variables: {
                                offset: data
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                                if (!fetchMoreResult) return prev;
                                return Object.assign({}, prev, {
                                    feed: [...prev.feed, ...fetchMoreResult.feed]
                                });
                            }
                        })
                    }
                />
            )}
        </Query>
    )

}

export default FeedData;