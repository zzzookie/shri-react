"use client"
import React, { useState } from 'react'
import styles from './Accordeon.module.css'
import AccordeonCard from './AccordeonCard'

export default function Accordeon(props: { cards: IAccordeonCard[] }): JSX.Element {
  const { cards } = props
  const [openedCard, setOpenedCard] = useState(-1)

  return (
    <div className={styles.accordeon}>
      {cards.map(((card, i) => {
        return <AccordeonCard
          id={i}
          key={i}
          isOpened={openedCard === i}
          setOpenedCard={setOpenedCard}
          title={card.title}
          description={card.description}
        />
      }))}
    </div>
  )
}

export interface IAccordeonCard {
  title: string,
  description: string,
}
