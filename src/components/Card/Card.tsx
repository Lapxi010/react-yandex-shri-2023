'use client'

import {useGetMovieQuery} from '@/redux/services/movieApi';
import {Loader} from '@/components/Loader/Loader'
import {translateGenre} from '@/utils/genreForFilms';
import {Counter} from '@/components/Counter/Counter';
import {DeleteBtn} from '@/components/Card/DeleteBtn/DeleteBtn';

import Image from 'next/image';
import React, {FC} from 'react';
import Link from 'next/link';

import styles from './Card.module.css'

interface CardT {
    title: string
    posterUrl: string
    genre: string,
    id: string,
    inCart?: boolean
}

export const CardForCart:FC<{id: string}> = ({id}) => {
    const {data, isLoading} = useGetMovieQuery(id)

    if (isLoading) {
        return <Loader/>
    }

    return <Card
        title={data.title}
        posterUrl={data.posterUrl}
        genre={data.genre}
        id={data.id}
        inCart={true}
    />
}

export const Card: FC<CardT> = ({title, posterUrl, genre, id, inCart = false}) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={posterUrl}
                    className={styles.image}
                    alt={'film'}
                    width={100}
                    height={120}
                    style={{objectFit: 'cover'}}
                />
            </div>
            <div className={styles.body}>
                <div className={styles.description}>
                    <Link href={`/film/${id}`} className={styles.title}>{title}</Link>
                    <span className={styles.genre}>{translateGenre(genre)}</span>
                </div>
                <div className={styles.control}>
                    <Counter id={id} inCart={inCart}/>
                    {inCart && <DeleteBtn id={id}/>}
                </div>
            </div>
        </div>
    )
}