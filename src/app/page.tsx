import styles from './page.module.css'
import {Card} from "@/components/card/card";

export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.menu}>
                <span className={styles.title}>Фильтр поиска</span>
                <form className={styles.form}>
                    <div className={styles.block}>
                        <label className={styles.label}>Название</label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={'Введите название'}
                        />
                    </div>
                    <div className={styles.block}>
                        <label className={styles.label}>Жанр</label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={'Выберите жанр'}
                        />
                    </div>
                    <div className={styles.block}>
                        <label className={styles.label}>Кинотеатр</label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder={'Выберите кинотеатр'}
                        />
                    </div>
                </form>
            </div>
            <div className={styles.body}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
