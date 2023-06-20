import styles from './page.module.css'
import Image from 'next/image'
import title from '../../../public/title.png'
import minus from "../../../public/minus.svg";
import plus from "../../../public/plus.svg";
import {Feedback} from "@/components/feedback/feedback";

export default function Page() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Image
                    src={title}
                    alt={'title'}
                    width={400}
                    height={500}
                />
                <div className={styles.about}>
                    <div className={styles.title}>
                        <h2>Властелин колец: Братство кольца</h2>
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
                    </div>
                    <div className={styles.details}>
                        <span className={styles.property}>Жанр: <span className={styles.value}>Фэнтези</span></span>
                        <span className={styles.property}>Год выпуска: <span className={styles.value}>2001</span></span>
                        <span className={styles.property}>Рейтинг: <span className={styles.value}>8</span></span>
                        <span className={styles.property}>Режиссер: <span
                            className={styles.value}>Питер Джексон</span></span>
                    </div>
                    <div className={styles.description}>
                        <span className={styles.description_title}>Описание</span>
                        <p>Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет.
                            Тот,
                            кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня,
                            где
                            живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу,
                            волшебник
                            Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо
                            принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть
                            своему
                            обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо
                            племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.</p>
                    </div>
                </div>
            </div>
            <Feedback/>
            <Feedback/>
            <Feedback/>
        </div>
    )
}