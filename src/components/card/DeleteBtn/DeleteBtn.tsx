'use client'

import styles from "./DeleteBtn.module.css";
import Image from "next/image";
import deleteImg from "../../../../public/deleteImg.svg";
import React, {FC, useState} from "react";
import {Modal} from "@/components/Modal/Modal";

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