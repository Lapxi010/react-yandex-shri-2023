'use client'

import styles from './page.module.css';
import {CardForCart} from "@/components/Card/Card";
import {selectAllAmountFilms, selectAllIdFilms} from "@/redux/cart/selector";
import {useTypedSelector} from "@/hooks/UseTypedSelector";

export default function Page() {
    const ids = useTypedSelector(state => selectAllIdFilms(state))
    const amount = useTypedSelector(state => selectAllAmountFilms(state))

    return (
        <>
            <div className={styles.wrapper}>
                {
                    amount ?
                        <>
                            <div className={styles.cards}>
                                {ids.length > 0 && ids.map(el => <CardForCart key={el} id={el}/>)}
                            </div>
                            <div className={styles.report}>
                                <span>Итого билетов:</span>
                                <span>{amount}</span>
                            </div>
                        </>
                        :
                        <h2 className={styles.empty}>В корзине ничего нет</h2>
                }
            </div>
        </>
    )
}