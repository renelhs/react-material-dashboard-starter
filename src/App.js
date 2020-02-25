import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from "./pages/auth/Login";
import PrivateLayout from "./layouts/PrivateLayout";
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";

function PrivateRoute({ children, ...rest }) {
  return (
      <Route
          {...rest}
          render={({ location }) =>
              localStorage.getItem('token') ? (
                  <PrivateLayout>{children}</PrivateLayout>
              ) : (
                  <Redirect
                      to={{
                        pathname: '/',
                        state: { from: location },
                      }}
                  />
              )
          }
      />
  );
}

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <LoginPage />
              </Route>
              <PrivateRoute path="/dashboard">
                  <DashboardPage />
              </PrivateRoute>
              <PrivateRoute path="/settings">
                  <SettingsPage />
              </PrivateRoute>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
