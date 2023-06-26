interface genreT {
    name: string,
    movieIds: string[],
    id: string
}

export const genres:genreT[] = [
    {name: 'боевиĸ', movieIds: [], id: '67083982-8c10-4c58-b2e7-5f74d995117d'},
    {name: 'фэнтези', movieIds: [], id: 'e1e221b0-9490-45c6-a09f-d70a57bb9647'},
    {name: 'ужасы', movieIds: [], id: '8c7329fb-7138-4a4e-a34d-f53616884897'},
    {name: 'ĸомедия', movieIds: [], id: '0635d041-1a66-469e-85ad-554b55a86e2e'},
]

export const findGenre = (id: string) => {
    let res: genreT = genres.filter(el => el.id === id)[0]
    return res.name
}
export const translateGenre = (genre: string) => {
    switch (genre) {
        case 'action':
            return 'боевиĸ'
        case 'fantasy':
            return 'фэнтези'
        case 'horror':
            return 'ужасы'
        case 'comedy':
            return 'ĸомедия'
        default:
            return 'unknow'
    }
}