'use client'

import styles from "@/app/film/[id]/FilmPageCard/FilmPageCard.module.css";
import Image from "next/image";
import {Counter} from "@/components/Counter/Counter";
import {FC} from "react";

interface FilmPageCardT {
    title: string,
    posterUrl: string,
    description: string,
    genre: string,
    rating: number,
    director: string,
    id: string,
    releaseYear: number
}

export const FilmPageCard: FC<FilmPageCardT> = ({
                                                    title,
                                                    posterUrl,
                                                    description,
                                                    genre,
                                                    rating,
                                                    director,
                                                    id,
                                                    releaseYear
                                                }) => {
    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <Image
                    src={posterUrl}
                    alt={'title'}
                    width={400}
                    height={500}
                    style={{objectFit: 'cover', borderRadius: '8px'}}
                />
            </div>
            <div className={styles.about}>
                <div className={styles.title}>
                    <h2>{title}</h2>
                    <Counter id={id}/>
                </div>
                <div className={styles.details}>
                    <span className={styles.property}>Жанр: <span className={styles.value}>{genre}</span></span>
                    <span className={styles.property}>Год выпуска: <span
                        className={styles.value}>{releaseYear}</span></span>
                    <span className={styles.property}>Рейтинг: <span className={styles.value}>{rating}</span></span>
                    <span className={styles.property}>Режиссер: <span
                        className={styles.value}>{director}</span></span>
                </div>
                <div className={styles.description}>
                    <span className={styles.description_title}>Описание</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}