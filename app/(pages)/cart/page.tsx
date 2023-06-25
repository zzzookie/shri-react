"use client"

import React, { useEffect, useState } from 'react'
import TicketCard from '../../components/TicketCard'
import { useGetMoviesQuery } from '../../redux/api'
import { MovieType } from '../../types'
import getRusGenre from '../../services/genresTranslate'
import styles from '../../page.module.css'
import { useSelector } from 'react-redux'
import { selectCart, selectCartQty } from '../../redux/cart'
import Link from 'next/link'
import Spinner from '../../components/Spinner'

export default function Cart() {
  const moviesQuery = useGetMoviesQuery(0)
  const movies: MovieType[] = moviesQuery.data
  const { isLoading, isError } = moviesQuery

  const cart = useSelector(state => selectCart(state))
  const cartQty = useSelector(state => selectCartQty(state))

  return (
    <div className={`fv ${styles.cartPageContainer}`}>
      {
        isLoading
          ? <Spinner />
          : cartQty > 0
            ? (
              <>
                <div className={styles.moviesList}>
                  {movies
                    .filter((movie) => Object.keys(cart).includes(movie.id) && cart[movie.id] > 0)
                    .map((movie) => (
                      <TicketCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        genreRus={getRusGenre(movie.genre)}
                        posterUrl={movie.posterUrl}
                        withDeleteButton
                        withModal
                      />
                    ))}
                </div>

                <div className={`card ${styles.ticketsTotal}`}>
                  <span>Итого билетов:</span>
                  <span>{cartQty}</span>
                </div>
              </>
            )
            : (
              <div className={`fv g1 ${styles.emptyCart}`}>
                <p>В корзине пока пусто.</p>
                <p>Может, хотите <Link href={'/'} style={{ color: '#FF5500' }}>поискать билеты</Link>?</p>
              </div>
            )
      }
    </div>
  )
}
