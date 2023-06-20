import styles from './answer.module.css'
import Image from 'next/image'
import arrow from '../../../public/arrow.svg'

export const Answer = () => {
    return (
        <div className={styles.answer}>
            <div className={styles.block}>
                <span>Когда был основан билетопоиск?</span>
                <button className={styles.btn}>
                    <Image
                        src={arrow}
                        alt={'arrow'}
                        width={29}
                        height={29}
                    />
                </button>
            </div>
            <div className={styles.description}>
                <p>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты
                    в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать
                    рецензии и дополнить описание фильмов.</p>
            </div>
        </div>
    )
}