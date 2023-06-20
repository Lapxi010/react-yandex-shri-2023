import styles from './feedback.module.css'
import Image from 'next/image'
import empty from '../../../public/empty.png'

export const Feedback = () => {
    return (
        <div className={styles.feedback}>
            <Image
                src={empty}
                alt={'avatar'}
                width={100}
                height={100}
            />
            <div className={styles.content}>
                <div className={styles.title}>
                    <span className={styles.name}>Роман</span>
                    <span className={styles.mark}>Оценка: <span className={styles.count}>8</span></span>
                </div>
                <p>
                    По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет
                    назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем,
                    и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся
                    пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где
                    зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь
                    лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет...
                </p>
            </div>
        </div>
    )
}