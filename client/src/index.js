import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { StoreProvider } from './store/index';
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})
ReactDOM.render(
    <ApolloProvider client={client}>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </ApolloProvider>
    ,
    document.getElementById('root')
);
