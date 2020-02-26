import React from 'react'
import { dateFormat } from 'utils/date'
import { IFilms } from 'types'
import { history, routes } from 'config/routes'

type IProps = {
  movies: IFilms
}

export const Movies: React.FC<IProps> = ({ movies }) => {
  const gotoDetails = (id: string) => {
    history.push(routes.movieDetails.path_string({ id }))
  }

  return (
    <main>
      <ol className="gradient-list">
        {movies.map((film, index) => (
          <li
            key={index}
            onClick={() => gotoDetails(film?.id)}
            className="movie"
          >
            {film?.title ?? '-'}: {dateFormat(film?.releaseDate) ?? '-'}
          </li>
        ))}
      </ol>
    </main>
  )
}
