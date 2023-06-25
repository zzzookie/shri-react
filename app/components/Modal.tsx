import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/cart'
import { Dispatch, SetStateAction } from 'react'
import styles from './TicketButtons.module.css'

export default function Modal({ id, setShowModal }:
  {id: string, setShowModal: Dispatch<SetStateAction<boolean>>}) {
  const dispatch = useDispatch()


  const modalContainer: HTMLElement = document.getElementById('modal') as HTMLElement
  const modalContent = (
    <div className="modal-container">
      <div className={`card g1`}>
        <p className={styles.modalTitle}>Удаление билета</p>
        <p className={styles.modalText}>Вы уверены, что хотите удалить билет?</p>

        <div className={styles.buttonBlock}>
          <button onClick={() => dispatch(cartActions.deleteCartItem(id))} className={`${styles.modalButton} ${styles.modalButtonPrimary}`} type="button">
            Да
          </button>
          <button onClick={() => setShowModal(false)} className={`${styles.modalButton} ${styles.modalButtonSecondary}`} type="button">
            Нет
          </button>
        </div>

        <button onClick={() => setShowModal(false)} className={`${styles.modalCloseButton} ${styles.deleteButton}`} type="button">
          <div className={styles.deleteButtonIcon} />
        </button>
      </div>
    </div>
  )

  return (
    createPortal(modalContent, modalContainer)
  )
}
