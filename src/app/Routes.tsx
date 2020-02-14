import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history, routes } from 'config/routes'

export const Routes: React.FC = () => {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          {Object.keys(routes).map(key => {
            const { component: Component, exact, path, id } = routes[key]
            return (
              <Route key={id} path={path} exact={exact} component={Component} />
            )
          })}
        </Switch>
      </Router>
    </Fragment>
  )
}
