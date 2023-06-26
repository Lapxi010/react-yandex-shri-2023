import Link from 'next/link';

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href={'/faq'}>Вопросы-ответы</Link>
            <Link href={'/about'}>О нас</Link>
        </footer>
    )
}
