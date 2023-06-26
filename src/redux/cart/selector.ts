import {RootState} from '@/redux';

const selectCartModule = (state: RootState) => state.cart

export const selectFilmAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0

export const selectAllIdFilms = (state: RootState) => Object.keys(selectCartModule(state))

export const selectAllAmountFilms = (state: RootState) => {
    const root = selectCartModule(state)

    return Object.values(root)?.reduce((cur: any, i: any) => cur + i, 0)
}