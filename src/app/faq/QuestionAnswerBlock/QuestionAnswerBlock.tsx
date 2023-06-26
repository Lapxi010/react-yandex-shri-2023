'use client'

import styles from './QuestionAnswerBlock.module.css'
import Image from 'next/image'
import arrow from '../../../../public/arrow.svg'
import {FC, useState} from "react";

interface QuestionAnswerBlockT {
    question: string,
    answer: string
}

export const QuestionAnswerBlock: FC<QuestionAnswerBlockT> = ({question, answer}) => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div className={styles.answer}>
            <div className={styles.block}>
                <span>{question}</span>
                <button
                    className={styles.btn}
                    onClick={() => setActive((active) => !active)}
                    style={{transform: active ? 'rotate(180deg)' : 'rotate(0)'}}
                >
                    <Image
                        src={arrow}
                        alt={'arrow'}
                        width={29}
                        height={29}
                    />
                </button>
            </div>
            <div className={styles.description} style={{display: active ? 'block' : 'none'}}>
                <p>{answer}</p>
            </div>
        </div>
    )
}