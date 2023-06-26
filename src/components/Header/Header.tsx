import Image from 'next/image'
import styles from './Header.module.css'
import basket from '../../../public/basket.svg';
import Link from "next/link";
import {CartCounter} from "@/components/Header/CartCounter/CartCounter";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.title}>Билетопоиск</Link>
            <div className={styles.wrapper}>
                <CartCounter/>
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
