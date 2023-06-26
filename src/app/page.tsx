'use client'

import {FilmsBody} from '@/components/FilmsBody/FilmsBody';
import {Sidebar} from '@/components/Sidebar/Sidebar';

import {useState} from 'react';

import styles from './page.module.css'

export default function Home() {
    const [input, setInput] = useState<string>('')
    const [genre, setGenre] = useState<string>('')
    const [cinema, setCinema] = useState<string>('')

    return (
        <div className={styles.main}>
            <Sidebar setInput={setInput} setGenre={setGenre} setCinema={setCinema}/>
            <FilmsBody input={input} genre={genre} cinema={cinema}/>
        </div>
    )
}

