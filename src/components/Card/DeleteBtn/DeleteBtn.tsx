'use client'

import {Modal} from '@/components/Modal/Modal';

import Image from 'next/image';
import React, {FC, useState} from 'react';

import styles from './DeleteBtn.module.css';
import deleteImg from '../../../../public/deleteImg.svg';


export const DeleteBtn: FC<{ id: string }> = ({id}) => {
    const [active, setActive] = useState<boolean>(false)

    return (<>
            <button className={styles.btn_delete} onClick={() => setActive(true)}>
                <Image
                    src={deleteImg}
                    alt={'close'}
                />
            </button>
            <Modal active={active} id={id} setActive={setActive}/>
        </>
    )
}