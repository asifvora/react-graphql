import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchFilmQuery } from 'generated/graphql'
import { Laoder } from 'components/Loader'
import { Error } from 'components/Error'
import { Movie } from 'components/Movie'

export const MovieDetailsContainer: React.FC = () => {
  const { id } = useParams()
  const { loading, error, data } = useFetchFilmQuery({ variables: { id } })

  return (
    <Fragment>
      {loading ? (
        <Laoder />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Movie movie={data.Film} />
      )}
    </Fragment>
  )
}
