'use client'

import {store} from "@/redux/index";

import React, {FC} from 'react'
import {Provider} from 'react-redux'

export const StoreProvider: FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}