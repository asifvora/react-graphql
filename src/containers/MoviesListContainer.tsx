import React, { Fragment } from 'react'
import { useFetchFilmsQuery } from 'generated/graphql'
import { Laoder } from 'components/Loader'
import { Error } from 'components/Error'
import { Movies } from 'components/Movies'

export const MoviesListContainer: React.FC = () => {
  const { loading, error, data } = useFetchFilmsQuery()

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
