import styles from './card.module.css'
import Image from "next/image";
import film from "../../../public/film.png";
import minus from "../../../public/minus.svg";
import plus from "../../../public/plus.svg";
import close from "../../../public/close.svg";

export const Card = () => {
    return (
        <div className={styles.card}>
            <Image
                src={film}
                className={styles.image}
                alt={'film'}
                width={100}
                height={120}
            />
            <div className={styles.body}>
                <div className={styles.description}>
                    <span className={styles.title}>Властелин колец: Братство кольца</span>
                    <span className={styles.genre}>Фэнтези</span>
                </div>
                <div className={styles.control}>
                    <div className={styles.counter}>
                        <button className={styles.btn_counter}>
                            <Image
                                src={minus}
                                alt={'minus'}
                            />
                        </button>
                        <span className={styles.counter_indicator}>0</span>
                        <button className={styles.btn_counter}>
                            <Image
                                src={plus}
                                alt={'plus'}
                            />
                        </button>
                    </div>
                    <button className={styles.btn_delete}>
                        <Image
                            src={close}
                            alt={'close'}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}