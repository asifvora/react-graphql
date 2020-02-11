import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import { API_URL } from 'config/env'

import './index.css'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: API_URL,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
