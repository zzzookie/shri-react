"use client"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, selectCartProduct } from '../redux/cart'
import styles from './TicketButtons.module.css'
import Modal from './Modal'

export default function TicketButtons({ id, withModal }: { id: string, withModal?: boolean }) {
  const dispatch = useDispatch()
  const amount: number = useSelector(state => selectCartProduct(state, id))
  const [showModal, setShowModal] = useState<boolean>(false)

  function decrementOrDelete(): void {
    if (amount <= 1 && withModal) {
      setShowModal(true)
    } else {
      dispatch(cartActions.decrement(id))
    }
  }

  return (
    <div className={styles.buttonBlock}>
      <button onClick={() => decrementOrDelete()} className={styles.smallButton} type="button" disabled={amount <= 0}>
        <div className={`${styles.buttonIcon} ${styles.minusButton}`} />
      </button>

      <span className={styles.amount}>{amount}</span>

      <button onClick={() => dispatch(cartActions.increment(id))} className={styles.smallButton} type="button" disabled={amount >= 30}>
        <div className={`${styles.buttonIcon} ${styles.plusButton}`} />
      </button>

      {showModal && <Modal id={id} setShowModal={setShowModal} />}
    </div>
  )
}
