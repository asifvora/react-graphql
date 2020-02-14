import React, { Fragment, Suspense } from 'react'
import { useMount } from 'react-use'
import { Router, Route, Switch } from 'react-router-dom'
import { history, routes } from 'config/routes'
import { Laoder } from 'components/Loader'
import ErrorBoundary from 'components/ErrorBoundary'

export const App: React.FC = () => {
  useMount(() => {
    window.addEventListener('new-content-available', () => {
      console.log('New content is available')
    })
  })

  return (
    <Fragment>
      <Suspense fallback={<Laoder />}>
        <ErrorBoundary>
          <Router history={history}>
            <Switch>
              {Object.keys(routes).map(key => {
                const { component: Component, exact, path, id } = routes[key]
                return (
                  <Route
                    key={id}
                    path={path}
                    exact={exact}
                    component={Component}
                  />
                )
              })}
            </Switch>
          </Router>
        </ErrorBoundary>
      </Suspense>
    </Fragment>
  )
}
