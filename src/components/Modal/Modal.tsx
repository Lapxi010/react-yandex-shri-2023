'use client'

import {cartActions} from '@/redux/cart';
import {useTypedDispatch} from '@/hooks/UseTypedDispatch';

import Image from 'next/image'
import {createPortal} from "react-dom";
import {FC} from 'react';

import styles from './Modal.module.css'
import deleteImg from '../../../public/deleteImg.svg'


interface ModalT {
    id: string,
    setActive: Function,
    active: boolean
}

export const Modal: FC<ModalT> = ({id, setActive, active}) => {
    const dispatch = useTypedDispatch()

    const deleteFilm = () => {
        dispatch(cartActions.delete(id))
        setActive(false)
    }

    return (
        <>
            {active && createPortal(
            <div className={styles.modal} onClick={() => {
                setActive(false)
            }}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.title}>
                        <span>Удаление билета</span>
                        <button className={styles.btn_close} onClick={() => setActive(false)}>
                            <Image
                                src={deleteImg}
                                alt={'close'}
                                width={10}
                                height={10}
                            />
                        </button>
                    </div>
                    <p className={styles.text}>Вы уверены, что хотите удалить билет?</p>
                    <div className={styles.btns}>
                        <button onClick={deleteFilm} className={styles.btn_one}>Да</button>
                        <button onClick={() => setActive(false)} className={styles.btn_two}>Нет</button>
                    </div>
                </div>
            </div>, document.body)}
        </>
    )
}