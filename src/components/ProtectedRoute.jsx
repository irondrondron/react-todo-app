import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  return (
    <Route
      path={props.path}
      render={(data) =>
        localStorage.getItem('usertoken') ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default ProtectedRoute;
