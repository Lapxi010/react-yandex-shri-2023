'use client'

import Image from 'next/image'
import {FC} from 'react';

import styles from './Review.module.css'
import empty from '../../../public/empty.png'

interface reviewT {
    name: string,
    text: string,
    rating: number
}

export const Review: FC<reviewT> = ({name, text, rating}) => {
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
                    <span className={styles.name}>{name}</span>
                    <span className={styles.mark}>Оценка: <span className={styles.count}>{rating}</span></span>
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}