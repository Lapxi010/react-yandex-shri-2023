import styles from './page.module.css';
import {Card} from "@/components/card/card";
import {Modal} from "@/components/modal/modal";

export default function Page () {
    return (
        <>
            <div className={styles.wrapper}>
                <Modal/>
                <div className={styles.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className={styles.report}>
                    <span>Итого билетов:</span>
                    <span>7</span>
                </div>
            </div>
        </>
    )
}