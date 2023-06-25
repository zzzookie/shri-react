"use client"

import { useEffect, useState } from 'react'
import Filters from './components/Filters'
import TicketCard from './components/TicketCard'
import styles from './page.module.css'
import { useGetCinemasQuery, useGetMoviesQuery } from './redux/api'
import { MovieType, GenreType, FilterType, CinemaType } from './types'
import getRusGenre from './services/genresTranslate'
import Spinner from './components/Spinner'

export default function Home() {
  const [genres, setGenres] = useState<GenreType>({})
  const [filters, setFilters] = useState<FilterType>({})
  const [moviesFiltered, setMoviesFiltered] = useState<MovieType[]>([])

  const moviesQuery = useGetMoviesQuery(0)
  const cinemasQuery = useGetCinemasQuery(null)
  const movies: MovieType[] = moviesQuery.data
  const cinemas: CinemaType[] = cinemasQuery.data
  const { isLoading, error } = moviesQuery

  useEffect(() => {
    const genresTemp: GenreType = {}
    movies?.forEach(movie => {
      if (!(movie.genre in genresTemp)) genresTemp[movie.genre] = getRusGenre(movie.genre)
    })
    setGenres(genresTemp)
  }, [movies])

  useEffect(() => {
    if (!movies) return
    let filtered = [...movies]

    if (filters.cinema) {
      const moviesInThisCinema = cinemas.find(cinema => cinema.id === filters.cinema)?.movieIds
      if (moviesInThisCinema) filtered = filtered.filter(movie => moviesInThisCinema.includes(movie.id))
    }

    if (filters.title || filters.genre) {
      filtered = filtered.filter((movie) => {
        let result = true;
        if (filters.title && !(movie.title.toLowerCase().includes(filters.title.toLowerCase()))) result = false
        if (filters.genre && !(movie.genre === filters.genre)) result = false
        return result
      })
    }
    setMoviesFiltered(filtered)
  }, [filters])

  function selectListToShow() {
    if (Object.keys(filters).length > 0) {
      return moviesFiltered
    } else {
      return movies
    }
  }

  return (
    <div className={[styles.mainpageContainer].join(' ')}>

      <Filters genres={genres} cinemas={cinemas} setFilters={setFilters} />

      <div className={styles.moviesList}>
        {
          isLoading
            ? <Spinner />
            : movies && selectListToShow().map((movie) => (
              <TicketCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genreRus={getRusGenre(movie.genre)}
                posterUrl={movie.posterUrl}
              />
            ))
        }
      </div>
    </div>
  )
}
