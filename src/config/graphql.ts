import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-boost'
import { API_URL } from 'config/env'

const httpLink = new HttpLink({
  uri: API_URL,
  // Additional fetch options like `credentials` or `headers`
  headers: {
    authorization: 'Bearer my-jwt-token',
  },
})

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    console.log({ graphQLErrors })

    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )

    if (networkError) console.log(`[Network error]: ${networkError}`)
  }
)

const link = ApolloLink.from([errorLink, httpLink])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
