import React, { Fragment } from 'react'
// import { useFetchFilmsQuery } from 'generated/graphql'
import { Laoder } from 'components/Loader'
import { Error } from 'components/Error'
import { Movies } from 'components/Movies'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

const GET_MVS = gql`
  query allFilms {
    allFilms(orderBy: releaseDate_DESC) {
      id
      title
      releaseDate
      # isChecked @client
    }
  }
`
export const MoviesListContainer: React.FC = () => {
  // const { loading, error, data } = useFetchFilmsQuery()
  const { loading, error, data } = useQuery(GET_MVS)
  const { data: login } = useQuery(IS_LOGGED_IN)
  console.log(login)
  console.log(data?.allFilms?.[0])

  return (
    <Fragment>
      {loading ? (
        <Laoder />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Movies movies={data.allFilms} />
      )}
    </Fragment>
  )
}
