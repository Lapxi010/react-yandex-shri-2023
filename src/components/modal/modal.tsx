import styles from './modal.module.css'
import Image from 'next/image'
import close from '../../../public/close.svg'

export const Modal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>Удаление билета</span>
                    <button className={styles.btn_close}>
                        <Image
                            src={close}
                            alt={'close'}
                            width={10}
                            height={10}
                        />
                    </button>
                </div>
                <p className={styles.text}>Вы уверены, что хотите удалить билет?</p>
                <div className={styles.btns}>
                    <button className={styles.btn_one}>Да</button>
                    <button className={styles.btn_two}>Нет</button>
                </div>
            </div>
        </div>
    )
}