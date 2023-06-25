"use client"

import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, selectCartQty } from '../redux/cart'
import { useEffect } from 'react'

export default function Header(): JSX.Element {
  const dispatch = useDispatch()
  const cartQty = useSelector(state => selectCartQty(state))

  useEffect(() => { dispatch(cartActions.getCart(null)) }, [])

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.headerLogo}>Билетопоиск</Link>
      <div>
        <Link href="/cart" className={styles.cartBlock}>
          <span className={styles.cartCounter}>{cartQty}</span>
          <Image src={'/icons/cart.svg'} alt={'Корзина'} width={28} height={25} />
        </Link>
      </div>
    </header>
  )
}
