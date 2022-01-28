import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router';
import { Routes } from '../Routes';

function AppRouter() {
  return (
    <div>
      <Switch>
        {Routes.map(route => (
          <Route
            key={route.path}
            component={route.component}
            exact={route.exact}
            path={route.path}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default AppRouter;
