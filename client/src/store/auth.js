/**
 * Actions types
 */
export const SET_AUTH_USER = 'SET_AUTH_USER';
export const CLEAR_AUTH_USER = 'CLEAR_AUTH_USER';
export const UPDATE_AUTH_USER = 'UPDATE_AUTH_USER';

/**
 * Initial State
 */
export const authInitialState = {
  user: null,
};

/**
 * User Reducer
 */
export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_AUTH_USER: {
      return {
        ...state,
        ...authInitialState,
      };
    }

    default:
      return state;
  }
};




///add to main page...

import React from 'react';
import { Query } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GET_AUTH_USER } from 'graphql/user';
import { SET_AUTH_USER } from 'store/auth';

import AppLayout from '../route/AppLayout';
// import { Loading } from '../components/Common/Loading';
import Auth from '../route/Auth';
import { useStore } from 'store';
/**
 * Root Component of App
 */
const App = ({ location }) => {
  const [{ auth }, dispatch] = useStore();
  return (
    <Query
      query={GET_AUTH_USER}
      onCompleted={data => {
        dispatch({ type: SET_AUTH_USER, payload: data.getAuthUser });
      }}
    >
      {({ loading, refetch }) => {
        if (loading) {
          return <></>;
          // <Loading />;
        } else
          return (
            <Router>
              <Switch>
                {!auth.user ? (
                  <Route
                    exact
                    render={() => <Auth isAuth={false} refetch={refetch} />}
                  />
                ) : (
                  <Route exact render={() => <AppLayout refetch={refetch} />} />
                )}
              </Switch>
            </Router>
          );
      }}
    </Query>
  );
};
export default App;
