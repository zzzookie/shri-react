import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerLink}><Link href="/faq">Вопросы-ответы</Link></p>
      <p className={styles.footerLink}><Link href="/about">О нас</Link></p>
    </footer>
  )
}
