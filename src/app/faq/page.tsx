import styles from './page.module.css'
import {Answer} from "@/components/answer/answer";

export default function Page() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <h2>Вопросы-ответы</h2>
            </div>
            <div className={styles.content}>
                <Answer/>
                <Answer/>
                <Answer/>
                <Answer/>
            </div>
        </div>
    )
}