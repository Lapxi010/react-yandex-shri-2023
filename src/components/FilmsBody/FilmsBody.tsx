'use client'

import styles from "./FilmsBody.module.css";
import {Card} from "@/components/Card/Card";
import {useGetFilmsCinemaQuery} from "@/redux/services/movieApi";
import {Loader} from "@/components/Loader/Loader";
import {FC} from "react";
import {translateGenre, findGenre} from "@/utils/genreForFilms";

interface CardT {
    title: string
    posterUrl: string
    genre: string,
    id: string
}

interface FilmsBodyT {
    input: string,
    cinema: string,
    genre: string
}

export const FilmsBody: FC<FilmsBodyT> = ({input, cinema, genre}) => {
    const {data, isLoading} = useGetFilmsCinemaQuery(cinema)

    const films = data?.filter((el: CardT) => {
        let title = el.title.toLowerCase();
        let cond = input.toLowerCase().trim();

        let flagCond = cond.slice(0, cond.length) === title.slice(0, cond.length)

        if (genre.length > 0) {
            return flagCond && (translateGenre(el.genre) === findGenre(genre));
        } else {
            return flagCond;
        }
    })

    return (
        <div
            className={styles.body}>
            {isLoading ?
                <Loader/> : <>{films?.length > 0 && films.map((card: CardT) => <Card
                    title={card.title}
                    posterUrl={card.posterUrl}
                    genre={card.genre}
                    id={card.id}
                    key={card.id}
                />)}</>}
            {(!(films?.length > 0) && !isLoading) && <h2 className={styles.empty}>Ничего не найдено</h2>}
        </div>
    )
}