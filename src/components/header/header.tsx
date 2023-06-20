import Image from 'next/image'
import styles from './header.module.css'
import basket from '../../../public/basket.svg';
import Link from "next/link";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.title}>Билетопоиск</Link>
            <div className={styles.wrapper}>
                <span className={styles.counter}>5</span>
                <Link href={'/cart'}>
                    <Image
                        src={basket}
                        alt={'basket'}
                        width={28}
                        height={25}
                    />
                </Link>
            </div>
        </header>
    )
}
