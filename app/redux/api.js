import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" })

export const movieApi = createApi({
  reducerPath: "movies",
  baseQuery,
  endpoints: (builder) => ({
    getMovies: builder.query({ query: () => "movies" }),
    getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` })
  })
})

export const cinemasApi = createApi({
  reducerPath: "cinemas",
  baseQuery,
  endpoints: (builder) => ({
    getCinemas: builder.query({ query: () => "cinemas" })
  })
})

export const reviewsApi = createApi({
  reducerPath: "reviews",
  baseQuery,
  endpoints: (builder) => ({
    getReviews: builder.query({ query: (movieId) => `reviews?movieId=${movieId}` })
  })
})

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi
export const { useGetCinemasQuery } = cinemasApi
export const { useGetReviewsQuery } = reviewsApi
