'use client'

import {selectAllAmountFilms} from '@/redux/cart/selector';
import {useTypedSelector} from '@/hooks/UseTypedSelector';

import styles from './CartCounter.module.css';


export const CartCounter = () => {
    const amount = useTypedSelector(state => selectAllAmountFilms(state))

    return (
        <span className={styles.counter} style={{display: amount !== 0 ? 'flex' : 'none'}}>{amount > 0 && amount}</span>
    )
}