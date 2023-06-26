import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface filmT {
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre: string,
    id: string,
    rating: number,
    director: string,
    reviewIds: string[],
}

interface reviewT{
    id: string,
    name: string,
    text: string,
    rating: number
}

interface cinemaT {
    id: string,
    name: string,
    movieIds: string[]
}

export const movieApi: any = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/'}),
    endpoints: (builder) => ({
        getMovie: builder.query<filmT, string>({query: (id) => `movie?movieId=${id}`}),
        getReviews: builder.query<reviewT[], string>({query: (id) => `reviews?movieId=${id}`}),
        getCinemas: builder.query<cinemaT[], null>({query: () => `cinemas`}),
        getFilmsCinema: builder.query<filmT[], string | undefined>({query: (id) => `movies?cinemaId=${id}`})
    }),
})
export const {
    useGetMovieQuery,
    useGetReviewsQuery,
    useGetCinemasQuery,
    useGetFilmsCinemaQuery
} = movieApi