import styles from './footer.module.css'
import Link from "next/link";
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href={'/faq'}>Вопросы-ответы</Link>
            <Link href={'/about'}>О нас</Link>
        </footer>
    )
}
