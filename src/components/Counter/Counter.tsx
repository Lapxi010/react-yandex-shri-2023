'use client'

import {Modal} from '@/components/Modal/Modal';
import {useTypedDispatch} from '@/hooks/UseTypedDispatch';
import {useTypedSelector} from '@/hooks/UseTypedSelector';
import {selectFilmAmount} from '@/redux/cart/selector';
import {cartActions} from '@/redux/cart';

import Image from 'next/image';
import React, {FC, useState} from 'react';

import styles from './Counter.module.css';
import minus from '../../../public/minus.svg';
import plus from '../../../public/plus.svg';



interface CounterT {
    id: string,
    inCart?: boolean
}

export const Counter: FC<CounterT> = ({id, inCart= false}) => {
    const dispatch = useTypedDispatch();
    const [active, setActive] = useState<boolean>(false)

    const amount = useTypedSelector((state) => selectFilmAmount(state, id))

    const decrement = () => {
        if (amount === 1 && inCart) {
            setActive(true)
        } else {
            dispatch(cartActions.decrement(id))
        }
    }

   return (
       <div className={styles.counter}>
           <button disabled={amount < 1} className={styles.btn_counter} onClick={decrement}>
               <Image
                   src={minus}
                   alt={'minus'}
               />
           </button>
           <span className={styles.counter_indicator}>{amount}</span>
           <button disabled={amount > 29} className={styles.btn_counter} onClick={() => dispatch(cartActions.increment(id))}>
               <Image
                   src={plus}
                   alt={'plus'}
               />
           </button>
           <Modal active={active} id={id} setActive={setActive}/>
       </div>
   )
}