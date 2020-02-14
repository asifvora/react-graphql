import React, { Fragment, Suspense } from 'react'
import { useMount } from 'react-use'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from 'config/graphql'
import { Laoder } from 'components/Loader'
import { Routes } from 'app/Routes'
import ErrorBoundary from 'components/ErrorBoundary'

export const App: React.FC = () => {
  useMount(() => {
    window.addEventListener('new-content-available', () => {
      console.log('New content is available')
    })
  })

  return (
    <Fragment>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <Suspense fallback={<Laoder />}>
            <Routes />
          </Suspense>
        </ApolloProvider>
      </ErrorBoundary>
    </Fragment>
  )
}
