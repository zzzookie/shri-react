import React from 'react'
import styles from "./ReviewCard.module.css"
import Image from 'next/image'

export default function ReviewCard({ id, name, rating, text, avatarUrl }:
  { id: string, name: string, rating: number, text: string, avatarUrl?: string }) {

  return (
    <div className={`card ${styles.reviewCard}`}>
      <div className={`fh g2 ${styles.container}`}>
        <div className={styles.avatarContainer}>
          {
            avatarUrl
              ? <Image
                src={avatarUrl}
                className={styles.avatar}
                width={90}
                height={90}
                alt={`Аватарка пользователя ${name}`}
              />
              : <div className={styles.avatarEmpty} />
          }
        </div>

        <div className={`fv g1 ${styles.content}`}>
          <div className={`fh ${styles.header}`}>
            <p className={styles.name}>{name}</p>
            <div className={`fh g0-5 ${styles.ratingWrapper}`}>
              <p className={styles.ratingTitle}>Оценка:</p>
              <p className={styles.rating}>{rating}</p>
            </div>
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </div>
  )
}
