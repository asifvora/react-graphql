import gql from 'graphql-tag'

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`

export const resolvers = {
  allFilms: {
    isChecked: (_, args, { cache }) => {
      return !!localStorage.getItem('token')
    },
  },
  Query: {
    messageCount: (_, args, { cache }) => {
      return {
        total: 123,
        __typename: 'MessageCount',
      }
    },
  },
}
