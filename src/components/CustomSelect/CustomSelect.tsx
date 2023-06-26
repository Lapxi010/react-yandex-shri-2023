'use client'

import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import {createPortal} from 'react-dom';
import Image from 'next/image'

import styles from './CustomSelect.module.css'
import arrow from '../../../public/arrow.svg'


interface dataT {
    id: string,
    name: string,
    movieIds: string[]
}

interface CustomSelectT {
    data: dataT[],
    placeholder: string,
    setValue: Function
}

export const CustomSelect: FC<CustomSelectT> = ({data, placeholder, setValue}) => {
    const [text, setText] = useState<string>('')
    const [active, setActive] = useState<boolean>(false)
    const [rectEl, setRectEl] = useState<DOMRect>()
    const dropDown = useRef<HTMLDivElement>(null)

    const setSelect = (e: ChangeEvent<HTMLLIElement>, id: string) => {
        setText(e.target.textContent as string)
        setValue(id)
        setActive(false)
    }

    useEffect(() => {
        setRectEl(dropDown?.current?.getBoundingClientRect())
    }, [])

    return (
        <div
            ref={dropDown}
            tabIndex={0}
            onFocus={() => {
                setActive(true)
            }}
            onBlur={(e) => {
                if (!e.relatedTarget?.parentElement?.classList?.contains(styles.dropDown)) {
                    setTimeout(() => setActive(false), 0)
                }
            }}
            className={classNames(styles.select, active ? styles.active : styles.notActive)}
        >
            <span
                style={{color: text?.length > 0 ? '#1B1F23' : '#999FA6'}}
            >{text?.length > 0 ? text : placeholder}</span>
            <button
                style={{transform: active ? 'rotate(180deg)' : 'rotate(0)'}}
                className={styles.btn}
                onClick={(e) => {
                    e.preventDefault()
                }}
            >
                <Image
                    src={arrow}
                    alt={'arrow'}
                    width={20}
                    height={20}
                />
            </button>
            {active && <>{createPortal(<ul
                className={styles.dropDown}
                style={{
                    width: rectEl?.width + 'px',
                    left: rectEl?.x, top: rectEl?.y! + rectEl?.height! + 4 + 'px',
                }}
            >
                {!(text.length > 0) && <li className={classNames(styles.empty, styles.item)} tabIndex={0}>Не выбран</li>}
                {data?.length > 0 && data.map(el => <li
                    className={styles.item}
                    tabIndex={0}
                    key={el.id}
                    onClick={(e: any) => setSelect(e, el.id)}
                >{el.name}</li>)}
            </ul>, document.body)}</>
            }
        </div>
    )
}