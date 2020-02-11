import React from 'react'
import { dateFormat } from 'utils/date'
import { IFilm } from 'types'

type IProps = {
  movie: IFilm
}

export const Movie: React.FC<IProps> = ({ movie }) => {
  const { title, releaseDate } = movie

  return (
    <main>
      <ol className="gradient-list">
        <li>
          {title ?? '-'}: {dateFormat(releaseDate) ?? '-'}
        </li>
      </ol>
    </main>
  )
}
