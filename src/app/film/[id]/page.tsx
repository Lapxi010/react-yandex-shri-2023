'use client'

import styles from './page.module.css'
import {Review} from "@/app/film/[id]/Review/Review";
import {useGetMovieQuery, useGetReviewsQuery} from "@/redux/services/movieApi";
import {FilmPageCard} from "@/app/film/[id]/FilmPageCard/FilmPageCard";
import {Loader} from "@/components/Loader/Loader";

interface reviewT {
    id: string,
    name: string,
    text: string,
    rating: number
}

export default function Page({params}: { params: { id: string } }) {
    const {data: movie, isLoading: movieIsLoading, error: movieError} = useGetMovieQuery(params?.id)
    const {data: reviews, isLoading: reviewsIsLoading, error: reviewsError} = useGetReviewsQuery(params?.id)

    return (
        <div className={styles.wrapper}>
            {movieIsLoading ? <Loader/> :
                <FilmPageCard
                    title={movie?.title}
                    posterUrl={movie?.posterUrl}
                    description={movie?.description}
                    genre={movie?.genre}
                    rating={movie?.rating}
                    director={movie?.director}
                    id={movie?.id}
                    releaseYear={movie?.releaseYear}
                />}

            {(reviews?.length > 0 && !movieIsLoading) && reviews.map((review: reviewT) =>
                <Review
                    key={review.id}
                    name={review.name}
                    text={review.text}
                    rating={review.rating}
                />
            )}
        </div>
    )
}