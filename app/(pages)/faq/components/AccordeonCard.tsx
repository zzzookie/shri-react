import React from 'react'
import { IAccordeonCard } from './Accordeon'
import Image from 'next/image'
import styles from './Accordeon.module.css'


export default function AccordeonCard(props: IAccordeonCardWithState) {
  const { id, isOpened, title, description, setOpenedCard } = props

  function handleButton(): void { isOpened ? setOpenedCard(-1) : setOpenedCard(id) }

  const buttonStyle: string = isOpened
    ? [styles.openAccCardButton, styles.opened].join(' ')
    : styles.openAccCardButton

  const descStyle: string = isOpened
    ? [styles.acCardDescription, styles.opened].join(' ')
    : styles.acCardDescription

  return (
    <div className="card">
      <button onClick={handleButton} className={buttonStyle}>
        <Image src={'/icons/accordeonOpener.svg'} alt={'Открыть карточку'} width={32} height={32} />
      </button>
      <p onClick={handleButton} className={styles.acCardTitle}>{title}</p>
      <p className={descStyle}>{description}</p>
    </div>
  )
}

export interface IAccordeonCardWithState extends IAccordeonCard {
  id: number,
  isOpened: boolean,
  setOpenedCard: React.Dispatch<React.SetStateAction<number>>,
}
