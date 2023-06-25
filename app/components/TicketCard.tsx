"use client"
import React, { useState } from 'react'
import TicketButtons from './TicketButtons'
import Image from 'next/image'
import Link from 'next/link'
import styles from './TicketCard.module.css'
import Modal from './Modal'
import blurDataURL from '../services/blurDataURL'

export default function TicketCard({ id, title, posterUrl, genreRus, withDeleteButton, withModal }:
  { id: string, title: string, posterUrl: string, genreRus?: string, withDeleteButton?: boolean, withModal?: boolean }
) {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className='card'>
      <div className={styles.container}>
        <Link href={`/movie/${id}`} className={styles.content}>
          <div className={styles.poster}>
            <Image
              src={posterUrl}
              loader={() => posterUrl}
              alt={`Постер фильма "${title}"`}
              fill={true}
              sizes="120px"
              loading="lazy"
              placeholder='blur'
              blurDataURL={blurDataURL}
              className={styles.cardImage}
              onLoad={(e) => (e.target as HTMLElement).classList.add(styles.unblur)}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{title}</p>
            <p className={styles.genre}>{genreRus}</p>
          </div>
        </Link>

        <div className={styles.buttons}>
          <TicketButtons id={id} withModal={withModal} />
          {withDeleteButton &&
            <button onClick={() => setShowModal(true)} className={styles.deleteButton} type="button">
              <div className={styles.deleteButtonIcon} />
            </button>
          }
        </div>
      </div>
      {showModal && <Modal id={id} setShowModal={setShowModal} />}
    </div>
  )
}
