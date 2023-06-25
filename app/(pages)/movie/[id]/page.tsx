"use client"

import React from 'react'
import { useGetMovieQuery, useGetReviewsQuery } from '../../../redux/api'
import styles from "../Movie.module.css"
import Image from 'next/image'
import TicketButtons from '../../../components/TicketButtons'
import getRusGenre from '../../../services/genresTranslate'
import ReviewCard from '../components/ReviewCard'
import Spinner from '../../../components/Spinner'
import blurDataURL from '../../../services/blurDataURL'
import { ReviewType } from '../../../types'

export default function Movie({ params: { id } }:
  { params: { id: string } }) {
  const { data, isLoading, isError } = useGetMovieQuery(id)
  const reviewsQuery = useGetReviewsQuery(id)
  const reviews = reviewsQuery.data;

  return (
    <div className={styles.mainContainer}>
      {isLoading
        ? <Spinner />
        : (

          <div className={styles.pageContainer}>
            <section className={`card ${styles.movieCard}`}>

              <div className={styles.posterContainer}>
                <Image
                  src={data.posterUrl}
                  loader={() => data.posterUrl}
                  alt={`Постер фильма "${data.title}"`}
                  fill={true}
                  placeholder='blur'
                  blurDataURL={blurDataURL}
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.cardHeader}>
                  <p className={styles.movieName}>{data.title}</p>
                  <div className={styles.buttons}>

                    <TicketButtons id={id} />

                  </div>
                </div>

                <div className={styles.movieInfo}>
                  <div className={styles.infoBlock}>
                    <p className={styles.infoTitle}>Жанр:</p>
                    <p className={styles.infoContent}>{getRusGenre(data.genre)}</p>
                  </div>
                  <div className={styles.infoBlock}>
                    <p className={styles.infoTitle}>Год выпуска:</p>
                    <p className={styles.infoContent}>{data.releaseYear}</p>
                  </div>
                  <div className={styles.infoBlock}>
                    <p className={styles.infoTitle}>Рейтинг:</p>
                    <p className={styles.infoContent}>{data.rating}</p>
                  </div>
                  <div className={styles.infoBlock}>
                    <p className={styles.infoTitle}>Режиссёр:</p>
                    <p className={styles.infoContent}>{data.director}</p>
                  </div>
                </div>

                <div className={styles.movieDescriptionBlock}>
                  <p className={styles.infoTitle}>Описание:</p>
                  <p className={styles.infoContent}>{data.description}</p>
                </div>
              </div>
            </section>

            <section className={styles.reviewsSection}>
              {reviews && reviews.map((rev: ReviewType) => (
                <ReviewCard
                  key={rev.id}
                  id={rev.id}
                  name={rev.name}
                  rating={rev.rating}
                  text={rev.text}
                  avatarUrl={rev?.avatarUrl}
                />
              ))}
            </section>

          </div>

        )
      }
    </div>
  )
}
