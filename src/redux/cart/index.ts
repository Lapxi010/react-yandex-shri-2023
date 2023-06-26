import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface initialStateT {
    [key: string]: number
}

const initialState: initialStateT = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, {payload} : PayloadAction<string>) => {
            const count = state[payload] || 0
            state[payload] = count + 1
        },
        decrement: (state, {payload} : PayloadAction<string>) => {
            const count = state[payload]

            if (!count) {
                return;
            }

            if (count <= 1) {
                delete state[payload]
                return;
            }

            state[payload] = count  - 1
        },
        delete: (state, {payload}: PayloadAction<string>) => {
            if (state[payload]) {
                delete state[payload]
            }
        },
        reset: () => initialState,
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions